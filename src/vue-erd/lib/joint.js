import 'jointjs/dist/joint.min.css'
import { V, g, dia, shapes } from 'jointjs'
import { JOINTJS_THEME } from './themes/jointjs'

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
  theme = JOINTJS_THEME

  static build ({ text, type, x, y }) {
    const params = { text, type, x, y }
    return this[type](params)
  }

  static Entity ({ text, x, y }) {
    return new joint.erd.Entity({
      position: { x, y },
      attrs: {
        text: {
          fill: this.theme.node.text,
          letterSpacing: 0,
          style: this.theme.node.style,
          text
        },
        '.outer': {
          fill: this.theme.Entity,
          stroke: 'none',
          filter: this.theme.node.filter
        },
        '.inner': {
          fill: this.theme.Entity,
          stroke: 'none',
          filter: this.theme.node.filter
        }
      }
    })
  }

  static WeakEntity ({ text, x, y }) {
    return new joint.erd.WeakEntity({
      position: { x, y },
      attrs: {
        text: {
          fill: this.theme.node.text,
          letterSpacing: 0,
          style: this.theme.node.style,
          text
        },
        '.inner': {
          fill: this.theme.WeakEntity,
          stroke: 'none',
          points: '155,5 155,55 5,55 5,5'
        },
        '.outer': {
          fill: 'none',
          stroke: this.theme.WeakEntity,
          points: '160,0 160,60 0,60 0,0',
          filter: this.theme.node.filter
        }
      }
    })
  }

  static IdentifyingRelationship ({ text, x, y }) {
    return new joint.erd.IdentifyingRelationship({
      position: { x, y },
      attrs: {
        text: {
          fill: this.theme.node.text,
          letterSpacing: 0,
          style: this.theme.node.style,
          text
        },
        '.inner': {
          fill: this.theme.IdentifyingRelationship,
          stroke: 'none'
        },
        '.outer': {
          fill: 'none',
          stroke: this.theme.IdentifyingRelationship,
          filter: this.theme.node.filter
        }
      }
    })
  }

  static ISA ({ text, x, y }) {
    return new joint.erd.ISA({
      position: { x, y },
      attrs: {
        text: {
          fill: this.theme.node.text,
          letterSpacing: 0,
          style: this.theme.node.style,
          text
        },
        polygon: {
          fill: this.theme.ISA,
          stroke: 'none',
          filter: this.theme.node.filter
        }
      }
    })
  }

  static Key ({ text, x, y }) {
    return new joint.erd.Key({
      position: { x, y },
      attrs: {
        text: {
          fill: this.theme.node.text,
          letterSpacing: 0,
          style: this.theme.node.style,
          text
        },
        '.outer': {
          fill: this.theme.Key,
          stroke: 'none',
          filter: this.theme.node.filter
        },
        '.inner': {
          fill: this.theme.Key,
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
          fill: this.theme.node.text,
          letterSpacing: 0,
          style: this.theme.node.style,
          text
        },
        '.outer': {
          fill: this.theme.Normal,
          stroke: this.theme.Normal,
          filter: this.theme.node.filter
        }
      }
    })
  }

  static Multivalued ({ text, x, y }) {
    return new joint.erd.Multivalued({
      position: { x, y },
      attrs: {
        text: {
          fill: this.theme.node.text,
          letterSpacing: 0,
          style: this.theme.node.style,
          text
        },
        '.inner': {
          fill: this.theme.Multivalued,
          stroke: 'none',
          rx: 43,
          ry: 21

        },
        '.outer': {
          fill: 'transparent',
          stroke: this.theme.Multivalued,
          filter: this.theme.node.filter
        }
      }
    })
  }

  static Derived ({ text, x, y }) {
    return new joint.erd.Derived({
      position: { x, y },
      attrs: {
        text: {
          fill: this.theme.node.text,
          letterSpacing: 0,
          style: this.theme.node.style,
          text
        },
        '.inner': {
          fill: this.theme.Derived,
          stroke: 'none',
          display: 'block'
        },
        '.outer': {
          fill: 'transparent',
          stroke: this.theme.Derived,
          'stroke-dasharray': '3,1',
          filter: this.theme.node.filter
        }
      }
    })
  }

  static Relationship ({ text, x, y }) {
    return new joint.erd.Relationship({

      position: { x, y },
      attrs: {
        text: {
          fill: this.theme.node.text,
          letterSpacing: 0,
          style: this.theme.node.style,
          text
        },
        '.outer': {
          fill: this.theme.Relationship,
          stroke: 'none',
          filter: this.theme.node.filter
        }
      }
    })
  }

  static Line ({ from, to, graph, label = null }) {
    const shape = new joint.erd.Line({
      markup: [
        '<path class="connection" stroke="' + this.theme.link.line + '" d="M 0 0 0 0"/>',
        '<path class="connection-wrap" d="M 0 0 0 0"/>',
        '<g class="labels"/>',
        '<g class="marker-vertices"/>',
        '<g class="marker-arrowheads"/>'
      ].join(''),
      source: { id: from.id },
      target: { id: to.id }
    })
    if (label) {
      shape.set({
        labels: [{
          position: -20,
          attrs: {
            text: { dy: -8, text: label, fill: this.theme.link.text },
            rect: { fill: this.theme.link.background }
          }
        }]
      })
    }
    return shape.addTo(graph)
  }
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

const createCanvas = function (id, width, height, background = 'white') {
  const graph = new joint.dia.Graph()
  const paper = new joint.dia.Paper({
    el: document.getElementById(id),
    width: width,
    height: height,
    background: {
      color: background
    },
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

export { createCanvas, ShapeBuilder }
