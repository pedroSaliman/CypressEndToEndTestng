class Home{
    getusername(){return cy.get(':nth-child(1) > .form-control')}
    getemail(){return  cy.get("input[name='email']")}
    getpass(){return cy.get("#exampleInputPassword1")}
    getcheck(){return cy.get('#inlineRadio2')}
    getdisable(){return  cy.get('#inlineRadio3')}
    getconfirm(){return   cy.get('.ng-untouched')}
    getselect(){return cy.get("#exampleFormControlSelect1")}
    getsubmitbutton(){return cy.get("input[value='Submit']")}
    getshopbutton(){return     cy.get(':nth-child(2) > .nav-link');}
}
export default Home;