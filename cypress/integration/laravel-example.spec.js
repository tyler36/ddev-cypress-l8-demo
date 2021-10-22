describe( 'laravel-example', () => {

    it('can view the welcome page', () => {
        cy.visit('/')
            .get( 'body' )
            .contains( 'Laravel has wonderful, thorough documentation covering every aspect of the framework.' );
    })

    it('is an example of a FAILING cypress test', () => {
        // This test is expected to FAIL.
        // It is provided to show Cypress's reaction when tests fail.
        cy.visit('/')
            .get( 'body' )
            .contains( 'Powered by Drupal' );
    })
})
