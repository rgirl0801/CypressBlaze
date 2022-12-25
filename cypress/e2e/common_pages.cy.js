/// <reference types="cypress"/>

describe('Go to different pages', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Go to Home', () => {
        cy.get('.col-lg-4.col-md-6.mb-4')
            .contains('Nokia lumia 1520').click()
        cy.contains('Home').click()
        cy.url().should('include', 'index.html')
    })

    it('Open and close About us', () => {
        cy.get('[data-target="#videoModal"]').click()
        cy.on('window:alert', (t) => {
            expect(t)
                .to.contains('Close')
        })
    });
    it('Send message', () => {
        cy.wait(400)
            .get('[data-toggle="modal"]')
            .contains('Contact').should('exist').click()
        cy.wait(400)
            .get("#recipient-email").type('email')
        cy.wait(400)
            .get('#recipient-name').type('Text')
        cy.wait(400)
            .get('#message-text').type('message-text')
        cy.get('[onclick="send()"]').click()
        cy.on('window:alert', (t) => {
            expect(t)
                .to.contains('Thanks for the message!!')

        });
    })
})
