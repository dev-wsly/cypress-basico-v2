//Seção 08 - Exercício Extra 02
Cypress._.times(20, function() {
  it('Testa a página da política de privacidade de forma independente', function() {
    cy.visit('./src/privacy.html')
    cy.contains('CAC TAT - Política de privacidade')
      .should('be.visible')
  })
})