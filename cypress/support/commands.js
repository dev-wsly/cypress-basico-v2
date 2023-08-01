// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    const longText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum excepturi, soluta totam tempora veritatis debitis animi beatae fugit facilis modi sint. Cum laudantium possimus nulla aperiam tempora! Error, modi magnam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum excepturi, soluta totam tempora veritatis debitis animi beatae fugit facilis modi sint. Cum laudantium possimus nulla aperiam tempora! Error, modi magnam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum excepturi, soluta totam tempora veritatis debitis animi beatae fugit facilis modi sint. Cum laudantium possimus nulla aperiam tempora! Error, modi magnam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum excepturi, soluta totam tempora veritatis debitis animi beatae fugit facilis modi sint. Cum laudantium possimus nulla aperiam tempora! Error, modi magnam.'

    cy.get('#firstName').type('Wesley')
    cy.get('#lastName').type('Santos')
    cy.get('#email').type('wsws@gmail.com')
    cy.get('#open-text-area').type(longText, { delay: 0 })
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')
});