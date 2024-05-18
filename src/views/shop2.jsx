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
import Cookies from 'js-cookie';
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import styles from '../css/styles.module.css';
import jordan6 from '../img/Jordan 11 Retro Midnight Navy.png'
import jordan7 from '../img/Jordan 1 Mid SE Fearless Melody Ehsani.png'
import jordan8 from '../img/Jordan 1 Retro High OG Palomino.png'
import jordanDior from '../img/dior.png'
import travis from '../img/travis.png'

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
            <img src={jordan6} alt="" className={styles.sneaker__img} />
            <span className={styles.sneaker__name}>Jordan 11 Retro Midnight Navy</span>
            <span className={styles.sneaker__precio}>120€</span>
            <button className={styles.buttonLight} onClick={() => addToBasket({ id: 6, nombre: 'Jordan 11 Retro Midnight Navy', precio: 120 })}>Add to basket <i className="bx bx-right-arrow-alt button-icon"></i></button>
          </article>

          <article className={styles.sneaker}>
            <img src={jordan7} alt="" className={styles.sneaker__img} />
            <span className={styles.sneaker__name}>Jordan 1 Mid SE Fearless Melody Ehsani</span>
            <span className={styles.sneaker__precio}>885€</span>
            <button className={styles.buttonLight} onClick={() => addToBasket({ id: 7, nombre: 'Jordan 1 Mid SE Fearless Melody Ehsani', precio: 885 })}>Add to basket <i className="bx bx-right-arrow-alt button-icon"></i></button>
          </article>

          <article className={styles.sneaker}>
            <img src={jordan8} alt="" className={styles.sneaker__img} />
            <span className={styles.sneaker__name}>Jordan 1 Retro High OG Palomino</span>
            <span className={styles.sneaker__precio}>171€</span>
            <button className={styles.buttonLight} onClick={() => addToBasket({ id: 8, nombre: 'Jordan 1 Retro High OG Palomino', precio: 171 })}>Add to basket <i className="bx bx-right-arrow-alt button-icon"></i></button>
          </article>

          <article className={styles.sneaker}>
            <img src={jordanDior} alt="" className={styles.sneaker__img} id="dnk" />
            <span className={styles.sneaker__nameDior} id="dnk-text">Jordan 1 Retro High Dior</span>
            <span className={styles.sneaker__precio}>5.258€</span>
            <button data-cy="compraDior" className={styles.buttonLight} onClick={() => addToBasket({ id: 9, nombre: 'Jordan 1 Retro High Dior', precio: 5258 })}>Add to basket <i className="bx bx-right-arrow-alt button-icon"></i></button>
          </article>

          <article className={styles.sneaker}>
            <img src={travis} alt="" className={styles.sneaker__imgTravis} id="onyx"/>
            <span className={styles.sneaker__nameTravis} id="onyx-text">Jordan Jumpman Jack TR Travis Scott Sail</span>
            <span className={styles.sneaker__precio}>790€</span>
            <button data-cy="compraTravis" className={styles.buttonLight} onClick={() => addToBasket({ id: 10, nombre: 'Jordan Jumpman Jack TR Travis Scott Sail', precio: 790})}>Add to basket <i className="bx bx-right-arrow-alt button-icon"></i></button>
          </article>
        </div>
        
        <div className={`${styles.sneaker__pages} ${styles.bdGrid}`}>
          <div>
            <Link to="/shop" className={styles.sneaker__pag}>1</Link>
            <span className={styles.sneaker__pag}>2</span>
            <Link data-cy="shop3" to="/shop3" className={styles.sneaker__pag}>3</Link>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Shop;
