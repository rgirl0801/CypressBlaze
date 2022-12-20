/// <reference types="cypress"/>
import BasePage from "../Pages/BasePage";
import HomePage from "../Pages/HomePage";
import ProductPage from "../Pages/ProductPage";
const homePage = new HomePage()
const basePage = new BasePage()
const productPage = new ProductPage()

describe('Simple purchase', () => {
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.viewport(1980, 1200)
    })

    it('Purchase', () => {

        homePage.clickOnNokia()
        productPage.addToCart()
        basePage.acceptAlert()
    })
})