import '../support/commands'

describe('template spec', () => {
  const shop = () => cy.visit('http://localhost:3000/shop');
  const basket = () => cy.visit('http://localhost:3000/basket');
  const login = () => cy.visit('http://localhost:3000/login');
  const signin = () => cy.visit('http://localhost:3000/login/signin');
  const home = () => cy.visit('http://localhost:3000/home');
  const top = () => cy.scrollTo('top');

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('Debe visitar la shop', () => {
    top();
    cy.get('[data-cy=shop]').click();
    shop();
    cy.url().should('include', '/shop');
  });

  it('Debe visitar la cesta de la compra', () => {
    top();
    cy.get('[data-cy=basket]').click();
    basket();
    cy.url().should('include', '/basket');
  });

  it('Debe visitar el login', () => {
    top();
    cy.get('[data-cy=login]').click();
    login();
    cy.url().should('include', '/login');
  });

  it('Debe visitar el register', () => {
    top();
    cy.get('[data-cy=login]').click();
    signin();
    cy.url().should('include', '/login/signin');
  });

  it('Debe visitar el home', () => {
    top();
    cy.get('[data-cy=home]').click();
    home();
    cy.url().should('include', '/home');
  });
  
   it('Debe registrarse un usuario', () => {
    top();
    cy.register('jaun', 'jaun@gmail.com', '12345')
   });

  it('Debe iniciar sesion un admin', () => {
    top();
    cy.loginAdmin('lionel', 'admin');

    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Inicio de sesión exitoso');
    });

    cy.url().should('include', '/admin');
  });

  it('Debe iniciar sesion un usuario', () => {
    top();
    cy.login('jaun', '12345');

    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Inicio de sesión exitoso');
    });

    cy.url().should('include', '/');
  });

  it ('Debe crear un sneaker',() => {
    top();
    cy.crearSneaker('Jordan 4 Retro Bred Reimagined', 'Nike Jordan', 'C:\Users\Admin\sneakstil-react\src\img\jordan4.jpg', '242', '10')
  });

  it ('Debe actualizar un sneaker',() => {
    top();
    cy.crearSneaker('Jordan 4 Retro Bred Reimagined', 'Nike Jordan', 'C:\Users\Admin\sneakstil-react\src\img\jordan4.jpg', '242', '6')
  });

  it ('Debe eliminar un sneaker',() => {
    top();
    cy.loginAdmin('lionel', 'admin');

    cy.url().should('include', '/admin');

    cy.contains('tr', 'Jordan 4 Retro Bred Reimagined').within(() => {
      cy.get('[data-cy=eliminarSneaker]').click();
    });
  });

  it ('Debe añadir un sneaker a la cesta de la compra',() => {
    top();
    cy.login('jaun', '12345');

    cy.url().should('include', '/');

    cy.get('[data-cy=shop]').click();

    shop();

    cy.url().should('include', '/shop');

    cy.get('[data-cy=compraCanyonn]').click();
    cy.get('[data-cy=compraFrozen]').click();

    cy.get('[data-cy=shop2]').click();

    cy.get('[data-cy=compraDior]').click();
    cy.get('[data-cy=compraTravis]').click();

    cy.get('[data-cy=shop3]').click();

    cy.get('[data-cy=compraAirforce]').click();
    cy.get('[data-cy=compraBonnes]').click();

    basket();
  });

  it ('Debe hacer el pago un sneaker a la cesta de la compra',() => {
    top();
    cy.compraSneakers();

    cy.get('[data-cy=compraPago]').click();

    cy.get('[data-cy=compraNombre]').type('jaun');
    cy.get('[data-cy=compraCorreo]').type('jaun@gmail.com');
    cy.get('[data-cy=compraDireccion]').type('Pacuco Penichet');
    cy.get('[data-cy=compraCP]').type('35018');
    cy.get('[data-cy=compraTarjeta]').type('1234567891011');
    cy.get('[data-cy=compraVencimiento]').type('09/33');
    cy.get('[data-cy=compraCVV]').type('123');

    cy.get('[data-cy=compraPagar]').click();
  });
})