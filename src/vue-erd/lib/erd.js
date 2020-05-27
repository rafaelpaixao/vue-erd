import { Diagram } from './core'
import { createCanvas, ShapeBuilder } from './joint'

export class JointDiagram extends Diagram {
  setTheme (theme) {
    this.theme = theme
  }

  render () {
    this.renderCanvas()
    this.renderAllNodes()
    this.renderAllLinks()
  }

  renderCanvas () {
    const canvas = createCanvas(this.id, this.width, this.height, this.theme.paper)
    this.graph = canvas.graph
    this.paper = canvas.paper
  }

  renderAllNodes () {
    Object.values(this.nodes).forEach(node => {
      ShapeBuilder.theme = this.theme
      node.shape = ShapeBuilder.build(node)
      this.graph.addCell(node.shape)
    })
  }

  renderAllLinks () {
    Object.values(this.links).forEach(link => {
      link.shape = ShapeBuilder.Line(
        {
          from: this.nodes[link.from].shape,
          to: this.nodes[link.to].shape,
          graph: this.graph,
          label: link.getLabel()
        }
      )
    })
  }
}
