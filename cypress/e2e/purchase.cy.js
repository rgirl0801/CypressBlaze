/// <reference types="cypress"/>

describe('Simple purchase', () => {
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.viewport(1980, 1200)
        cy.wait(500)
    })

    it('Purchase', () => {
        cy.get('.col-lg-4.col-md-6.mb-4')
            .should('have.length', 9)
        cy.get('.col-lg-4.col-md-6.mb-4')
            .contains('Nokia lumia 1520').click()
        cy.contains('Add to cart')
            .should('exist').click()
        cy.on('window:alert', (t) => {
            expect(t)
                .to.contains('Product added')
        })
    })
})