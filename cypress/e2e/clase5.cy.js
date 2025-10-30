describe('Clase 5',()=>{

    beforeEach(()=>{
        // cy.viewport('iphone-6')
        cy.viewport('macbook-15')
        cy.visit('https://ticketazo.com.ar/')
        cy.get('[data-cy="btn-ver-evento-1"]').click()
    })

    it('Primer it',()=>{

        cy.log('Visibilid y contenido')

        cy.get('h1').should('be.visible')
        .and('contain','El Eternauta')

        cy.get('.error-sidebar').should('not.exist')

        cy.get('span').contains('Ticketazo').should('have.class', 'hidden')

        cy.get('h3').contains(/doGs/i)

    })

    it('Segundo it',()=>{

        cy.get('div.w-full > img').eq(0).should('have.attr', 'alt', 'El Eternauta')
        .and('have.attr', 'class', 'w-full object-cover')

    })

    it('Tercer it',()=>{
        cy.contains('Adquirir entrada').should('be.enabled')
        cy.get('h3').should('have.length','3')
        cy.contains('button', 'Ver evento').should('have.length.greaterThan',0)
    })

    it('Cuarto it',()=>{


        // cy.get('body').click({force:true})

        cy.get('path[d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"]').as('cerrarSidebar')

        cy.get('@cerrarSidebar').click()

        cy.get('button').contains('Login').click({force:true})

        cy.get('[data-cy="input-email"]').should('have.attr','aria-label','Email')
        .type('homejo5153@filipx.com')

        cy.get('[data-cy="input-password"]').type('admin1234')

        cy.get('[data-cy="btn-login"]').click()

        cy.get('p').contains('Correo o contraseña incorrectos')

        cy.get('[data-cy="input-password"]').clear().type('Admin1234*')

        cy.get('[data-cy="btn-login"]').click()


        cy.get('footer').scrollIntoView()
        cy.get('[aria-label="pagination item 5"]').click()

        cy.contains('Ver evento').eq(0).click()
        cy.contains('Adquirir entrada').click()
        cy.go('back')

    })
})