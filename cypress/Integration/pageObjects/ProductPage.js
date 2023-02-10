class ProductPage
{

    getCheckout_Button(){
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }

    getClick_Checkout(){
        return cy.get('.btn.btn-success')
    }

    getCountry_Field(){
        return cy.get('#country')
    }

    getSelect_Country(){
        return cy.get('.suggestions > ul > li > a')
    }
    
    getSelect_CheckBox(){
        return cy.get('#checkbox2')
    }

    getClick_Purchase(){
        return cy.contains('Purchase')
    }

    getVerify_msg(){
        return cy.get('.alert')
    }

}
export default ProductPage;