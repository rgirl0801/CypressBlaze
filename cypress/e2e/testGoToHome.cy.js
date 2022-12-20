import BasePage from "../Pages/BasePage";
import HomePage from  "../Pages/HomePage";

const homePage = new HomePage()
const basePage = new BasePage()

describe('Actions main page', () =>{
    beforeEach(() => {
        cy.viewport(1920, 1280)
        cy.visit('https://www.demoblaze.com/index.html')
    })

    it('Add product and back to Home', () => {
            homePage.clickOnNokia()
            basePage.goToHome()
            basePage.shouldHomePageUrl()
    })
})