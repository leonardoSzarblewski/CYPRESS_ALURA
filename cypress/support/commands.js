Cypress.Commands.add('login', () => {
    cy.get('[data-test="input-loginEmail"]').type('leonardo.laurindo@email.com')
    cy.get('[data-test="input-loginPassword"]').type('Leo123')
    cy.get('[data-test="submit-button"]').click()
})