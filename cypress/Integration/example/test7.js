/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
describe('My second test suite', function(){
    it('My second test case', function(){
        cy.visit(Cypress.env('url') + '/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").eq(0).click()

        
        
    }  )


}  )