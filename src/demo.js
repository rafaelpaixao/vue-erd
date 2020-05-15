import { ER_LINK_TYPES, ER_NODE_TYPES, ErLink, ErNode } from './vue-erd/lib/core'
const example = {
  nodes: {
    employee: {
      text: 'Employee',
      type: ER_NODE_TYPES.Entity,
      x: 100,
      y: 200
    },
    wage: {
      text: 'Wage',
      type: ER_NODE_TYPES.WeakEntity,
      x: 530,
      y: 200
    },
    paid: {
      text: 'Gets paid',
      type: ER_NODE_TYPES.IdentifyingRelationship,
      x: 350,
      y: 190
    },
    isa: {
      text: 'ISA',
      type: ER_NODE_TYPES.ISA,
      x: 125,
      y: 300
    },
    number: {
      text: 'Number',
      type: ER_NODE_TYPES.Key,
      x: 10,
      y: 90
    },
    employeeName: {
      text: 'Name',
      type: ER_NODE_TYPES.Normal,
      x: 75,
      y: 30
    },
    skills: {
      text: 'Skills',
      type: ER_NODE_TYPES.Multivalued,
      x: 150,
      y: 90
    },
    amount: {
      text: 'Amount',
      type: ER_NODE_TYPES.Derived,
      x: 440,
      y: 80
    },
    uses: {
      text: 'Uses',
      type: ER_NODE_TYPES.Relationship,
      x: 300,
      y: 390
    },
    salesman: {
      text: 'Salesman',
      type: ER_NODE_TYPES.Entity,
      x: 100,
      y: 400
    },
    date: {
      text: 'Date',
      type: ER_NODE_TYPES.Normal,
      x: 585,
      y: 80
    },
    car: {
      text: 'Company car',
      type: ER_NODE_TYPES.Entity,
      x: 430,
      y: 400
    },
    plate: {
      text: 'Plate',
      type: ER_NODE_TYPES.Key,
      x: 405,
      y: 500
    }
  },
  links: [
    ['employee', 'paid', ER_LINK_TYPES.One],
    ['employee', 'number', ER_LINK_TYPES.Attribute],
    ['employee', 'employeeName', ER_LINK_TYPES.Attribute],
    ['employee', 'skills', ER_LINK_TYPES.Attribute],
    ['employee', 'isa', ER_LINK_TYPES.Attribute],
    ['isa', 'salesman', ER_LINK_TYPES.Attribute],
    ['salesman', 'uses', ER_LINK_TYPES.ZeroToOne],
    ['car', 'uses', ER_LINK_TYPES.OneToOne],
    ['car', 'plate', ER_LINK_TYPES.Attribute],
    ['wage', 'paid', ER_LINK_TYPES.Attribute],
    ['wage', 'amount', ER_LINK_TYPES.Many],
    ['wage', 'date', ER_LINK_TYPES.Attribute]
  ]
}

const demo = {
  nodes: [],
  links: []
}

Object.entries(example.nodes).forEach(([key, node]) => {
  node.id = key
  demo.nodes.push(new ErNode(key, node.text, node.type, node.x, node.y))
})
example.links.forEach(link => {
  demo.links.push(new ErLink(link[0], link[1], link[2]))
})

export default demo
