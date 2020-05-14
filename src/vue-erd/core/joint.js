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

export default joint
