describe('Funcionalidad de búsqueda', () => {
  beforeEach(() => {
    // Intercepta cualquier llamada a la API de búsqueda
    cy.intercept('GET', 'https://api.tvmaze.com/search/shows?q=*').as('searchResults');
    cy.visit('/');
  });

  it('Valida que el título de bienvenida esté presente', () => {
    cy.get('h1').contains('¡Welcome!').should('be.visible');
  });

  it('Realiza una búsqueda, espera resultados y navega a los detalles de una película', () => {
    cy.get('input[name="busqueda"]').should('be.visible').type('k');
    cy.wait('@searchResults');
    cy.get('.card').should('have.length.at.least', 1);
    cy.get('.card').first().find('button').click(); 
    cy.get('.accordion-button', { timeout: 10000 }).should('be.visible').then(($headers) => {
      $headers.each((index, header) => {
        cy.wrap(header).click(); 
      });
    });
    cy.contains('a', 'Volver').click();

        cy.url().should('eq', Cypress.config().baseUrl + '/');
  });
});