import 'jointjs/dist/joint.min.css'
import { V, g, dia, shapes } from 'jointjs'

const joint = { V, g, dia, erd: shapes.erd }

// Define a specific highligthing path for every shape.

joint.erd.Attribute.prototype.getHighlighterPath = function (w, h) {
  return ['M', 0, h / 2, 'A', w / 2, h / 2, '0 1,0', w, h / 2, 'A', w / 2, h / 2, '0 1,0', 0, h / 2].join(' ')
}

joint.erd.Entity.prototype.getHighlighterPath = function (w, h) {
  return ['M', w, 0, w, h, 0, h, 0, 0, 'z'].join(' ')
}

joint.erd.Relationship.prototype.getHighlighterPath = function (w, h) {
  return ['M', w / 2, 0, w, w / 2, w / 2, w, 0, w / 2, 'z'].join(' ')
}

joint.erd.ISA.prototype.getHighlighterPath = function (w, h) {
  return ['M', -8, 1, w + 8, 1, w / 2, h + 2, 'z'].join(' ')
}

// Define a specific connection points for every shape

joint.erd.Attribute.prototype.getConnectionPoint = function (referencePoint) {
  // Intersection with an ellipse
  return joint.g.Ellipse.fromRect(this.getBBox()).intersectionWithLineFromCenterToPoint(referencePoint)
}

joint.erd.Entity.prototype.getConnectionPoint = function (referencePoint) {
  // Intersection with a rectangle
  return this.getBBox().intersectionWithLineFromCenterToPoint(referencePoint)
}

joint.erd.Relationship.prototype.getConnectionPoint = function (referencePoint) {
  // Intersection with a rhomb
  var bbox = this.getBBox()
  var line = new joint.g.Line(bbox.center(), referencePoint)
  return (
    line.intersection(new joint.g.Line(bbox.topMiddle(), bbox.leftMiddle())) ||
            line.intersection(new joint.g.Line(bbox.leftMiddle(), bbox.bottomMiddle())) ||
            line.intersection(new joint.g.Line(bbox.bottomMiddle(), bbox.rightMiddle())) ||
            line.intersection(new joint.g.Line(bbox.rightMiddle(), bbox.topMiddle()))
  )
}

joint.erd.ISA.prototype.getConnectionPoint = function (referencePoint) {
  // Intersection with a triangle
  var bbox = this.getBBox()
  var line = new joint.g.Line(bbox.center(), referencePoint)
  return (
    line.intersection(new joint.g.Line(bbox.origin(), bbox.topRight())) ||
            line.intersection(new joint.g.Line(bbox.origin(), bbox.bottomMiddle())) ||
            line.intersection(new joint.g.Line(bbox.topRight(), bbox.bottomMiddle()))
  )
}

class ShapeBuilder {
  static build ({ text, type, x, y }) {
    const params = { text, type, x, y }
    return this[type](params)
  }

  static Entity ({ text, x, y }) {
    return new joint.erd.Entity({
      position: { x, y },
      attrs: {
        text: {
          fill: '#ffffff',
          text,
          letterSpacing: 0,
          style: { textShadow: '1px 0 1px #333333' }
        },
        '.outer': {
          fill: '#31d0c6',
          stroke: 'none',
          filter: { name: 'dropShadow', args: { dx: 0.5, dy: 2, blur: 2, color: '#333333' } }
        },
        '.inner': {
          fill: '#31d0c6',
          stroke: 'none',
          filter: { name: 'dropShadow', args: { dx: 0.5, dy: 2, blur: 2, color: '#333333' } }
        }
      }
    })
  }

  static WeakEntity ({ text, x, y }) {
    return new joint.erd.WeakEntity({
      position: { x, y },
      attrs: {
        text: {
          fill: '#ffffff',
          text,
          letterSpacing: 0,
          style: { textShadow: '1px 0 1px #333333' }
        },
        '.inner': {
          fill: '#31d0c6',
          stroke: 'none',
          points: '155,5 155,55 5,55 5,5'
        },
        '.outer': {
          fill: 'none',
          stroke: '#31d0c6',
          points: '160,0 160,60 0,60 0,0',
          filter: { name: 'dropShadow', args: { dx: 0.5, dy: 2, blur: 2, color: '#333333' } }
        }
      }
    })
  }

  static IdentifyingRelationship ({ text, x, y }) {
    return new joint.erd.IdentifyingRelationship({
      position: { x, y },
      attrs: {
        text: {
          fill: '#ffffff',
          text,
          letterSpacing: 0,
          style: { textShadow: '1px 0 1px #333333' }
        },
        '.inner': {
          fill: '#7c68fd',
          stroke: 'none'
        },
        '.outer': {
          fill: 'none',
          stroke: '#7c68fd',
          filter: { name: 'dropShadow', args: { dx: 0, dy: 2, blur: 1, color: '#333333' } }
        }
      }
    })
  }

  static ISA ({ text, x, y }) {
    return new joint.erd.ISA({
      position: { x, y },
      attrs: {
        text: {
          text,
          fill: '#ffffff',
          letterSpacing: 0,
          style: { 'text-shadow': '1px 0 1px #333333' }
        },
        polygon: {
          fill: '#fdb664',
          stroke: 'none',
          filter: { name: 'dropShadow', args: { dx: 0, dy: 2, blur: 1, color: '#333333' } }
        }
      }
    })
  }

