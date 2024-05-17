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

Cypress.Commands.add('loginAdmin', (email, password) => {
    cy.intercept('POST', 'http://localhost:5000/login', {
      statusCode: 200,
      body: {
        success: true,
        token: 'fakeToken123',
        message: 'Inicio de sesión como administrador exitoso'
      }
    }).as('loginRequest');

    cy.visit('http://localhost:3000/login');

    cy.get('[data-cy=email]').type(email);
    cy.get('[data-cy=password]').type(password);

    cy.get('[data-cy=logIn]').click();

    cy.wait('@loginRequest');
});

Cypress.Commands.add('login', (email, password) => {
    cy.intercept('POST', 'http://localhost:5000/login', {
      statusCode: 200,
      body: {
        success: true,
        token: 'fakeToken123',
        message: 'Inicio de sesión exitoso'
      }
    }).as('loginRequest');

    cy.visit('http://localhost:3000/login');

    cy.get('[data-cy=email]').type(email);
    cy.get('[data-cy=password]').type(password);

    cy.get('[data-cy=logIn]').click();

    cy.wait('@loginRequest');
});

Cypress.Commands.add('register', (username, email, password) => {
    cy.visit('http://localhost:3000/login/signin');

    cy.get('[data-cy=username]').type(username);
    cy.get('[data-cy=email]').type(email);
    cy.get('[data-cy=password]').type(password);

    cy.get('[data-cy=signIn]').click();
});