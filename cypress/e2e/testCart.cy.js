/// <reference types="cypress"/>
import BasePage from "../Pages/BasePage";
import HomePage from "../Pages/HomePage";
import CartPage from "../Pages/CartPage";
import ProductPage from "../Pages/ProductPage";
const homePage = new HomePage()
const basePage = new BasePage()
const cartPage = new CartPage()
const productPage = new ProductPage()

describe('Cart test', () => {
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.viewport(1980, 1200)
        // cy.fixture('puechaseData').then(data => {
        //     this.data = data;
        // });
    })

    it('Add to cart', () => {

        homePage.clickOnNokia()
        productPage.addToCart()
        basePage.acceptAlert()
        basePage.goToCart()
        cartPage.clickPlaceOrder()
        cartPage.fillPlaceOrderForm()
        cy.log('here')
        cartPage.getAlertText()
        // cartPage.acceptAlert()
    })
})