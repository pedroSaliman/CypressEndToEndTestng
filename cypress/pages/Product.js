class Product{
getcheckout(){return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')}
getout(){return cy.get(':nth-child(6) > :nth-child(5) > .btn')}
getprice(){return cy.get(' tr td:nth-child(4) > strong')}
gettotalprice(){return cy.get('h3 > strong')}
}
export default Product;