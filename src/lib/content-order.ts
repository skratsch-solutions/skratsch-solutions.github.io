type WeightedEntry = {
  data: {
    title: string
    weight?: number
  }
}

export const sortByWeightAndTitle = <Entry extends WeightedEntry>(firstEntry: Entry, secondEntry: Entry) => {
  const firstWeight = firstEntry.data.weight ?? Number.MAX_SAFE_INTEGER
  const secondWeight = secondEntry.data.weight ?? Number.MAX_SAFE_INTEGER

  if (firstWeight !== secondWeight) {
    return firstWeight - secondWeight
  }

  return firstEntry.data.title.localeCompare(secondEntry.data.title)
}
