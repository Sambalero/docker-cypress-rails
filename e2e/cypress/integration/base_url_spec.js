// base_url_spec.js
describe('base url', () => {
  it('is rails', () => {
    cy.visit('/')
      .contains('Yay')
   })
})
