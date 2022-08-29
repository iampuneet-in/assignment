/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('home page tv api', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
  })

  it('should have all the 5 genre on home page', () => {
    cy.get('.carousel').should('have.length', 5)
    cy.get('.carousel__track li').should(($crousel) => {
      const n = parseInt($crousel.length);
      expect(n).to.be.gte(1);
    });
  })

  it('should have card greater than 1', () => {
    cy.get('.carousel__track li').should(($crousel) => {
      const n = parseInt($crousel.length);
      expect(n).to.be.gte(1);
    })
  })

  it('search from home page', () => {
    cy.get('input')
      .type('homeland').should('have.value', 'homeland');
  })

});


