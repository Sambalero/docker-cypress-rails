// docker_internal_spec
describe('docker internal url', () => {
  it('is rails welcome page', () => {
    cy.visit('http://host.docker.internal:3000/')
      .contains('Yay')
	})
})
