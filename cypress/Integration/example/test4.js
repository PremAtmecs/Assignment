/// <reference types="cypress" />
describe('My second test suite', function(){
    it('My second test case', function(){
        cy.visit(Cypress.env('url') + '/AutomationPractice/')
        cy.get('#alertbtn').click()
        //windows:alert
        cy.on("window:alert", (str)=>{
            expect(str).to.equal("Hello , share this practice page and share your knowledge")
        })
        cy.get('#confirmbtn').click()
        //windows:confirm
        cy.on("window:confirm", (str1)=>{
            expect(str1).to.equal("Hello , Are you sure you want to confirm?")

        })
        cy.get('#opentab').invoke('removeAttr', 'target').click()

        cy.url().should('include', 'rahulshettyacademy')
        cy.go('back')

        
    }  )


}  )