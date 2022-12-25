import BasePage from "../Pages/BasePage";
import HomePage from  "../Pages/HomePage";

const homePage = new HomePage()
const basePage = new BasePage()

describe('Actions main page', () =>{
    beforeEach(() => {
        cy.visit('/prod.html?idp_=1')
    })

    it('Add product and back to Home', () => {
            // homePage.clickOnNokia()
            basePage.goToHome()
            basePage.shouldHomePageUrl()
    })
})