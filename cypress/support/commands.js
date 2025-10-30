// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('loginWrongPath',()=>{
    cy.log('Ingresando sin credenciales')
    cy.get('[data-cy="btn-login"]').click()
    cy.get('p').contains('Correo o contraseña incorrectos').should('be.visible')

    cy.log('Mail incorrecto')
    cy.get('[data-cy="input-email"]').type('homejo5153filipx.com')
    cy.get('[data-cy="input-password"]').focus()

    cy.get('div[data-slot="error-message"]')
    .invoke('text')
    .should('match', /Incluye un signo "@"|Please include an '@'/)


    cy.log('Contraseña incorrecta')
    cy.get('[data-cy="input-email"]').clear().type('homejo5153@filipx.com')
    cy.get('[data-cy="input-password"]').clear().type('Admin123s4*')
    cy.get('p').contains('Correo o contraseña incorrectos').should('be.visible')    
})

Cypress.Commands.add('buttons',()=>{
    cy.get('button').contains('Logout').click().wait(50)
    cy.get('button').contains('Login').click()
})