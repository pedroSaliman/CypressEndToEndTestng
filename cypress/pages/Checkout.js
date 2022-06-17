class Checkout{


gettypecountry(){return cy.get('#country')}
getcheck(){return cy.get('.checkbox')}
clickcountry(){return cy.get('.suggestions > ul > li > a')}
purchase(){return cy.get('.ng-untouched > .btn')}
alert(){return cy.get('.alert')}






}
export default Checkout;