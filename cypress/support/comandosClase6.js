
Cypress.Commands.add('loginHappyPath',(mail, pass)=>{
    cy.get('[data-cy="input-email"]').clear().type(mail)
    cy.get('[data-cy="input-password"]').clear().type(pass)
    cy.get('[data-cy="btn-login"]').click()
    cy.url().should('eq','https://ticketazo.com.ar/')
})