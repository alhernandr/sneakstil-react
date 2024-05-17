import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import logo from "../../img/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShop, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Cookies from 'js-cookie';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove('token');
    setIsLoggedIn(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <header className={styles.lHeader} id="header">
        <nav>
          <div className={styles.nav__logo}>
            <Link to="/" onClick={() => scrollToSection('home')}>
              <img className={styles.logoHome} src={logo} alt="" />
            </Link>
          </div>
          <div className={styles.nav__menu} id="nav-menu">
            <ul>
              <li >
                <Link to="/" data-cy="home">
                  <FontAwesomeIcon icon={faHome}/>
                </Link>
              </li>
              <li >
                <Link to="/shop" data-cy="shop">
                  <FontAwesomeIcon icon={faShop}/>
                </Link>
              </li>
                {isLoggedIn ? (
                <li>
                  <Link to="/login" onClick={handleLogout}>
                    LogOut
                  </Link>
                </li>
              ) : (
                <li>
                  <Link to="/login" data-cy="login">
                    <FontAwesomeIcon icon={faUser} />
                  </Link>
                </li>
              )}
              <li >
                <Link to="/basket" data-cy="basket">
                  <FontAwesomeIcon className={styles.carrito} icon={faShoppingCart} />
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.nav__shop}>
            <Link to="/basket">
              <i className="bx bx-shopping-bag"></i>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;