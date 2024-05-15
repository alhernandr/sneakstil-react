/**
 * @fileoverview Componente de React para la página de tienda.
 * @module Shop
 * @requires React
 * @requires axios
 * @requires Header
 * @requires Footer
 * @requires styles
 */

import React,{useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import styles from '../css/styles.module.css';
import dunk01 from '../img/dunk01.png'
import airforce1 from '../img/airforce1.png'
import airforce2 from '../img/descarga.png'
import redd from '../img/redd.png'
import bonner from '../img/bonner.png'
import jordan11 from '../img/Jordan 1 Retro Low OG SP Fragment x Travis Scott.png'

/**
 * Componente funcional que representa la página de tienda.
 * @function Shop
 * @returns {JSX.Element} Elemento JSX que representa la página de tienda.
 */
const Shop = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  const [basketProducts, setBasketProducts] = useState([]);
  const addToBasket = async (product) => {
    if (!isLoggedIn) {
      alert('Debes iniciar sesión para agregar productos a la cesta.');
      return;
    }
  
    const productsFromCookie = Cookies.get("basketProducts");
    let updatedBasket = [];
    if (productsFromCookie) {
      updatedBasket = JSON.parse(productsFromCookie);
    }
  
    updatedBasket.push(product);
  
    setBasketProducts(updatedBasket);
  
    Cookies.set('basketProducts', JSON.stringify(updatedBasket));
  
    alert('Producto agregado a la cesta.');
  };
  
  return (
    <div>
      <Header/>
      {/* <!--===== ALL PRODUCTS =====--> */}
      <section className={`${styles.featured} ${styles.section}`} id="shop">
        <h2 className={styles.section__title}>All Products</h2>

        <div className={`${styles.featured__container} ${styles.bdGrid}`}>
          <article className={styles.sneaker}>
            <img src={dunk01} alt="" className={styles.sneaker__img} id="trvis" />
            <span className={styles.sneaker__name} id="trvis">Nike SB Dunk Low Futura Laboratories Bleached Aqua</span>
            <span className={styles.sneaker__precio}>555€</span>
            <button className={styles.buttonLight} onClick={() => addToBasket({ id: 11, nombre: 'Nike SB Dunk Low Futura Laboratories Bleached Aqua', precio: 555 })}>Add to basket <i className="bx bx-right-arrow-alt button-icon"></i></button>
          </article>
          <article className={styles.sneaker}>
            <img src={airforce1} alt="" className={styles.sneaker__imgAirforce} id="trvis" />
            <span className={styles.sneaker__nameAirforce} id="trvis">Nike Air Force 1 Low Supreme</span>
            <span className={styles.sneaker__precio}>149€</span>
            <button className={styles.buttonLight} onClick={() => addToBasket({ id: 12, nombre: 'Nike Air Force 1 Low Supreme', precio: 149 })}>Add to basket <i className="bx bx-right-arrow-alt button-icon"></i></button>
          </article>
          <article className={styles.sneaker}>
            <img src={airforce2} alt="" className={styles.sneaker__imgCactus} id="trvis" />
            <span className={styles.sneaker__nameCactus} id="trvis">Nike Air Force 1 Low Cactus Plant Flea Market Black (2024)</span>
            <span className={styles.sneaker__precio}>322€</span>
            <button className={styles.buttonLight} onClick={() => addToBasket({ id: 13, nombre: 'Nike Air Force 1 Low Cactus Plant Flea Market Black (2024)', precio: 322 })}>Add to basket <i className="bx bx-right-arrow-alt button-icon"></i></button>
          </article>
          <article className={styles.sneaker}>
            <img src={redd} alt="" className={styles.sneaker__imgredd} id="trvis" />
            <span className={styles.sneaker__nameredd} id="trvis">Nike Air Yeezy 2 Red October</span>
            <span className={styles.sneaker__precio}>20.012€</span>
            <button className={styles.buttonLight} onClick={() => addToBasket({ id: 14, nombre: 'Nike Air Yeezy 2 Red October', precio: 20.012 })}>Add to basket <i className="bx bx-right-arrow-alt button-icon"></i></button>
          </article>
          <article className={styles.sneaker}>
            <img src={bonner} alt="" className={styles.sneaker__imgbonner} id="trvis" />
            <span className={styles.sneaker__namebonner} id="trvis">adidas Samba Pony Tonal Wales Bonner</span>
            <span className={styles.sneaker__precio}>470€</span>
            <button className={styles.buttonLight} onClick={() => addToBasket({ id: 15, nombre: 'adidas Samba Pony Tonal Wales Bonner', precio: 470 })}>Add to basket <i className="bx bx-right-arrow-alt button-icon"></i></button>
          </article>
        </div>
        
        <div className={`${styles.sneaker__pages} ${styles.bdGrid}`}>
          <div>
            <Link to="/shop" className={styles.sneaker__pag}>1</Link>
            <Link to="/shop2" className={styles.sneaker__pag}>2</Link>
            <span className={styles.sneaker__pag}>3</span>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Shop;
