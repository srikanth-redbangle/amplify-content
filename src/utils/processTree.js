const nodeType = {
  ol: 'list',
  li: 'list-item',
  a: 'link',
}
/**
 *
 * @param {root} element from rehype-toc
 * @returns
 */
const processTree = (root) => {
  if (!root) return tree
  const dfs = (node) => {
    if (!node) return
    const currentNode = { type: nodeType[node.tagName], children: [] }
    if (currentNode.type != 'link') {
      for (const children of node.children) {
        currentNode.children.push(processTree(children))
      }
    } else {
      currentNode.text = node.children[0].value
      currentNode.href = node.properties.href
    }
    return currentNode
  }

  return dfs(root)
}
export default processTree
