class HomePage {
    elements = {
        nokiaLumia: () => cy.wait(400)
            .get('.col-lg-4.col-md-6.mb-4')
            .contains('Nokia lumia 1520')
    }
    clickOnNokia() {
        this.elements.nokiaLumia().click({ force: true })
    }
}

export default HomePage;