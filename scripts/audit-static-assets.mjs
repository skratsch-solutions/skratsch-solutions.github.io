import { access, readFile, readdir } from 'node:fs/promises'
import path from 'node:path'

const repositoryRoot = process.cwd()
const distDirectory = path.join(repositoryRoot, 'dist')
const assetUrlPattern = /(?:src|href)=["'](\/images\/[^"'#?]+)|url\(["']?(\/images\/[^"')#?]+)/g

const listFiles = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true })
  const nestedFiles = await Promise.all(entries.map((entry) => {
    const entryPath = path.join(directory, entry.name)
    return entry.isDirectory() ? listFiles(entryPath) : [entryPath]
  }))

  return nestedFiles.flat()
}

const outputFiles = (await listFiles(distDirectory))
  .filter((filePath) => filePath.endsWith('.html') || filePath.endsWith('.css'))
const referencedAssetUrls = new Set()

for (const outputFile of outputFiles) {
  const source = await readFile(outputFile, 'utf8')
  for (const match of source.matchAll(assetUrlPattern)) {
    referencedAssetUrls.add(decodeURI(match[1] ?? match[2]))
  }
}

const missingAssets = []

for (const assetUrl of [...referencedAssetUrls].sort()) {
  const assetPath = path.join(distDirectory, ...assetUrl.split('/').filter(Boolean))
  try {
    await access(assetPath)
  } catch {
    missingAssets.push({ assetPath, assetUrl })
  }
}

if (missingAssets.length > 0) {
  console.error('Static asset audit failed. Referenced assets are missing from dist:')
  for (const { assetPath, assetUrl } of missingAssets) {
    console.error(`- ${assetUrl} -> ${path.relative(repositoryRoot, assetPath)}`)
  }
  process.exit(1)
}

console.log(`Static asset audit passed: ${referencedAssetUrls.size} image and font URLs emitted in dist.`)
