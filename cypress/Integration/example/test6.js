/// <reference types="cypress" />
describe('My second test suite', function(){
    it('My second test case', function(){
        cy.visit(Cypress.env('url')  + '/AutomationPractice/')
        cy.get(".mouse-hover-content").invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')
        
    }  )


}  )