describe('visible', function(){
    it('visible', function(){
        cy.visit(Cypress.env('url') + '/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)
        cy.get('.products').find('.product').eq(3).contains("ADD TO CART").click()

    })
})