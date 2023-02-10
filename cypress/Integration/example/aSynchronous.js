/// <reference types="cypress" />



describe('asynchronous', function(){

    it('asynchronous nature', function(){
        cy.visit(Cypress.env('url') + '/seleniumPractise/#/')
        console.log('sg') //Asynchronous example
        cy.get('.brand').then(function(logo){
            const actualWord = logo.text()
            expect(actualWord.includes("GREENKART")).to.be.true
            cy.log(logo.text())
            console.log("asynch")
        })
        cy.get('.search-keyword').type('Ca')
        cy.get('.search-button').click
        cy.get('.products').find('.product').each(($el, list, $index)=>{
            $el.find('h4.product-name').then(function(word){
                const word1 = word.text()
                if(word1.includes('Cashews')){
                    cy.wrap($el).find('button').click()
                }
            })
        //    const word = $el.find('h4.product-name').text()
        //    if(word.includes("Cashews")){
        //    cy.wrap($el).find('button').click()
        //    }
        })
    })
})