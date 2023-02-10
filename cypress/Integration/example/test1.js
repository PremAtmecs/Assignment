/// <reference types="cypress" />
describe('My first test suite', function(){
    it('My first test case', function(){
        cy.visit(Cypress.env('url') + "/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.get('.product').should('have.length', 5)
        cy.get('.product:visible').should('have.length',4)
        //parent child chaining
        cy.get('.products').find('.product').should('have.length', 4)

        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
        cy.wait(2000)
        cy.get(':nth-child(3) > .product-action > button').click()
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const vegText = $el.find('h4.product-name').text()
            if(vegText.includes('Cashews')){
                cy.wait(2000)
                cy.wrap($el).contains('ADD TO CART').click()
            }
        })
        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.length', 1)
        cy.get('.brand').should('have.text', "GREENKART")

        //this is to print in logs
        cy.get('.brand').then(function(logoElement){
            cy.log(logoElement.text())
        })
        
    }  )


}  )