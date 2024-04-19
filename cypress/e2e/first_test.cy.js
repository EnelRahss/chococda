describe('exemple', ()=> {
    //Inscription avec nouveau compte
    it('Inscription OK', ()=> {
        cy.visit('https://127.0.0.1:8000/register')
        cy.get('#register_firstname').type("Aline")
        cy.get('#register_lastname').type("héa")
        cy.get('#register_password').type("Azerty123456")   
        cy.get('#register_email').type("fauxmail@mail.com")
        cy.get('.toggle-password-button').click()
        cy.get('[type="submit"]').click()
        cy.get('p.alert').should('contain','Le compte fauxmail@mail.com a été ajouté en BDD')
    })
    // Le doublon
    it('Inscription doublon', ()=> {
        cy.visit('https://127.0.0.1:8000/register')
        cy.get('#register_firstname').type("Aline")
        cy.get('#register_lastname').type("héa")
        cy.get('#register_password').type("Azerty123456")   
        cy.get('#register_email').type("fauxmail@mail.com")
        cy.get('.toggle-password-button').click()
        cy.get('[type="submit"]').click()
        cy.get('p.alert').should('contain','Le compte existe déja')
    })
})