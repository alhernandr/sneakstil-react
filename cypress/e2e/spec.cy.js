import '../support/commands'

describe('template spec', () => {
  const shop = () => cy.visit('http://localhost:3000/shop');
  const basket = () => cy.visit('http://localhost:3000/basket');
  const login = () => cy.visit('http://localhost:3000/login');
  const signin = () => cy.visit('http://localhost:3000/login/signin');
  const home = () => cy.visit('http://localhost:3000/home');

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('should visit shop', () => {
    cy.get('[data-cy=shop]').click();
    shop();
    cy.url().should('include', '/shop');
  });

  it('should visit basket', () => {
    cy.get('[data-cy=basket]').click();
    basket();
    cy.url().should('include', '/basket');
  });

  it('should visit login', () => {
    cy.get('[data-cy=login]').click();
    login();
    cy.url().should('include', '/login');
  });

  it('should visit register', () => {
    cy.get('[data-cy=login]').click();
    signin();
    cy.url().should('include', '/login/signin');
  });

  it('should visit home', () => {
    cy.get('[data-cy=home]').click();
    home();
    cy.url().should('include', '/home');
  });
  
  // SE COMENTA PARA NO LLENAR LA BD DEL MISMO USUARIO (FUNCIONA)
  // it('should user register', () => {
  //   cy.register('jaun', 'jaun@gmail.com', '12345')
  // });

  it('should Admin login', () => {
    cy.loginAdmin('lionel', 'admin');

    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Inicio de sesión exitoso');
    });

    cy.url().should('include', '/admin');
  });

  it('should user login', () => {
    cy.login('jaun', '12345');

    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Inicio de sesión exitoso');
    });

    cy.url().should('include', '/');
  });
})