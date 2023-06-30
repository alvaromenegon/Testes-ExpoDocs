/// <reference types="cypress" />
describe('Teste 1', () => {
    beforeEach(() => {
        cy.visit('https://docs.expo.dev/');
    });
    it('troca de tema corretamente', () => { 
        cy.wait(200);
        cy.get('select[aria-label="Theme selector"]').select('dark');
        cy.wait(200);
        cy.get('html').should('have.class', 'dark-theme');
        cy.wait(200);
        cy.get('select[aria-label="Theme selector"]').select('light');
        cy.wait(200);
        cy.get('html').should('not.have.class', 'dark-theme');
    });


});