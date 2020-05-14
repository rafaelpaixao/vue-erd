import joint from './joint'

export class ErdDemo {
  static init (diagram) {
    diagram.init()

    var graph = diagram.graph

    // Create shapes
    var employee = new joint.erd.Entity({

      position: { x: 100, y: 200 },
      attrs: {
        text: {
          fill: '#ffffff',
          text: 'Employee',
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

    var wage = new joint.erd.WeakEntity({

      position: { x: 530, y: 200 },
      attrs: {
        text: {
          fill: '#ffffff',
          text: 'Wage',
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

    var paid = new joint.erd.IdentifyingRelationship({

      position: { x: 350, y: 190 },
      attrs: {
        text: {
          fill: '#ffffff',
          text: 'Gets paid',
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

    var isa = new joint.erd.ISA({

      position: { x: 125, y: 300 },
      attrs: {
        text: {
          text: 'ISA',
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

    var number = new joint.erd.Key({

      position: { x: 10, y: 90 },
      attrs: {
        text: {
          fill: '#ffffff',
          text: 'Number',
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

    var employeeName = new joint.erd.Normal({

      position: { x: 75, y: 30 },
      attrs: {
        text: {
          fill: '#ffffff',
          text: 'Name',
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

    var skills = new joint.erd.Multivalued({

      position: { x: 150, y: 90 },
      attrs: {
        text: {
          fill: '#ffffff',
          text: 'Skills',
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

    var amount = new joint.erd.Derived({

      position: { x: 440, y: 80 },
      attrs: {
        text: {
          fill: '#ffffff',
          text: 'Amount',
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

    var uses = new joint.erd.Relationship({

      position: { x: 300, y: 390 },
      attrs: {
        text: {
          fill: '#ffffff',
          text: 'Uses',
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

    // Create new shapes by cloning

    var salesman = employee.clone().translate(0, 200).attr('text/text', 'Salesman')

    var date = employeeName.clone().position(585, 80).attr('text/text', 'Date')

    var car = employee.clone().position(430, 400).attr('text/text', 'Company car')

    var plate = number.clone().position(405, 500).attr('text/text', 'Plate')

    // Helpers

    var createLink = function (elm1, elm2) {
      var myLink = new joint.erd.Line({
        markup: [
          '<path class="connection" stroke="black" d="M 0 0 0 0"/>',
          '<path class="connection-wrap" d="M 0 0 0 0"/>',
          '<g class="labels"/>',
          '<g class="marker-vertices"/>',
          '<g class="marker-arrowheads"/>'
        ].join(''),
        source: { id: elm1.id },
        target: { id: elm2.id }
      })

      return myLink.addTo(graph)
    }

    var createLabel = function (txt) {
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

    // Add shapes to the graph

    graph.addCells([employee, salesman, wage, paid, isa, number, employeeName, skills, amount, date, plate, car, uses])

    createLink(employee, paid).set(createLabel('1'))
    createLink(employee, number)
    createLink(employee, employeeName)
    createLink(employee, skills)
    createLink(employee, isa)
    createLink(isa, salesman)
    createLink(salesman, uses).set(createLabel('0..1'))
    createLink(car, uses).set(createLabel('1..1'))
    createLink(car, plate)
    createLink(wage, paid).set(createLabel('N'))
    createLink(wage, amount)
    createLink(wage, date)
  }
}
