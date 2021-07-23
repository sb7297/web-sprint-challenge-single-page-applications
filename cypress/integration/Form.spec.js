/// <reference types="cypress" />

describe("Able to enter name", function() {
  it('can be types into', function() {
    cy.visit("pizza");
    cy.get("#name-input")
      .type("Naruto Uzumaki")
      .should("have.value", "Naruto Uzumaki");
  })
})