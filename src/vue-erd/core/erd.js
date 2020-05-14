import { joint, ShapeBuilder, createLabel, createLink, setCustomHighlight } from './joint'

class Node {
  constructor (id, text, type, x = 0, y = 0) {
    this.id = id
    this.text = text
    this.type = type
    this.x = x
    this.y = y
    this.shape = ShapeBuilder.build({ text, type, x, y })
  }
}

class Link {
  constructor (node1, node2, label = null) {
    this.node1 = node1
    this.node2 = node2
    this.label = label
  }
}

class Diagram {
  constructor (id, height, width) {
    this.id = id
    this.height = height
    this.width = width
    this.nodes = {}
    this.links = []
  }

  init () {
    this.graph = new joint.dia.Graph()
    this.paper = new joint.dia.Paper({
      el: document.getElementById(this.id),
      width: this.width,
      height: this.height,
      model: this.graph,
      linkPinning: false,
      defaultConnectionPoint: function (line, view) {
        const element = view.model
        return element.getConnectionPoint(line.start) || element.getBBox().center()
      }
    })
    setCustomHighlight(this.paper)
  }

  addNode (node) {
    if (this.nodes[node.id]) throw Error('Node with id ' + node.id + ' already defined!')
    this.nodes[node.id] = node
    this.graph.addCells([node.shape])
  }

  addLink (link) {
    if (!this.nodes[link.node1] || !this.nodes[link.node2]) throw Error('Cannot create link, node not found!')
    const newLink = createLink(
      this.nodes[link.node1].shape,
      this.nodes[link.node2].shape,
      this.graph
    )
    if (link.label) newLink.set(createLabel(link.label))
  }

  import (exportedDiagram) {
    const nodes = exportedDiagram.nodes
    const links = exportedDiagram.links

    Object.entries(nodes).forEach(([id, { text, type, x, y }]) => {
      this.addNode(
        new Node(id, text, type, x, y)
      )
    })

    links.forEach(element => {
      const node1 = element[0]
      const node2 = element[1]
      const label = element.length > 2 ? element[2] : null
      this.addLink(new Link(node1, node2, label))
    })
  }
}

export { Diagram, Link, Node }
