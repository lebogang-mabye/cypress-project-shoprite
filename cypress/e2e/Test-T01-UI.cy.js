/**
 * Part one: UI Test
 */

describe('Test-T01-UI', () => {
  
  it('Product Search', () => {
    
    cy.visit('/') //Visit Base URL - Shoprite
    cy.get('#js-site-search-input').clear().type('10537992EA').type('{enter}') //Search product by ID
    cy.get('.js-total-products').should('contain', 'Products') //Product page assertion
    cy.get('[title="Clover Krush 100% Mango Fruit Juice Blend Carton 1L"]').click() //Click on the searched product

    //Grap and log product price
    cy.get('.now').invoke('val').then((productPrice) => {
      cy.log(productPrice)
    })

    //Grap and log product description
    cy.get('.pdp__description').invoke('val').then((productDescription) => {
      cy.log(productDescription)
    })

    cy.contains('#accessibletabsnavigation0-1').should('contain', 'Product Information') //Product information assertion

  })
})