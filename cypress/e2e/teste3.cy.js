/// <reference types="cypress" />

describe('Teste 3', () => {
    it('menu é exibido corretamente', () => { 
        cy.contains('Guides').should('have.attr','href','/workflow/customizing');
        cy.wait(200);
        cy.contains('Search')
        cy.wait(200);
        cy.contains('Reference').should('have.attr','href','/versions/latest');
        cy.wait(200);
        cy.contains('Learn').should('have.attr','href','/tutorial/introduction');
        cy.wait(200);
        cy.contains('Get started').should('be.visible');
        cy.wait(200);
        cy.contains('Installation').should('have.attr','href','/get-started/installation');
        cy.wait(200);
        cy.contains('Expo Go').should('have.attr','href','/get-started/expo-go');
        cy.wait(200);
        cy.contains('Create a project').should('have.attr','href','/get-started/create-a-project');
        cy.wait(200);
    });
});