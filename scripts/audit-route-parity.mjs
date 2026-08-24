import { access, readFile } from 'node:fs/promises'
import path from 'node:path'
import ts from 'typescript'

const repositoryRoot = process.cwd()
const manifestPath = path.join(repositoryRoot, 'src/data/legacy-url-manifest.ts')
const distDirectory = path.join(repositoryRoot, 'dist')

const loadLegacyRouteManifest = async () => {
  const manifestSource = await readFile(manifestPath, 'utf8')
  const transpiledManifest = ts.transpileModule(manifestSource, {
    compilerOptions: {
      module: ts.ModuleKind.ES2022,
      target: ts.ScriptTarget.ES2022,
    },
  })
  const manifestDataUrl = `data:text/javascript;base64,${Buffer.from(transpiledManifest.outputText).toString('base64')}`

  return import(manifestDataUrl)
}

const getDistPathForUrl = (legacyUrl) => {
  if (legacyUrl === '/') {
    return path.join(distDirectory, 'index.html')
  }

  if (legacyUrl.endsWith('.html')) {
    return path.join(distDirectory, legacyUrl.slice(1))
  }

  return path.join(distDirectory, legacyUrl.slice(1), 'index.html')
}

const assertFileExists = async (filePath) => {
  try {
    await access(filePath)
    return true
  } catch {
    return false
  }
}

const sortUniqueUrls = (urls) => [...new Set(urls)].sort((firstUrl, secondUrl) => firstUrl.localeCompare(secondUrl))

const {
  getLegacyCollectionUrls,
  getLegacyTeamUrls,
  legacyTopLevelRoutes,
} = await loadLegacyRouteManifest()

const preservedTopLevelUrls = legacyTopLevelRoutes
  .filter((legacyRoute) => legacyRoute.status === 'preserve' && legacyRoute.legacyUrl)
  .map((legacyRoute) => legacyRoute.legacyUrl)
const expectedPreservedUrls = sortUniqueUrls([
  ...preservedTopLevelUrls,
  ...getLegacyCollectionUrls(),
  ...getLegacyTeamUrls(),
])

const missingRouteResults = []

for (const preservedUrl of expectedPreservedUrls) {
  const expectedDistPath = getDistPathForUrl(preservedUrl)
  const routeExists = await assertFileExists(expectedDistPath)

  if (!routeExists) {
    missingRouteResults.push({ expectedDistPath, preservedUrl })
  }
}

if (missingRouteResults.length > 0) {
  console.error('Route parity audit failed. Missing preserved legacy URLs:')
  for (const missingRouteResult of missingRouteResults) {
    console.error(`- ${missingRouteResult.preservedUrl} -> ${path.relative(repositoryRoot, missingRouteResult.expectedDistPath)}`)
  }
  process.exit(1)
}

console.log(`Route parity audit passed: ${expectedPreservedUrls.length} preserved legacy URLs emitted in dist.`)
