// Funciones para generar datos aleatorios
function generarEmailRandom() {
  const tiempoActual = Date.now();
  return `test${tiempoActual}@gmail.com`;
}

function generarDNIRandom() {
  // Genera un DNI de 7-8 dígitos
  const dni = Math.floor(Math.random() * 90000000) + 10000000;
  return dni.toString();
}


function generarTelefonoRandom() {
  // Genera un Numero de Telefono de 10 dígitos
  const numeroTelefono = Math.floor(Math.random() * 9000000000) + 1000000000;
  return numeroTelefono.toString();
}
/* {testIsolation: false},  (va despues de la coma y antes del parentesis) */ 
describe('Registro de Usuario', () => {
beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/login')
}) 
  it.skip('Happy Path', () => {
    // Generar datos aleatorios para cada ejecución
    const emailRandom = generarEmailRandom();
    const dniRandom = generarDNIRandom();
    const telefonoRandom = generarTelefonoRandom();
    cy.log(emailRandom)
    cy.log(dniRandom)
    cy.log(telefonoRandom)
    cy.get('[data-cy="input-nombres"]').type('Juan Carlos')
    cy.get('[data-cy="input-apellido"]').type('Perez Gomez')
    cy.get('[data-cy="input-telefono"]').type(telefonoRandom)
    cy.get('[data-cy="input-dni"]').type(dniRandom) 
    cy.get('[data-cy="select-provincia"]').type('Córdoba{enter}')
    cy.get('[data-cy="select-localidad"]').type('Santa Rosa de Calamuchita{enter}')
    cy.get('[data-type="day"]').type('14')
    cy.get('[data-type="month"]').type('01')
    cy.get('[data-type="year"]').type('1997')
    cy.get('[data-cy="input-email"]').type(emailRandom)
    cy.get('[data-cy="input-confirmar-email"]').type(emailRandom)
    cy.get('[data-cy="input-password"]').type('Test1234!')
    cy.get('[data-cy="input-repetir-password"]').type('Test1234!')
    cy.get('[data-cy="btn-registrarse"]').click()


  })

  it('Wrong Path', () => {
    const emailRandom = generarEmailRandom();
    const dniRandom = generarDNIRandom();
    const telefonoRandom = generarTelefonoRandom();
    cy.get('[data-cy="btn-register-user"]').click()
    // cy.contains('Please fill out this field.').should('be.visible')
    cy.get('[data-cy="input-nombres"]').type('Juan Carlos')
    cy.get('[data-cy="input-apellido"]').type('Perez Gomez')
    cy.get('[data-cy="input-telefono"]').type(telefonoRandom)
    cy.get('[data-cy="input-dni"]').type(dniRandom) 
    cy.get('[data-cy="select-provincia"]').type('Córdoba{enter}')
    cy.get('[data-cy="select-localidad"]').type('Santa Rosa de Calamuchita{enter}')
    cy.get('[data-type="day"]').type('14')
    cy.get('[data-type="month"]').type('01')
    cy.get('[data-type="year"]').type('1997')
    cy.get('[data-cy="input-email"]').type('facundopasqua@gmail.com')
    cy.get('[data-cy="input-confirmar-email"]').type('facundopasqua@gmail.com')
    cy.get('[data-cy="input-password"]').type('Test1234!')
    cy.get('[data-cy="input-repetir-password"]').type('Test1234!')
    cy.get('[data-cy="btn-registrarse"]').click()
    cy.get('[data-cy="error-message"]').contains('Ya existe un usuario registrado con ese correo electrónico').should('be.visible')
  })

  
  
});



