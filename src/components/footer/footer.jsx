import React from "react";
import { Link } from "react-router-dom";
import styles from "../../css/styles.module.css"; // Asegúrate de que la ruta sea correcta

import logo from "../../img/logo.png"
const Footer = () => {
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  return (
    <div>
      <section className={`${styles.footer} ${styles.section}`}>
        <div className={`${styles.footer__container} ${styles.bdGrid}`}>
          <div className={styles.footer__box}>
            <h3 className={styles.footer__title}>SneakStil</h3>
            <Link to="/" className={styles.nav__logo}>
              <img
                className={styles.logo}
                src={logo}
                alt=""
                id="footer_logo"
              />
            </Link>
            <p className={styles.footer__description}>
              New collection of shoes 2023
            </p>
          </div>

          <div className={styles.footer__box}>
            <h3 className={styles.footer__title}>EXPLORE</h3>

            <ul>
              <li>
                <Link to="/" className={styles.footer__link}>
                  Home
                </Link>
              </li>
              <li className={styles.footer__link}>
                <Link to="/#" onClick={() => scrollToSection('featured')}>
                  Featured
                </Link>
              </li>
              <li className={styles.footer__link}>
                <Link to="/#" onClick={() => scrollToSection('women')}>
                  Women
                </Link>
              </li>
              <li className={styles.footer__link}>
                <Link to="/#" onClick={() => scrollToSection('new')}>
                  New
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.footer__box}>
            <h3 className={styles.footer__title}>SUPPORT</h3>

            <ul>
              <li>
                <Link to="/product-help" className={styles.footer__link}>
                  Product Help
                </Link>
              </li>
              <li>
                <Link to="/customer-care" className={styles.footer__link}>
                  Customer Care
                </Link>
              </li>
              <li>
                <Link to="/authorized-service" className={styles.footer__link}>
                  Authorized Service
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer__box}>
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer__social}
            >
              <i className="bx bxl-facebook"></i>
            </Link>
            <Link
              to="https://www.instagram.com/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer__social}
            >
              <i className="bx bxl-instagram"></i>
            </Link>
            <Link
              to="https://twitter.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer__social}
            >
              <i className="bx bxl-twitter"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
