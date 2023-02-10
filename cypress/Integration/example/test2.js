/// <reference types="cypress" />
describe('My second test suite', function(){
    it('My second test case', function(){
        cy.visit(Cypress.env('url') +'/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        //parent child chaining
      
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const vegText = $el.find('h4.product-name').text()
            if(vegText.includes('Cashews')){
                cy.wait(2000)
                cy.wrap($el).contains('ADD TO CART').click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains("PROCEED TO CHECKOUT").click()
        cy.contains("Place Order").click()
        cy.wait(2000)
        cy.get('select').select('India').should('have.value', 'India')
        cy.get('.chkAgree').check().should('be.checked')
        cy.get('button').click()

        
    }  )


}  )