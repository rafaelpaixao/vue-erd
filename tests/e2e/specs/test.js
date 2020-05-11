// https://docs.cypress.io/api/introduction/api.html

describe('Vue-ERD Test', () => {
  it('Verify that the diagram was rendered', () => {
    cy.visit('/')
    cy.get('#paper')
      .should('be.visible')
      .should('have.class', 'joint-paper')
  })

  it('Drag an entity', () => {
    const FINAL_X = 100
    const FINAL_Y = 500
    cy.get('#paper')
      .find('[data-type="erd.Entity"]')
      .should('be.visible')
      .first()
      .trigger('mousedown', 'topLeft', { which: 1 })
      .trigger('mousemove', { which: 1, clientX: FINAL_X, clientY: FINAL_Y })
      .trigger('mouseup')
      .then($target => {
        const { x, y } = $target[0].getBoundingClientRect()
        expect(x).to.equal(FINAL_X)
        expect(y).to.equal(FINAL_Y)
      })
  })
})
