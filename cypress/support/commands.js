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

Cypress.Commands.add('crearSneaker', (username, marca, imagen, precio, disponibilidad) => {
  cy.loginAdmin('lionel', 'admin');

  cy.url().should('include', '/admin');

  cy.get('[data-cy=crearSneaker]').click();

  cy.visit('http://localhost:3000/admin/crear');

  cy.get('[data-cy=usernameSneaker]').type(username);
  cy.get('[data-cy=marcaSneaker]').type(marca);
  cy.get('[data-cy=precioSneaker]').type(precio);
  cy.get('[data-cy=disponibilidadSneaker]').type(disponibilidad);
  cy.get('[data-cy=vendedorSneaker]').select('1');
  cy.get('[data-cy=crearSneaker]').click();
});

Cypress.Commands.add('actualizarSneaker', (username, marca, imagen, precio, disponibilidad) => {
  cy.loginAdmin('lionel', 'admin');

  cy.url().should('include', '/admin');

  cy.get('[data-cy=crearSneaker]').click();

  cy.visit('http://localhost:3000/admin/actualizar');

  cy.get('[data-cy=usernameSneaker]').type(username);
  cy.get('[data-cy=marcaSneaker]').type(marca);
  cy.get('[data-cy=precioSneaker]').type(precio);
  cy.get('[data-cy=disponibilidadSneaker]').type(disponibilidad);
  cy.get('[data-cy=vendedorSneaker]').select('1');
  cy.get('[data-cy=crearSneaker]').click();
});

Cypress.Commands.add('compraSneakers', () => {
  cy.login('jaun', '12345');

  cy.url().should('include', '/');

  cy.get('[data-cy=shop]').click();

  cy.url().should('include', '/shop');

  cy.get('[data-cy=compraCanyonn]').click();

  cy.get('[data-cy=compraFrozen]').click();

  cy.get('[data-cy=shop2]').click();

  cy.get('[data-cy=compraDior]').click();

  cy.get('[data-cy=compraTravis]').click();

  cy.get('[data-cy=shop3]').click();

  cy.get('[data-cy=compraAirforce]').click();

  cy.get('[data-cy=compraBonnes]').click();

  cy.visit('http://localhost:3000/basket');
});