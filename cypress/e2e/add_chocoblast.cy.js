describe('ajouter un chocoblast', ()=> {
    //Connexion mauvais identifiants
    // Connexion bons identifiants
    it('Ajouter un chocoblast', ()=> {
        //Connexion
        cy.visit('https://127.0.0.1:8000/login')
        cy.get('#inputEmail').type("fauxmail@mail.com")
        cy.get('#inputPassword').type("Azerty123456")   
        cy.get('.btn').click()
        cy.wait(2000)
        cy.get('ul > :nth-child(3) > a').click()
        cy.get('ul > :nth-child(3) > a').type("Faut toujours verouiller !")
        cy.get('#chocoblast_createAt').click()

//auteur = cy.get(':nth-child(3) > .ts-wrapper > .ts-control')

//cible = cy.get(':nth-child(4) > .ts-wrapper > .ts-control')

//Ajouter = cy.get(':nth-child(4) > .ts-wrapper > .ts-control')
    })
})

