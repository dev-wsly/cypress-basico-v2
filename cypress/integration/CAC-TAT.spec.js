// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function() {
        cy.visit('./src/index.html')
    })

    it('Verifica o título da aplicação', function() { 
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    //Exercício Extra 01
    it('Preenche os campos obrigatórios e envia o formulário', function() {
        const longText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum excepturi, soluta totam tempora veritatis debitis animi beatae fugit facilis modi sint. Cum laudantium possimus nulla aperiam tempora! Error, modi magnam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum excepturi, soluta totam tempora veritatis debitis animi beatae fugit facilis modi sint. Cum laudantium possimus nulla aperiam tempora! Error, modi magnam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum excepturi, soluta totam tempora veritatis debitis animi beatae fugit facilis modi sint. Cum laudantium possimus nulla aperiam tempora! Error, modi magnam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum excepturi, soluta totam tempora veritatis debitis animi beatae fugit facilis modi sint. Cum laudantium possimus nulla aperiam tempora! Error, modi magnam.'

        cy.get('#firstName').type('Wesley')
        cy.get('#lastName').type('Santos')
        cy.get('#email').type('wsws@gmail.com')
        cy.get('#open-text-area').type(longText, { delay: 0 })
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    })
    
    //Exercício Extra 02
    it('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.get('#firstName').type('Wesley')
        cy.get('#lastName').type('Santos')
        cy.get('#email').type('wsws-gmail.com') //E-mail inválido
        cy.get('#open-text-area').type('Teste', { delay: 0 })
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    })

    //Exercício Extra 03
    it('Campo telefone continua vazio quandpo preenchido com valor não numérico', function() {
        cy.get('#phone')
            .type('ABCDEFGHIJ')
            .should('have.value', '')
    })

    //Exercício Extra 04
    it('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
        cy.get('#firstName').type('Wesley')
        cy.get('#lastName').type('Santos')
        cy.get('#email').type('wsws@gmail.com')
        cy.get('#phone-checkbox').click()
        cy.get('#phone').type('ABCDEFGHIJ')
        cy.get('#open-text-area').type('Teste', { delay: 0 })
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    })

    //Exercício Extra 05
    it('Preenche e limpa os campos nome, sobrenome, email e telefone', function() {
        cy.get('#firstName')
          .type('Wesley')
          .should('have.value', 'Wesley')
          .clear()
          .should('have.value', '')
        cy.get('#lastName')
          .type('Santos')
          .should('have.value', 'Santos')
          .clear()
          .should('have.value', '')
        cy.get('#email')
          .type('wsws@gmail.com')
          .should('have.value', 'wsws@gmail.com')
          .clear()
          .should('have.value', '')
        cy.get('#phone-checkbox')
          .click()
        cy.get('#phone')
          .type('16994769498')
          .should('have.value', '16994769498')
          .clear()
          .should('have.value', '')
        cy.get('#phone-checkbox')
          .click()
        cy.get('#open-text-area')
          .type('Teste', { delay: 0 })
          .should('have.value', 'Teste')
          .clear()
          .should('have.value', '')
    })

    //Exercício Extra 06
    it('Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })

    //Exercício Extra 07
    it('Envia o formuário com sucesso usando um comando customizado', function() {
        cy.fillMandatoryFieldsAndSubmit()
    })

    //Exercício Extra 08
    it('Utilização do cy.contains()', function() {
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    })
})