  static Key ({ text, x, y }) {
    return new joint.erd.Key({
      position: { x, y },
      attrs: {
        text: {
          fill: '#ffffff',
          text,
          letterSpacing: 0,
          style: { textShadow: '1px 0 1px #333333' }
        },
        '.outer': {
          fill: '#feb662',
          stroke: 'none',
          filter: { name: 'dropShadow', args: { dx: 0, dy: 2, blur: 2, color: '#222138' } }
        },
        '.inner': {
          fill: '#feb662',
          stroke: 'none'
        }
      }
    })
  }

  static Normal ({ text, x, y }) {
    return new joint.erd.Normal({
      position: { x, y },
      attrs: {
        text: {
          fill: '#ffffff',
          text,
          letterSpacing: 0,
          style: { textShadow: '1px 0 1px #333333' }
        },
        '.outer': {
          fill: '#fe8550',
          stroke: '#fe854f',
          filter: { name: 'dropShadow', args: { dx: 0, dy: 2, blur: 2, color: '#222138' } }
        }
      }
    })
  }

  static Multivalued ({ text, x, y }) {
    return new joint.erd.Multivalued({
      position: { x, y },
      attrs: {
        text: {
          fill: '#ffffff',
          text,
          letterSpacing: 0,
          style: { 'text-shadow': '1px 0px 1px #333333' }
        },
        '.inner': {
          fill: '#fe8550',
          stroke: 'none',
          rx: 43,
          ry: 21

        },
        '.outer': {
          fill: '#464a65',
          stroke: '#fe8550',
          filter: { name: 'dropShadow', args: { dx: 0, dy: 2, blur: 2, color: '#222138' } }
        }
      }
    })
  }

  static Derived ({ text, x, y }) {
    return new joint.erd.Derived({
      position: { x, y },
      attrs: {
        text: {
          fill: '#ffffff',
          text,
          letterSpacing: 0,
          style: { textShadow: '1px 0 1px #333333' }
        },
        '.inner': {
          fill: '#fca079',
          stroke: 'none',
          display: 'block'
        },
        '.outer': {
          fill: '#464a65',
          stroke: '#fe854f',
          'stroke-dasharray': '3,1',
          filter: { name: 'dropShadow', args: { dx: 0, dy: 2, blur: 2, color: '#222138' } }
        }
      }
    })
  }

  static Relationship ({ text, x, y }) {
    return new joint.erd.Relationship({

      position: { x, y },
      attrs: {
        text: {
          fill: '#ffffff',
          text,
          letterSpacing: 0,
          style: { textShadow: '1px 0 1px #333333' }
        },
        '.outer': {
          fill: '#797d9a',
          stroke: 'none',
          filter: { name: 'dropShadow', args: { dx: 0, dy: 2, blur: 1, color: '#333333' } }
        }
      }
    })
  }
}

const createLabel = function (txt) {
  return {
    labels: [{
      position: -20,
      attrs: {
        text: { dy: -8, text: txt, fill: '#ffffff' },
        rect: { fill: 'none' }
      }
    }]
  }
}

const createLink = function (from, to, graph, label = null) {
  const shape = new joint.erd.Line({
    markup: [
      '<path class="connection" stroke="black" d="M 0 0 0 0"/>',
      '<path class="connection-wrap" d="M 0 0 0 0"/>',
      '<g class="labels"/>',
      '<g class="marker-vertices"/>',
      '<g class="marker-arrowheads"/>'
    ].join(''),
    source: { id: from.id },
    target: { id: to.id }
  })
  if (label) shape.set(createLabel(label))
  return shape.addTo(graph)
}

const setCustomHighlight = function (paper) {
  // Custom highlighter - display an outline around each element that fits its shape.
  const highlighter = joint.V('path', {
    stroke: '#e9fc03',
    'stroke-width': '2px',
    fill: 'transparent',
    'pointer-events': 'none'
  })
  // Unbind orignal highligting handlers.
  paper.off('cell:highlight cell:unhighlight')
  // Bind custom ones.
  paper.on('cell:highlight', function (cellView) {
    var padding = 5
    var bbox = cellView.getBBox({ useModelGeometry: true }).inflate(padding)
    highlighter.translate(bbox.x, bbox.y, { absolute: true })
    highlighter.attr('d', cellView.model.getHighlighterPath(bbox.width, bbox.height))
    joint.V(paper.viewport).append(highlighter)
  })

  paper.on('cell:unhighlight', function () {
    highlighter.remove()
  })
}

const createCanvas = function (id, width, height) {
  const graph = new joint.dia.Graph()
  const paper = new joint.dia.Paper({
    el: document.getElementById(id),
    width: width,
    height: height,
    model: graph,
    linkPinning: false,
    defaultConnectionPoint: function (line, view) {
      const element = view.model
      return element.getConnectionPoint(line.start) || element.getBBox().center()
    }
  })
  setCustomHighlight(paper)
  return { graph, paper }
}

export { createCanvas, createLink, createLabel, ShapeBuilder }
