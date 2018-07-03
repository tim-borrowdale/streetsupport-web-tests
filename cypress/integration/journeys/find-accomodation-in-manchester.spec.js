/// <reference types="Cypress" />

context('Finding accomodation in Manchester', () => {
  it('should be able to find accomodation in manchester', () => {

    cy.on('uncaught:exception', () => false)
    cy.visit('https://ssn-web-dev.azurewebsites.net/')

    cy.get('div.modal select.js-modal-location-dropdown').select('Manchester')
    cy.wait(200)

    cy.get('a.btn--brand-d').contains('Find Help').click()

    cy.get('a#accom').contains('Accommodation').click({force:true})
    cy.wait(200)

    cy.get('span.cta a.btn').contains('all accommodation').click()

    cy.get('a.accommodation-list__listing-view-more-btn').contains('View Details').click({force:true})

    cy.url().should('contain','https://ssn-web-dev.azurewebsites.net/find-help/accommodation/listing/details/?id=')
  });
})