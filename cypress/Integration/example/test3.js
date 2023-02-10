/// <reference types="cypress" />
describe('My second test suite', function(){
    it('My second test case', function(){
        cy.visit(Cypress.env('url') + '/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.wait(2000)
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.wait(2000)

        //static dropdown
        cy.get('input[type="checkbox"]').check(['option3', 'option2'])
        cy.get('select').select('option2').should('have.value', 'option2')
        //dynamic dropdown
        cy.get('#autocomplete').type('ind')
        //cy.wait(2000)
        cy.get('.ui-menu-item-wrapper').each(($el, index, $list) => {
            if($el === "India"){
                $el.click()
            }

        })
        cy.get('#displayed-text').should('be.visible').type('hello')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('input[value="radio2"]').check().should('be.checked').should('have.value','radio2')

       

        
    }  )


}  )