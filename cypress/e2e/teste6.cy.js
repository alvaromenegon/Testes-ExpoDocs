/// <reference types="cypress" />

describe('Teste 6', () => {
    it('itens possuem links corretos no menu de referência', () => {
        cy.contains('Reference').click();
        cy.wait(100);
        cy.url().should('include', '/versions/latest/');
        cy.wait(100);
        cy.contains('Expo SDK');
        cy.wait(100);
        cy.contains('AsyncStorage').should('have.attr', 'href', '/versions/latest/sdk/async-storage/');
        cy.wait(100);
        cy.contains('Camera').should('have.attr', 'href', '/versions/latest/sdk/camera/');
        cy.wait(100);
        cy.contains('Constants').should('have.attr', 'href', '/versions/latest/sdk/constants/');
        cy.wait(100);
        cy.contains('Checkbox').should('have.attr', 'href', '/versions/latest/sdk/checkbox/');
        cy.wait(100);
        cy.contains('Notifications').should('have.attr', 'href', '/versions/latest/sdk/notifications/');
        cy.wait(100);
        cy.contains('Expo CLI').should('have.attr', 'href', '/more/expo-cli/');
        cy.wait(100);
        cy.contains('Visit documentation').should('have.attr', 'href', 'https://reactnative.dev/docs/components-and-apis');
    });
});