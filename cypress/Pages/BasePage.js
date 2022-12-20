class BasePage {
    elements = {
        homeLink: () => cy.wait(400)
            .contains('Home')

    }
    goToHome() {
        this.elements.homeLink().click({ force: true });
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
}
export default BasePage;