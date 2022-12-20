class ProductPage {
    elements = {
        addLink: () => cy.wait(400)
            .contains('Add to cart')
    }
    addToCart() {
        this.elements.addLink().click({ force: true })
    }
}
export default ProductPage;