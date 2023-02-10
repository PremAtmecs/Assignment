/// <reference types="cypress" />
describe('customCommand', function(){
    it("handling links", function(){
        cy.visit("https://demo.nopcommerce.com/")
        //without using custom commands
        //cy.contains("Apple MacBook Pro 13-inch").click()
        //using custom command
        cy.clickLink("Apple MacBook Pro 13-inch")
        cy.contains("Apple MacBook Pro 13-inch").should('have.text', 'Apple MacBook Pro 13-inch')

    })

    it("Overwritting existing command", function(){
        cy.visit("https://demo.nopcommerce.com/")
        cy.clickLink("APPLE MACBOOK PRO 13-inch")
        cy.contains("Apple MacBook Pro 13-inch").should('have.text', 'Apple MacBook Pro 13-inch')

    })

    it.only("Login Command", function(){
        cy.visit("https://demo.nopcommerce.com/")
        cy.clickLink("Log in")
        cy.Login("Prem@gmail.com", "1234")

    })
})