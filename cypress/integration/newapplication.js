/// <reference types="cypress" />
import Home from "../pages/Home";
import Product from "../pages/Product";
import Checkout from "../pages/Checkout";


describe("Test  Suite",()=>{
   before(function(){
       cy.fixture('ex').then(function(datadriven){
           cy.log(datadriven)
           this.datadriven=datadriven
              })
   })

   it("Enter Info",function(){
       const home=new Home();
       const product=new Product();
       const check=new Checkout();
       var sum =0;

    cy.visit("https://rahulshettyacademy.com/angularpractice/")
    home.getusername().should("be.empty").type(this.datadriven.username);
    home.getemail().should("be.empty").type(this.datadriven.email);
    home.getpass().should("be.empty").type(this.datadriven.password);
    home.getselect().select(this.datadriven.select);
    home.getconfirm().should("have.value",this.datadriven.username)
    home.getdisable().should("be.disabled");
    home.getcheck().check().should("be.checked");
    home.getsubmitbutton().should("be.visible").click();
    home.getshopbutton().should("be.visible").click();
    this.datadriven.products.forEach(function(element){
        cy.selectproduct(element);

    })
    product.getcheckout().should("be.visible").click();
    product.getprice().each(($el,index,$list)=>{
        const txt=$el.text();
        let result=txt.split(" ");
        result=result[1].trim();
        sum=sum+Number(result);


    }).then(()=>{
        cy.log(sum)

    })
    product.gettotalprice().then((ele)=>{
        const txt=ele.text();
        let total=txt.split(" ");
        total=total[1].trim();
        expect(Number(total)).to.eql(sum);

    })
    product.getout().should("be.visible").click()
    check.gettypecountry().should("be.empty").type("France");
    check.getcheck().click()
    check.clickcountry().should("be.visible").click()
    check.purchase().click()
    check.alert().then((element)=>{
        const atualtext=element.text();
        expect(atualtext.includes("Success")).to.be.true
    })
    
   });
});