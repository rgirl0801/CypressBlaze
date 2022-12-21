class BasePage {

    elements = {
        homeLink: () => cy.wait(400).contains('Home'),
        cartLink: () => cy.wait(400).contains('Cart'),
        loginLink: () => cy.wait(400).get('#login2'),
        loginField: () => cy.wait(400).get('#loginusername'),
        passwordField: () => cy.wait(400).get('#loginpassword'),
        loginBtn: () => cy.get('[onclick="logIn()"]')

    }
    goToHome() {
        this.elements.homeLink().click({ force: true });
    }
    goToCart() {
        this.elements.cartLink().click({ force: true });
    }
    goToLogin() {
        this.elements.loginLink().click({ force: true });
    }
    shouldHomePageUrl() {
        cy.wait(300)
            .url().should('include', 'index.html')
    }
    acceptAlert() {
        cy.on('window:alert', (t) => {
            expect(t)
        })
    }
    fillLoginForm(userEmail, passwordField) {
        this.elements.loginField().type(userEmail)
        this.elements.passwordField().type(passwordField)
    }
    acceptLogin() {
        this.elements.loginBtn().click()
    }
}
export default BasePage;