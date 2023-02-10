/// <reference types="cypress" />
import { default as HomePage } from "../pageObjects/HomePage"
import { default as ProductPage } from "../pageObjects/ProductPage"

describe('MyTestSuite', function(){
    before(function(){
        cy.fixture("example").then(function(data){
            this.data = data

        })
    })
    
    it('HandlingDataDriven', function(){
        const home = new HomePage()
        const productpage = new ProductPage()
       
        cy.visit(Cypress.env('url') + "/angularpractice/")
        home.getEditBox().type(this.data.firstname)
        home.getEmailField().type(this.data.email)
        home.getPasswordField().type(this.data.password)
        home.getcheckBox().check().should('be.checked')
        home.getGender().select(this.data.gender).should('have.value', 'Female')
        home.getDOB().click()


    })
})