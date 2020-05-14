export default {
  nodes: {
    employee: {
      text: 'Employee',
      type: 'Entity',
      x: 100,
      y: 200
    },
    wage: {
      text: 'Wage',
      type: 'WeakEntity',
      x: 530,
      y: 200
    },
    paid: {
      text: 'Gets paid',
      type: 'IdentifyingRelationship',
      x: 350,
      y: 190
    },
    isa: {
      text: 'ISA',
      type: 'ISA',
      x: 125,
      y: 300
    },
    number: {
      text: 'Number',
      type: 'Key',
      x: 10,
      y: 90
    },
    employeeName: {
      text: 'Name',
      type: 'Normal',
      x: 75,
      y: 30
    },
    skills: {
      text: 'Skills',
      type: 'Multivalued',
      x: 150,
      y: 90
    },
    amount: {
      text: 'Amount',
      type: 'Derived',
      x: 440,
      y: 80
    },
    uses: {
      text: 'Uses',
      type: 'Relationship',
      x: 300,
      y: 390
    },
    salesman: {
      text: 'Salesman',
      type: 'Entity',
      x: 100,
      y: 400
    },
    date: {
      text: 'Date',
      type: 'Normal',
      x: 585,
      y: 80
    },
    car: {
      text: 'Company car',
      type: 'Entity',
      x: 430,
      y: 400
    },
    plate: {
      text: 'Plate',
      type: 'Key',
      x: 405,
      y: 500
    }
  },
  links: [
    ['employee', 'paid', '1'],
    ['employee', 'number'],
    ['employee', 'employeeName'],
    ['employee', 'skills'],
    ['employee', 'isa'],
    ['isa', 'salesman'],
    ['salesman', 'uses', '0..1'],
    ['car', 'uses', '1..1'],
    ['car', 'plate'],
    ['wage', 'paid'],
    ['wage', 'amount', 'N'],
    ['wage', 'date']
  ]
}
