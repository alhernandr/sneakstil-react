import React from "react";
import { Link } from "react-router-dom";
import styles from "../../css/styles.module.css";
import logo from "../../img/logo.png";

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <header className={styles.lHeader} id="header">
        <nav className={styles.nav}>
          <div className={styles.nav__toggled} id="nav-toggle">
            <i className="bx bxs-grid"></i>
          </div>
          <Link to="/" className={styles.nav__logo} onClick={() => scrollToSection('home')}>
            <img className={styles.logo} src={logo} alt="" />
          </Link>
          <div className={styles.nav__menu} id="nav-menu">
            <ul className={styles.nav__list}>
              <li className={styles.nav__item}>
                <Link to="/" className={styles.nav__link}>
                  Home
                </Link>
              </li>
              <li className={styles.nav__item}>
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
              </li>
              <li className={styles.nav__item}>
                <Link to="/shop" className={styles.navLink}>
                  Shop
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