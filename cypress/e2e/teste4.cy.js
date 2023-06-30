/// <reference types="cypress" />

describe('Teste 3', () => {
    it('navegação entre as páginas é feita corretamente', () => { 
        cy.contains('Guides').click();
        cy.wait(200);
        cy.url().should('include', '/workflow/customizing/');
        cy.wait(200);
        cy.contains('Reference').click();
        cy.wait(200);
        cy.url().should('include', '/versions/latest/');
        cy.wait(200);
        cy.contains('Learn').click();
        cy.wait(200);
        cy.url().should('include', '/tutorial/introduction/');
        cy.wait(200);
        cy.contains('Create your first app').click();
        cy.wait(200);
        cy.url().should('include', 'tutorial/create-your-first-app/');
        cy.wait(200);
        cy.contains('Build a screen').click();
        cy.wait(200);
        cy.url().should('include', '/tutorial/build-a-screen/');
        cy.wait(200);
        cy.contains('Learn more' ).click();
        cy.wait(200);
        cy.url().should('include', '/tutorial/follow-up/');
        cy.wait(200);
        cy.contains('Docs').click();
        cy.wait(200);
        cy.url().should('equal', 'https://docs.expo.dev/');
        cy.wait(200);
        cy.contains('Installation').click();
        cy.wait(200);
        cy.url().should('include', '/get-started/installation/');
        cy.wait(200);
        cy.contains('Expo Go').click();
        cy.wait(200);
        cy.url().should('include', '/get-started/expo-go/');
        cy.wait(200);
        cy.contains('Create a project').click();
        cy.wait(200);
        cy.url().should('include', '/get-started/create-a-project/');
        cy.wait(200);
    });
});