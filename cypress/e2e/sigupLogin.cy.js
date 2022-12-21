/// <reference types="cypress"/>
// import { faker } from '@faker-js/faker';
// import login_fixtures from "..fixtures/login_fixtures.js"

// const login = new login_fixtures();

// const faker = require('faker')


describe('Login and sign-up tests', () => {
    // let email = faker.internet.email()
    // let firstName = faker.name.firstName()
    // let lastName = faker.name.lastName()

    beforeEach(() => {
        cy.visit('/')
        // cy.fixture('login_fixtures').then(data => {
        //     this.data = data
        // })
    })
    it('Positve login', () => {
        const login_btn = '#login2'
        const login_input = '#loginusername'
        const password_input = '#loginpassword'
        const confirm_btn = '[onclick="logIn()"]'
        const valid_login = 'KateFox1'
        const valid_password = 'KateFox'

        cy.get(login_btn).click()
        cy.wait(500)
            .get(login_input)
            .type(valid_login)
            .should('have.value', valid_login)
        cy.wait(500)
            .get(password_input)
            .type(valid_password)
            .should('have.value', valid_password)
        cy.get(confirm_btn).click()
        cy.on('window:alert', (t) => {
            expect(t)
                .to.contains('Login')
        })
    })

    it('Valid sign up ', () => {
        cy.get('#signin2').click()
        cy.get('#sign-username')
            .type('email')
        cy.get("#sign-password")
            .should("be.visible")
        cy.get('#sign-password')
            .type('KateFox')
            .should('have.value', 'KateFox')
        cy.get('[onclick="register()"]').click()
        cy.on('window:alert', (t) => {
            expect(t).to.contains('Sign up successful')
        })
    })

})
