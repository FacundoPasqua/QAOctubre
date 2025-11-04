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
describe('Clase 7',()=>{

    beforeEach(()=>{
        cy.visit('https://ticketazo.com.ar/auth/registerUser')
    })
    it('Registro de usuario con Fixture',()=>{

        cy.fixture('registroOk').then((data)=>{
            const dniRandom = generarDNIRandom();
            const telefonoRandom = generarTelefonoRandom();
            cy.get('[data-cy="input-nombres"]').type(data.nombres)
            cy.get('[data-cy="input-apellido"]').type(data.apellido)
            cy.get('[data-cy="input-telefono"]').type(telefonoRandom)
            cy.get('[data-cy="input-dni"]').type(dniRandom)
            cy.get('[data-cy="select-provincia"]').type(data.provincia)
            cy.get('[data-cy="select-localidad"]').type(data.localidad)
            cy.get('[data-type="day"]').type(data.fechaNacimiento.day)
            cy.get('[data-type="month"]').type(data.fechaNacimiento.month)
            cy.get('[data-type="year"]').type(data.fechaNacimiento.year)
            cy.get('[data-cy="input-email"]').type(data.email)
            cy.get('[data-cy="input-confirmar-email"]').type(data.email)
            cy.get('[data-cy="input-password"]').type(data.password)
            cy.get('[data-cy="input-repetir-password"]').type(data.repetirPassword)
        })
    })
} )