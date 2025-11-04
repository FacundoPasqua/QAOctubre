// Funciones para generar datos aleatorios (útil cuando necesitamos datos únicos)
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
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
  }) 

  it.skip('Happy Path', () => {

    cy.fixture('registroOk').then((datos) => {
    
      const emailRandom = generarEmailRandom();
      const dniRandom = generarDNIRandom();
      const telefonoRandom = generarTelefonoRandom();
      
      cy.log('Email generado:', emailRandom)
      cy.log('DNI generado:', dniRandom)
      cy.log('Teléfono generado:', telefonoRandom)
      
      cy.get('[data-cy="input-nombres"]').type(datos.nombres)
      cy.get('[data-cy="input-apellido"]').type(datos.apellido)
      cy.get('[data-cy="input-telefono"]').type(telefonoRandom)
      cy.get('[data-cy="input-dni"]').type(dniRandom)
      cy.get('[data-cy="select-provincia"]').type(`${datos.provincia}{enter}`)
      cy.get('[data-cy="select-localidad"]').type(`${datos.localidad}{enter}`)
      cy.get('[data-type="day"]').type(datos.fechaNacimiento.day)
      cy.get('[data-type="month"]').type(datos.fechaNacimiento.month)
      cy.get('[data-type="year"]').type(datos.fechaNacimiento.year)
      cy.get('[data-cy="input-email"]').type(emailRandom)
      cy.get('[data-cy="input-confirmar-email"]').type(emailRandom)
      cy.get('[data-cy="input-password"]').type(datos.password)
      cy.get('[data-cy="input-repetir-password"]').type(datos.repetirPassword)
      cy.get('[data-cy="btn-registrarse"]').click()
    })
  })

  it('Wrong Path', () => {

    cy.fixture('registroMal').then((datos) => {
      
      const dniRandom = generarDNIRandom();
      const telefonoRandom = generarTelefonoRandom();
      
      cy.get('[data-cy="btn-registrarse"]').click()
      cy.contains('Please fill out this field.').should('be.visible')
      
      cy.get('[data-cy="input-nombres"]').type('Juan Carlos')
      cy.get('[data-cy="input-apellido"]').type('Perez Gomez')
      cy.get('[data-cy="input-telefono"]').type(telefonoRandom)
      cy.get('[data-cy="input-dni"]').type(dniRandom)
      cy.get('[data-cy="select-provincia"]').type(`${datos.provincia}{enter}`)
      cy.get('[data-cy="select-localidad"]').type(`${datos.localidad}{enter}`)
      cy.get('[data-type="day"]').type(datos.fechaNacimiento.day)
      cy.get('[data-type="month"]').type(datos.fechaNacimiento.month)
      cy.get('[data-type="year"]').type(datos.fechaNacimiento.year)
      
      cy.get('[data-cy="input-email"]').type(datos.emailExistente)
      cy.get('[data-cy="input-confirmar-email"]').type(datos.emailExistente)
      cy.get('[data-cy="input-password"]').type(datos.password)
      cy.get('[data-cy="input-repetir-password"]').type(datos.repetirPassword)
      cy.get('[data-cy="btn-registrarse"]').click()
      
      cy.get('[data-cy="error-message"]').contains(datos.mensajeError).should('be.visible')
    })
  })
});



