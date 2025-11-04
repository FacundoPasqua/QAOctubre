describe ('Clase 6', () => { 

    beforeEach(() => { 

describe('Clase 6',()=>{

    beforeEach(()=>{
        cy.viewport('macbook-15')
        cy.visit('https://ticketazo.com.ar/auth/login')
    })

    it ('Login - wrong path', () => { 
        cy.loginWrongPath()
})

    it ('Login - correct path', () => { 
        cy.loginCorrectPath('homejo5153@filipx.com', 'Admin1234*')
    })

    it.only ('Login multiple', () => { 

        const usuarios = [
            {email: 'homejo5153@filipx.com', password: 'Admin1234*'},
            {email: 'demo@local.com', password: 'Panifa41'}
        ]

        usuarios.forEach((usuario) => {
            cy.loginCorrectPath(usuario.email, usuario.password)
            cy.buttons()
        })
})

    it('Login - Wrong path',()=>{
        cy.loginWrongPath()

    })

    it('Login - Happy path',()=>{
        cy.loginHappyPath('homejo5153@filipx.com','Admin1234*')
    })

    it.only('Login - Multiple users',()=>{
        const usuarios = [ // Arreglo
            { email: 'homejo5153@filipx.com', pass: 'Admin1234*'}, // Objeto
            { email: 'demo@local.com', pass: 'Panifa41' }
        ]

        usuarios.forEach((usuario)=>{
            cy.loginHappyPath(usuario.email, usuario.pass)
            cy.buttons()
        })



    })
})