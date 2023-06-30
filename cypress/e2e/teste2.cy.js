/// <reference types="cypress" />

describe('Teste 2', () => {
    it('itens essenciais são exibidos corretamente na tela inicial', () => { 
        cy.contains('Quick Start').should('be.visible');
        cy.wait(200);
        cy.contains('Create a universal Android, iOS,').should('be.visible');
        cy.wait(200);
        cy.contains('and web app').should('be.visible');
        cy.wait(200);
        cy.contains('Start Tutorial').should('have.attr' ,'href','/tutorial/introduction');
        cy.wait(200);
        cy.contains('Try Expo in your browser').should('be.visible');
        cy.wait(200);
        cy.contains("Create a Snack").should('have.attr', 'href', 'https://snack.expo.dev/')
    });
});