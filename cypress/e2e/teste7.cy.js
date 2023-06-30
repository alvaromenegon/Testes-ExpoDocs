/// <reference types="cypress" />
import credential from '../fixtures/credential.json';

describe('Teste 7', () => {
    it('Fluxo de acesso ao EAS', () => {
        cy.contains('Guides').click();
        cy.wait(50);
        cy.url().should('include', '/workflow/customizing');
        cy.wait(50);
        cy.contains('Introduction').click();
        cy.wait(50);
        cy.url().should('include', '/eas');
        cy.contains('Read the full pitch at expo.dev/eas, or follow the links below to learn how to get started.');
        cy.wait(50);
        cy.contains('expo.dev/eas').should('have.attr', 'href', 'https://expo.dev/eas');
        cy.wait(100);
        cy.visit('https://expo.dev/eas');
        cy.wait(50);
        cy.contains('Learn More').should('have.attr', 'href', '/pricing').click();
        cy.wait(100);
        cy.url().should('equal', 'https://expo.dev/pricing');
        cy.contains('Incredible apps.');
        cy.wait(50);
        cy.contains('Pricing to match.');
        cy.wait(50);
        cy.contains('Get Started').should('have.attr', 'href', '/signup?redirect_uri=/accounts/[account]/settings/billing').click();
        cy.wait(200);
        cy.url().should('include', '/signup?redirect_uri=/accounts/[account]/settings/billing');
        cy.contains('Log in').should('have.attr', 'href', '/login?redirect_uri=%2Faccounts%2F%5Baccount%5D%2Fsettings%2Fbilling').click();
        cy.wait(200);
        cy.url().should('include', '/login?redirect_uri=%2Faccounts%2F%5Baccount%5D%2Fsettings%2Fbilling');
        cy.contains('Log in to Expo');
        cy.wait(50);
        cy.get('input[id=usernameOrEmail]').type(credential.username);
        cy.wait(50);
        cy.get('input[id=password]').type(credential.password);
        cy.get('button[type=submit]').click();
        cy.wait(200);
        cy.url().should('include', '/accounts/[account]/settings/billing');
        cy.wait(50);
        cy.contains('Visit Link').click();
        cy.wait(100);
        cy.url().should('include', '/accounts/'+credential.username+'/settings/billing');
        cy.wait(50);
        cy.contains('EAS subscribers ship faster.');
        cy.wait(50);
        cy.contains('EAS Production');
        cy.wait(50);
        cy.contains('EAS Enterprise');
        cy.wait(50);
        cy.contains('Upgrade').scrollIntoView();
        cy.contains('Upgrade').should('have.attr', 'href', '/accounts/'+credential.username+'/settings/billing/cart?plan=production').click()

        cy.wait(200);
        cy.url().should('include', '/accounts/'+credential.username+'/settings/billing/cart?plan=production');
        cy.wait(50);
        cy.contains('On-demand plan');
        cy.wait(50);
        cy.contains('Production plan');
        cy.wait(50);
        cy.contains('Enterprise plan');
        cy.wait(50);
        cy.contains('$99/month').should('have.class', 'border-success').should('have.class','bg-success').should('have.class','text-success');
        cy.contains('$99/month').children().last().children().first().should('have.id','check-circle');
        cy.wait(50);
        cy.contains('$999/month').should('not.have.class', 'border-success');
        cy.wait(50);
        cy.contains('Continue to Review').click();
        cy.wait(200);
        cy.url().should('include', '/accounts/'+credential.username+'/settings/billing/cart?plan=production');
        cy.wait(50);
        cy.contains('Review');
        cy.contains('Subscription changes');
        cy.contains('Production plan');
        cy.contains('$99/month');
        cy.get('input[id=confirm-account]').check();
        cy.wait(50);
        cy.contains('Continue to Checkout').click().end()
        //Site redireciona para o checkout, e o teste não consegue prosseguir
    });
});