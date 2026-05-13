export const postsMapper = (p) => {
  const tags = p?.tags?.reduce((prev, t, i) => {
    if (i == 2) return [...prev, `+${p.tags.length - 2}`]
    if (i > 2) return prev
    return [...prev, t]
  }, [])
  return {
    key: p?.key,
    name: p?.name,
    company: p?.company,
    image: p?.image,
    alt: p?.alt,
    tags,
    href: p?.href ?? '#!',
  }
}
