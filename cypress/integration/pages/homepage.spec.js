/// <reference types="Cypress" />

context('Homepage', () => {

  beforeEach(() => {  
    cy.on('uncaught:exception', () => false)
    cy.visit('https://ssn-web-dev.azurewebsites.net/')
  })

  it('should have the correct title', () => {
    cy.title().should('include', 'Street Support Network - Working together to end homelessness')
  });

  describe('navigation', () => {

    beforeEach(() => {
      cy.get('div.modal button.modal-close').click()
    })

    it('should link to about page', () => {
      cy.get('header a').contains('About').click()
      cy.url().should('eq','https://ssn-web-dev.azurewebsites.net/about/')
    })
    
    xit('should link to news page', () => {
      cy.get('header a').contains('News').click()
      cy.url().should('eq','https://news.streetsupport.net')
    })
    
    it('should link to contact us page', () => {
      cy.get('header a').contains('Contact Us').click()
      cy.url().should('eq','https://ssn-web-dev.azurewebsites.net/contact/')
    })
    
    it('should link to impact page', () => {
      cy.get('header a').contains('Impact').click()
      cy.url().should('eq','https://ssn-web-dev.azurewebsites.net/impact/')
    })

    it('should link to jobs page', () => {
      cy.get('header a').contains('Jobs').click()
      cy.url().should('eq','https://ssn-web-dev.azurewebsites.net/jobs/')
    })
  })

  describe('Call to actions', () => {

    beforeEach(() => {
      cy.get('div.modal button.modal-close').click()
    })

    it('should have Find Help CTA',() => {
      cy.get('a.btn--brand-d').contains('Find Help').click()
      cy.url().should('eq', 'https://ssn-web-dev.azurewebsites.net/find-help/')
    })

    
    it('should have Find Help CTA',() => {
      cy.get('a.btn--brand-e').contains('Give Help').click()
      cy.url().should('eq', 'https://ssn-web-dev.azurewebsites.net/give-help/')
    })
  })
})
