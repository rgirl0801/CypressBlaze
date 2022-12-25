/// <reference types="cypress"/>
import BasePage from "../Pages/BasePage";
import HomePage from "../Pages/HomePage";
import CartPage from "../Pages/CartPage";
import ProductPage from "../Pages/ProductPage";
const homePage = new HomePage()
const basePage = new BasePage()
const cartPage = new CartPage()
const productPage = new ProductPage()


describe('About Us', () => {

    beforeEach(function () {
        cy.fixture('signInPage').then(signIn => {
            this.signIn = signIn;
        });
        cy.visit('/')
    })

    it('Login successfull', function () {
        basePage.goToLogin()
        basePage.fillLoginForm(this.signIn.userEmail, this.signIn.userPassword)
        basePage.acceptLogin()
    });
});