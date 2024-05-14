import React from "react";
import { Link } from "react-router-dom";
import styles from "../../css/styles.module.css";
import logo from "../../img/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShop, faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Cookies from 'js-cookie'; // Importa el paquete js-cookie

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogout = () => {
    Cookies.remove('token'); 
    Cookies.set("basketProducts", "");
  };

  const isLoggedIn = Cookies.get('token'); // Verifica si existe la cookie 'token'

  return (
    <div>
      <header className={styles.lHeader} id="header">
        <nav className={styles.nav}>
          <div className={styles.nav__toggled} id="nav-toggle">
            <i className="bx bxs-grid"></i>
          </div>
          <Link to="/" className={styles.nav__logo} onClick={() => scrollToSection('home')}>
            <img className={styles.logoHome} src={logo} alt="" />
          </Link>
          <div className={styles.nav__menu} id="nav-menu">
            <ul className={styles.nav__list}>
              <li className={styles.nav__item}>
                <Link to="/" className={styles.nav__link}>
                  <FontAwesomeIcon icon={faHome}/>
                </Link>
              </li>
              {/*<li className={styles.nav__item}>
                <Link to="/#" onClick={() => scrollToSection('featured')}>
                  Featured
                </Link>
              </li>
              <li className={styles.nav__item}>
                <Link to="/#" onClick={() => scrollToSection('women')}>
                  Women
                </Link>
              </li>
              <li className={styles.nav__item}>
                <Link to="/#" onClick={() => scrollToSection('new')}>
                  New
                </Link>
              </li>*/}
              <li className={styles.nav__item}>
                <Link to="/shop" className={styles.navLink}>
                  <FontAwesomeIcon icon={faShop}/>
                </Link>
              </li>
              {isLoggedIn ? ( // Si el usuario está autenticado, muestra el botón de "Logout"
                <li className={styles.nav__item}>
                  <Link to="/login" className={styles.navLink} onClick={handleLogout}>
                    LogOut
                  </Link>
                </li>
              ) : ( // Si el usuario no está autenticado, muestra el icono de usuario
                <li className={styles.nav__item}>
                  <Link to="/login" className={styles.navLink}>
                    <FontAwesomeIcon icon={faUser} />
                  </Link>
                </li>
              )}
              <li className={styles.nav__item}>
                <Link to="/basket" className={styles.navLink}>
                  <FontAwesomeIcon className={styles.carrito} icon={faShoppingCart} />
                </Link>
              </li>
            </ul>
          </div>

          <a href="/login"><i class="bx bx-user"></i></a>
        
          <div className={styles.nav__shop}>
            <Link to="/basket">
              <i  className="bx bx-shopping-bag"></i>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
