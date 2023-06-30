/// <reference types="cypress" />

describe('Teste 5', () => {
    it('pesquisa é feita corretamente', () => {
        cy.contains('Search').click();
        cy.get('input[type=text]').type('mapview');
        cy.wait(100,{ log: false });
        cy.get('div[role=listbox]').should('be.visible');
        cy.wait(50,{ log: false });
        cy.get('div').contains('Expo documentation')
        cy.wait(50);
        cy.contains('Usage').click({force: true});
        cy.wait(100);
        cy.url().should('include', '/versions/latest/sdk/map-view/');
        cy.wait(100);
        cy.contains('Search').click();
        cy.get('input[type=text]').type('image');
        cy.wait(100,{ log: false });
        cy.get('div[role=listbox]').should('be.visible');
        cy.wait(100,{ log: false });
        cy.contains('Image').click({force:true});
        cy.wait(200);
        cy.url().should('include', '/versions/latest/sdk/image/');
    });
});