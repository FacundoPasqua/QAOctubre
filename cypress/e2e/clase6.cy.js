
describe('Clase 6',()=>{

    beforeEach(()=>{
        cy.viewport('macbook-15')
        cy.visit('https://ticketazo.com.ar/auth/login')
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