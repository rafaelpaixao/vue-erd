import joint from './joint'

// Custom highlighter - display an outline around each element that fits its shape.
const highlighter = joint.V('path', {
  stroke: '#e9fc03',
  'stroke-width': '2px',
  fill: 'transparent',
  'pointer-events': 'none'
})

export class Diagram {
  constructor (id, height, width) {
    this.id = id
    this.height = height
    this.width = width
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

    // Unbind orignal highligting handlers.
    this.paper.off('cell:highlight cell:unhighlight')

    // Bind custom ones.
    this.paper.on('cell:highlight', function (cellView) {
      var padding = 5
      var bbox = cellView.getBBox({ useModelGeometry: true }).inflate(padding)
      highlighter.translate(bbox.x, bbox.y, { absolute: true })
      highlighter.attr('d', cellView.model.getHighlighterPath(bbox.width, bbox.height))
      joint.V(this.paper.viewport).append(highlighter)
    })

    this.paper.on('cell:unhighlight', function () {
      highlighter.remove()
    })
  }
}
