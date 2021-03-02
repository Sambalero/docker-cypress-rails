// localhost_spec
describe('landing page', () => {
  it('is rails welcome page', () => {
  	cy.visit('http://localhost:3000/hello/say_hello')
      .contains('Yay')
  })
})
