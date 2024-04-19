describe('exemple', ()=> {
    //Connexion mauvais identifiants
    it('Connexion mdp incorrect', ()=> {
        cy.visit('https://127.0.0.1:8000/login')
        cy.get('#inputEmail').type("fauxmail@mail.com")
        cy.get('#inputPassword').type("Azerty123456gg")   
        cy.get('.btn').click()
        cy.get('p.alert').should('contain','Email ou mot de passe incorrect')
    })
    it('Connexion mail incorrect', ()=> {
        cy.visit('https://127.0.0.1:8000/login')
        cy.get('#inputEmail').type("oopsmail@mail.com")
        cy.get('#inputPassword').type("Azerty123456")   
        cy.get('.btn').click()
        cy.get('p.alert').should('contain','Email ou mot de passe incorrect')
    })
    // Connexion bons identifiants
    it('Connexion OK et déconnexion', ()=> {
        cy.visit('https://127.0.0.1:8000/login')
        cy.get('#inputEmail').type("fauxmail@mail.com")
        cy.get('#inputPassword').type("Azerty123456")   
        cy.get('.btn').click()
        cy.get('p.alert').should('contain','connecte')
        //cy.get('ul > :nth-child(5) > a').click()
    })
})