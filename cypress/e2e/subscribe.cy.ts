describe('Newsletter Subscribe Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Allows users to subscribe to the email list', () => {   
    cy.getByData('email-input').type('edek@interia.pl')
    cy.getByData('submit-button').click()
    cy.getByData('success-message').should('exist').contains('edek@interia.pl')
   })

   it('Does NOT allow an invalid email address', () => {
    cy.getByData('email-input').type('edek')
    cy.getByData('submit-button').click()
    cy.getByData('success-message').should('not.exist')
   })

   it('Does not allow to subscribe with an already subscriben email address', () => {
    cy.getByData('email-input').type('john@example.com')
    cy.getByData('submit-button').click()
    cy.getByData('server-error-message')
    .should('exist')
    .contains('Error: john@example.com already exists. Please use a different email address.')
   })
})
