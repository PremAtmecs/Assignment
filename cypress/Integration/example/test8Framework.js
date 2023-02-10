/// <reference types="cypress" />

import { add } from "cypress/types/lodash"
import HomePage from "../pageObjects/HomePage"
import ProductPage from "../pageObjects/ProductPage"
describe('Test Hook', function(){
    before(function(){
        //run once before all tests in the block
        cy.fixture("example").then(function(data){
            this.data=data

        })
    })
    it('My second test case', function(){
        const homePage = new HomePage()
        const productPage = new ProductPage()
        cy.visit(Cypress.env('url') + "/angularpractice/")
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        cy.get("input[name='name']:nth-child(2)").should('have.attr','minlength','2')
        homePage.getEntrepreneur().should('be.disabled')
        homePage.getshopTab().click()
        Cypress.config('defaultCommandTimeout',8000)
       
        this.data.productName.forEach(element => {
            cy.selectProduct(element)    
        });
        //cy.wait(3000)
        productPage.getCheckout_Button().click()
        var sum = 0
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list)=>{
          const amount= $el.text() 
          var res = amount.split(" ") 
          res = res[1].trim()
          cy.log(res)
          sum = Number(sum) + Number(res) 
              
        }).then(function(){
        cy.log("Total", sum)
    })

    cy.get('h3 strong').then(function(element){
       const total = element.text()
       var totalAmount = total.split(" ")
       totalAmount = totalAmount[1].trim()
       cy.log(totalAmount)
       expect(Number (totalAmount)).to.equal(sum)
    })
        productPage.getClick_Checkout().click()
        productPage.getCountry_Field().type('India')
        productPage.getSelect_Country().click()
        productPage.getSelect_CheckBox().click({force: true})
        productPage.getClick_Purchase().click()
        productPage.getVerify_msg().then(function(element){
            const actualText = element.text()
            expect(actualText.includes("Success!")).to.be.true
        })
        


        
        
    }  )


}  )