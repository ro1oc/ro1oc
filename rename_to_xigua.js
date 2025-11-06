module.exports = async (nodes, utils) => {
  nodes.forEach((node, index) => {
    node.name = `西瓜专线-${index + 1}`
  })
  return nodes
}
