/// <reference types="cypress" />

describe("Able to enter name", function() {
  it('can be types into', function() {
    cy.visit("pizza");
    cy.get("#name-input")
      .type("Naruto Uzumaki")
      .should("have.value", "Naruto Uzumaki");
  })
})

describe("Able to select multiple toppings", function() {
  it('can select a topping', function() {
    cy.visit("pizza");
    cy.get("[data-cy=pepperoni]")
      .click()
      .should('be.checked');
  })

  it('can select multiple toppings', function() {
    cy.visit("pizza");
    cy.get("[data-cy=pepperoni]")
      .click()
      .should('be.checked')

    cy.get("[data-cy=spinach]")
      .click()
      .should('be.checked')

    cy.get("[data-cy=anchovies]")
      .should('not.be.checked')

    cy.get("[data-cy=peppers]")
      .should('not.be.checked')
  })
})

describe("Form can be submitted", function() {
  it('can submit the form', function() {
    cy.visit("pizza");
    cy.get("#name-input")
      .type("Taylor Hebert")
    
    cy.get("#order-button")
      .click()

    cy.contains("Form submitted successfully")
  })
})