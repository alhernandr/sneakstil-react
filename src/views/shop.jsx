/**
 * @fileoverview Componente de React para la página de tienda.
 * @module Shop
 * @requires React
 * @requires axios
 * @requires Header
 * @requires Footer
 * @requires styles
 */

import { Link } from "react-router-dom";
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import styles from '../css/styles.module.css';
import jordan1 from '../img/Jordan 1 Retro High OG SP Travis Scott Mocha.png'
import jordan2 from '../img/Jordan 4 Retro Military Black.png'
import jordan3 from '../img/air-jordan-3-retro-sp-j-balvin-removebg-preview.png'
import jordan4 from '../img/Jordan 4 Retro Canyon Purple.png'
import jordan5 from '../img/Jordan 4 Frozen Moments.png'
import jordan6 from '../img/Jordan 11 Retro Midnight Navy.png'
import jordan7 from '../img/Jordan 1 Mid SE Fearless Melody Ehsani.png'
import jordan8 from '../img/Jordan 1 Retro High OG Palomino.png'
import jordan9 from '../img/Nike SB Dunk Low Concepts Purple Lobster.png'
import jordan10 from '../img/Adidas Yeezy Foam RNR Onyx.png'
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
            <img src={jordan1} alt="" className={styles.sneaker__img} />
            <span className={styles.sneaker__name}>Jordan 1 Retro High OG SP Travis Scott Mocha</span>
            <span className={styles.sneaker__precio}>1.366€</span>
            <button className={styles.buttonLight} onClick={() => addToBasket({ id: 1, nombre: 'Jordan 1 Retro High OG SP Travis Scott Mocha', precio: 1366 })}>Add to basket <i className="bx bx-right-arrow-alt button-icon"></i></button>
          </article>
          
          <article className={styles.sneaker}>
            <img src={jordan2} alt="" className={styles.sneaker__img} />
            <span className={styles.sneaker__name}>Jordan 4 Retro Military Black</span>
            <span className={styles.sneaker__precio}>546€</span>
            <button className={styles.buttonLight} onClick={() => addToBasket({ id: 2, nombre: 'Jordan 4 Retro Military Black', precio: 546 })}>Add to basket <i className="bx bx-right-arrow-alt button-icon"></i></button>
          </article>

          <article className={styles.sneaker}>
            <img src={jordan3} alt="" className={styles.sneaker__img} />
            <span className={styles.sneaker__name}>Jordan 3 Retro SP J Balvin Medellín Sunset</span>
            <span className={styles.sneaker__precio}>582€</span>
            <button className={styles.buttonLight} onClick={() => addToBasket({ id: 3, nombre: 'Jordan 3 Retro SP J Balvin Medellín Sunset', precio: 582 })}>Add to basket <i className="bx bx-right-arrow-alt button-icon"></i></button>
          </article>

          <article className={styles.sneaker}>
            <img src={jordan4} alt="" className={styles.sneaker__imgCanyon} />
            <span className={styles.sneaker__nameCan}>Jordan 4 Retro Canyon Purple</span>
            <span className={styles.sneaker__precio}>289€</span>
            <button className={styles.buttonLight} onClick={() => addToBasket({ id: 4, nombre: 'Jordan 4 Retro Canyon Purple', precio: 289 })}>Add to basket <i className="bx bx-right-arrow-alt button-icon"></i></button>
          </article>

          <article className={styles.sneaker}>
            <img src={jordan5} alt="" className={styles.sneaker__imgFrozen} />
            <span className={styles.sneaker__nameFrzn}>Jordan 4 Retro Frozen Moments</span>
            <span className={styles.sneaker__precio}>284€</span>
            <button className={styles.buttonLight} onClick={() => addToBasket({ id: 5, nombre: 'Jordan 4 Frozen Moments', precio: 284 })}>Add to basket <i className="bx bx-right-arrow-alt button-icon"></i></button>
          </article>
        </div>
        
        <div className={`${styles.sneaker__pages} ${styles.bdGrid}`}>
          <div>
            <span className={styles.sneaker__pag}>1</span>
            <Link to="/shop2" className={styles.sneaker__pag}>2</Link>
            <Link to="/shop3" className={styles.sneaker__pag}>3</Link>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Shop;
