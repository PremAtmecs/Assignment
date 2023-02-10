class HomePage{

    getEditBox()
    {
       return cy.get("input[name='name']:nth-child(2)")
    }
    getEmailField(){
        return cy.get(':nth-child(2) > .form-control')
    }
    getPasswordField(){
        return cy.get('#exampleInputPassword1')
    }
    getcheckBox(){
        return cy.get('#exampleCheck1')
    }
    getTwoWayDataBinding()
    {
       return cy.get(':nth-child(4) > .ng-untouched')
    }
    getGender()
    {
       return cy.get("select")
    }
    getDOB(){
        return cy.get(":nth-child(8) > .form-control")
    }
    getEntrepreneur()
    {
        return cy.get('#inlineRadio3') 
    }
    getshopTab()
    {
       return cy.get(':nth-child(2) > .nav-link')
    }


}
export default HomePage;