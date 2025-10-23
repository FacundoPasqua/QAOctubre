describe('Registro de Usuario', () => {


  it('Happy Path', () => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
    cy.get('[data-cy="input-nombres"]').type('Juan Carlos')
    cy.get('[data-cy="input-apellido"]').type('Perez Gomez')
    cy.get('[data-cy="input-telefono"]').type('1126666931')
    cy.get('[data-cy="input-dni"]').type('11266669') 
    cy.get('[data-cy="select-provincia"]').type('Córdoba{enter}')
    cy.get('[data-cy="select-localidad"]').type('Santa Rosa de Calamuchita{enter}')      
    cy.get('[data-type="day"]').type('14')
    cy.get('[data-type="month"]').type('01')
    cy.get('[data-type="year"]').type('1997')
    cy.get('[data-cy="input-email"]').type('facun123123@gmail.com')
    cy.get('[data-cy="input-confirmar-email"]').type('facun123123@gmail.com')
    cy.get('[data-cy="input-password"]').type('Test1234!')
    cy.get('[data-cy="input-repetir-password"]').type('Test1234!')
    cy.get('[data-cy="btn-registrarse"]').click()
    cy.wait(1000)
    cy.get('[data-cy="input-nombres"]').should('have.value', 'Juan Carlos')
    cy.get('[data-cy="error-message"]')
    })

    // it('Happy Path', () => {
    // cy.visit('https://ticketazo.com.ar/auth/registerUser')

    
    // })

    
  
  
});



