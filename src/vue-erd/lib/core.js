export const ER_NODE_TYPES = {
  Entity: 'Entity',
  WeakEntity: 'WeakEntity',
  IdentifyingRelationship: 'IdentifyingRelationship',
  ISA: 'ISA',
  Key: 'Key',
  Normal: 'Normal',
  Multivalued: 'Multivalued',
  Derived: 'Derived',
  Relationship: 'Relationship'
}

export const ER_LINK_TYPES = {
  Attribute: 'Attribute',
  One: 'One',
  OneToOne: 'OneToOne',
  ZeroToOne: 'ZeroToOne',
  Many: 'Many'
}

export class ErNode {
  constructor (id, text, type, x = 0, y = 0) {
    this.id = id
    this.text = text
    this.type = type
    this.x = x
    this.y = y
    this.shape = null
  }
}

export class ErLink {
  constructor (from, to, type) {
    this.from = from
    this.to = to
    this.type = type
  }

  getId () {
    return this.from + '->' + this.to
  }

  getLabel () {
    switch (this.type) {
      case ER_LINK_TYPES.One:
        return '1'
      case ER_LINK_TYPES.OneToOne:
        return '1..1'
      case ER_LINK_TYPES.ZeroToOne:
        return '0..1'
      case ER_LINK_TYPES.Many:
        return 'N'
      default:
        return null
    }
  }
}

export class Diagram {
  constructor (id, height, width, nodes = [], links = []) {
    this.id = id
    this.height = height
    this.width = width
    this.nodes = {}
    this.links = {}
    this.theme = null

    nodes.forEach(node => {
      this._pushNode(node)
    })

    links.forEach(link => {
      this._pushLink(link)
    })
  }

  _pushNode (node) {
    this.nodes[node.id] = node
  }

  _pushLink (link) {
    if (!this.nodes[link.from]) throw Error('Cannot create link, node ' + link.from + ' not exists!')
    if (!this.nodes[link.to]) throw Error('Cannot create link, node ' + link.to + ' not exists!')
    this.links[link.getId()] = link
  }

  render () {
    throw Error('Method not implemented!')
  }

  setTheme () {
    throw Error('Method not implemented!')
  }
}
