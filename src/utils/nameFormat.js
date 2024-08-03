const nameFormatter = (name) => {
  const result = name
    .split(' ')
    .map((name) => name[0].toUpperCase() + name.slice(1))
    .join(' ')
  return result
}

export { nameFormatter }