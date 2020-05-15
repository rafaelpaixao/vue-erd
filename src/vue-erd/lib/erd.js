import { Diagram } from './core'
import { createCanvas, ShapeBuilder, createLink } from './joint'

export class JointDiagram extends Diagram {
  render () {
    this.renderCanvas()
    this.renderAllNodes()
    this.renderAllLinks()
  }

  renderCanvas () {
    const canvas = createCanvas(this.id, this.width, this.height)
    this.graph = canvas.graph
    this.paper = canvas.paper
  }

  renderAllNodes () {
    Object.values(this.nodes).forEach(node => {
      node.shape = ShapeBuilder.build(node)
      this.graph.addCell(node.shape)
    })
  }

  renderAllLinks () {
    Object.values(this.links).forEach(link => {
      link.shape = createLink(
        this.nodes[link.from].shape,
        this.nodes[link.to].shape,
        this.graph,
        link.getLabel()
      )
    })
  }
}
