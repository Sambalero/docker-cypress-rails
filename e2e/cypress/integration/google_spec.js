// Validates the world wide web
describe('Google Search Page', () => {
  it('mentions "Gmail"', () => {
    cy.visit('https://www.google.com/')
      .contains('Gmail')
   })
})
