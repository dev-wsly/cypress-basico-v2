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

    //Seção 03 - Exercício Extra 01
    it('Preenche os campos obrigatórios e envia o formulário', function() {
        const longText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum excepturi, soluta totam tempora veritatis debitis animi beatae fugit facilis modi sint. Cum laudantium possimus nulla aperiam tempora! Error, modi magnam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum excepturi, soluta totam tempora veritatis debitis animi beatae fugit facilis modi sint. Cum laudantium possimus nulla aperiam tempora! Error, modi magnam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum excepturi, soluta totam tempora veritatis debitis animi beatae fugit facilis modi sint. Cum laudantium possimus nulla aperiam tempora! Error, modi magnam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum excepturi, soluta totam tempora veritatis debitis animi beatae fugit facilis modi sint. Cum laudantium possimus nulla aperiam tempora! Error, modi magnam.'

        cy.get('#firstName').type('Wesley')
        cy.get('#lastName').type('Santos')
        cy.get('#email').type('wsws@gmail.com')
        cy.get('#open-text-area').type(longText, { delay: 0 })
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    })
    
    //Seção 03 - Exercício Extra 02
    it('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.get('#firstName').type('Wesley')
        cy.get('#lastName').type('Santos')
        cy.get('#email').type('wsws-gmail.com') //E-mail inválido
        cy.get('#open-text-area').type('Teste', { delay: 0 })
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    })

    //Seção 03 - Exercício Extra 03
    it('Campo telefone continua vazio quandpo preenchido com valor não numérico', function() {
        cy.get('#phone')
            .type('ABCDEFGHIJ')
            .should('have.value', '')
    })

    //Seção 03 - Exercício Extra 04
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

    //Seção 03 - Exercício Extra 05
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

    //Seção 03 - Exercício Extra 06
    it('Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })

    //Seção 03 - Exercício Extra 07
    it('Envia o formuário com sucesso usando um comando customizado', function() {
        cy.fillMandatoryFieldsAndSubmit()
    })

    //Seção 03 - Exercício Extra 08
    it('Utilização do cy.contains()', function() {
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    })

    //Seção 04 - Exercício 
    it('Seleciona um produto (YouTube) por seu texto', function() {
        cy.get('#product')
          .select('YouTube')
          .should('have.value', 'youtube')
    })

    //Seção 04 - Exercício Extra 01
    it('Seleciona um produto (Mentoria) por seu valor (value)', function() {
        cy.get('#product')
          .select('mentoria')
          .should('have.value', 'mentoria')
    })

    //Seção 04 - Exercício Extra 02
    it('Seleciona um produto (Blog) por seu índice', function() {
        cy.get('#product')
          .select(1)
          .should('have.value', 'blog')
    })

    //Seção 05 - Exercício
    it('Marca o tipo de atendimento "Feedback"', function() {
        cy.get('input[type="radio"][value="feedback"]')
          .check()
          .should('have.value', 'feedback')
          .should('be.checked')
    })

    //Seção 05 - Exercício Extra 01
    it('Marca cada tipo de atendimento', function() {
        cy.get('input[type="radio"]')
          .should('have.length', 3)
          .each(function($radio) {
            cy.wrap($radio).check()
            cy.wrap($radio).should('be.checked')
        })
    })

    //Seção 06 - Exercício

    it('Marca ambos checkboxes, depois desmarca o último', function() {
        cy.get('input[type="checkbox"]')
          .check()
          .should('be.checked')
          .last()
          .uncheck()
          .should('not.be.checked')
    })

    //Seção 06 - Exercício Extra 01
    it('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
        cy.get('#firstName').type('Wesley')
        cy.get('#lastName').type('Santos')
        cy.get('#email').type('wsws@gmail.com')
        cy.get('#phone-checkbox').check()
        cy.get('#phone').type('ABCDEFGHIJ')
        cy.get('#open-text-area').type('Teste', { delay: 0 })
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    })

    //Seção 07 - Exercício
    it('Seleciona um arquivo da pasta fixtures', function() {
      cy.get('#file-upload')
        .should('not.have.value')
        .selectFile('./cypress/fixtures/example.json')
        .should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
        })
    })

    //Seção 07 - Exercício Extra 01
    it('Seleciona um arquivo simulando um drag-and-drop', function() {
      cy.get('#file-upload')
        .should('not.have.value')
        .selectFile('./cypress/fixtures/example.json', {action: 'drag-drop'})
        .should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
        })
    })

    //Seção 07 - Exercício Extra 02
    it('Seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function() {
        cy.fixture('example.json').as('sampleFile')
        cy.get('#file-upload')
        .should('not.have.value')
        .selectFile('@sampleFile', {action: 'drag-drop'})
        .should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
        })
    })

    //Seção 08 - Exercício
    it('Verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function() {
      cy.get('#privacy a').should('have.attr', 'target', '_blank')
    })

    //Seção 08 - Exercício Extra 01
    it('Acessa a página da política de privacidade removendo o target e então clicando no link', function() {
      cy.get('#privacy a')
        .invoke('removeAttr', 'target')
        .click()

      cy.contains('CAC TAT - Política de privacidade')
        .should('be.visible')
    })
})