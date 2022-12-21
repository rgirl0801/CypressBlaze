import BasePage from "./BasePage";

export default class CartPage extends BasePage {

    constructor() {
        super()
        // cy.fixture('puechaseData').then(data => {
        //     this.data = data;
        // });
    }
    placeOrderBtn = "Place Order";
    nameField = "#name";
    cardField = "#card";
    submitButton = 'Purchase';
    alertSuccessText = 'Thank you for your purchase!'
    

    clickPlaceOrder() {
        cy.contains(this.placeOrderBtn).click()
    }
    fillPlaceOrderForm() {
        cy.wait(400)
            .get(this.nameField).type('name')
        cy.wait(400)
            .get(this.cardField).type('34535')
        cy.contains(this.submitButton).click()
    }
    getAlertText() {
        cy.on('window:alert', (t) => {
            expect(t)//.to.contains(this.alertSuccessText)
        })
    }

}