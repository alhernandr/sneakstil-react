import React from 'react';
import { Link } from 'react-router-dom'
import axios from "axios";

import Header from '../components/header/header'
import Footer from '../components/footer/footer'

import styles from '../css/styles.module.css';
import jordan1 from '../img/Jordan 1 Retro High OG SP Travis Scott Mocha.png'
import jordan2 from '../img/Jordan 4 Retro Military Black.png'
import jordan3 from '../img/Jordan 3 Retro SP A Ma Maniére.png'
import jordan4 from '../img/Jordan 4 Retro Canyon Purple.png'
import jordan5 from '../img/Jordan 4 Frozen Moments.png'
import jordan6 from '../img/Jordan 11 Retro Midnight Navy.png'
import jordan7 from '../img/Jordan 1 Mid SE Fearless Melody Ehsani.png'
import jordan8 from '../img/Jordan 1 Retro High OG Palomino.png'
import jordan9 from '../img/Nike SB Dunk Low Concepts Purple Lobster.png'
import jordan10 from '../img/Adidas Yeezy Foam RNR Onyx.png'
import jordan11 from '../img/Jordan 1 Retro Low OG SP Fragment x Travis Scott.png'

const Shop = () => {
  const addToBasket = async (nombre, marca, precio, disponibilidad) => {
    try {
      await axios.post('http://localhost:5000/insertar-datos-cesta', {
        nombre,
        marca,
        precio,
        disponibilidad,
      });
      alert('Producto añadido a la cesta correctamente');
    } catch (error) {
      console.error('Error al añadir producto a la cesta: ', error);
      alert('Error al añadir producto a la cesta');
    }
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
            <button className={styles.buttonLight} onClick={() => addToBasket('Jordan 1 Retro High OG SP Travis Scott Mocha', 'Jordan', 1366, true)}>Add to basket <i className="bx bx-right-arrow-alt button-icon"></i></button>
          </article>
          
          <article className={styles.sneaker}>
            <img src={jordan2} alt="" className={styles.sneaker__img} />
            <span className={styles.sneaker__name}>Jordan 4 Retro Military Black</span>
            <span className={styles.sneaker__precio}>546€</span>
            <button className={styles.buttonLight} onClick={() => addToBasket('Jordan 4 Retro Military Black', 'Jordan', 546, true)}>Add to basket <i className="bx bx-right-arrow-alt button-icon"></i></button>
          </article>

          <article className={styles.sneaker}>
            <img src={jordan3} alt="" className={styles.sneaker__img} />
            <span className={styles.sneaker__name}>Jordan 3 Retro SP A Ma Maniére</span>
            <span className={styles.sneaker__precio}>461€</span>
            <button className={styles.buttonLight} onClick={() => addToBasket('Jordan 3 Retro SP A Ma Maniére', 'Jordan', 461, true)}>Add to basket <i className="bx bx-right-arrow-alt button-icon"></i></button>
          </article>

          <article className={styles.sneaker}>
            <img src={jordan4} alt="" className={styles.sneaker__img} />
            <span className={styles.sneaker__name}>Jordan 4 Retro Canyon Purple</span>
            <span className={styles.sneaker__precio}>289€</span>
            <button className={styles.buttonLight} onClick={() => addToBasket('Jordan 4 Retro Canyon Purple', 'Jordan', 289, true)}>Add to basket <i className="bx bx-right-arrow-alt button-icon"></i></button>
          </article>

          <article className={styles.sneaker}>
            <img src={jordan5} alt="" className={styles.sneaker__img} />
            <span className={styles.sneaker__name}>Jordan 4 Frozen Moments</span>
            <span className={styles.sneaker__precio}>284€</span>
            <button className={styles.buttonLight} onClick={() => addToBasket('Jordan 4 Frozen Moments', 'Jordan', 284, true)}>Add to basket <i className="bx bx-right-arrow-alt button-icon"></i></button>
          </article>

          <article className={styles.sneaker}>
            <img src={jordan6} alt="" className={styles.sneaker__img} />
            <span className={styles.sneaker__name}>Jordan 11 Retro Midnight Navy</span>
            <span className={styles.sneaker__precio}>120€</span>
            <button className={styles.buttonLight} onClick={() => addToBasket('Jordan 11 Retro Midnight Navy', 'Jordan', 120, true)}>Add to basket <i className="bx bx-right-arrow-alt button-icon"></i></button>
          </article>

          <article className={styles.sneaker}>
            <img src={jordan7} alt="" className={styles.sneaker__img} />
            <span className={styles.sneaker__name}>Jordan 1 Mid SE Fearless Melody Ehsani</span>
            <span className={styles.sneaker__precio}>885€</span>
            <button className={styles.buttonLight} onClick={() => addToBasket('Jordan 1 Mid SE Fearless Melody Ehsani', 'Jordan', 885, true)}>Add to basket <i className="bx bx-right-arrow-alt button-icon"></i></button>
          </article>

          <article className={styles.sneaker}>
            <img src={jordan8} alt="" className={styles.sneaker__img} />
            <span className={styles.sneaker__name}>Jordan 1 Retro High OG Palomino</span>
            <span className={styles.sneaker__precio}>171€</span>
            <button className={styles.buttonLight} onClick={() => addToBasket('Jordan 1 Retro High OG Palomino', 'Jordan', 171, true)}>Add to basket <i className="bx bx-right-arrow-alt button-icon"></i></button>
          </article>

          <article className={styles.sneaker}>
            <img src={jordan9} alt="" className={styles.sneaker__img} id="dnk" />
            <span className={styles.sneaker__name} id="dnk-text">Nike SB Dunk Low Concepts Purple Lobster</span>
            <span className={styles.sneaker__precio}>982€</span>
            <button className={styles.buttonLight} onClick={() => addToBasket('Nike SB Dunk Low Concepts Purple Lobster', 'Nike', 982, true)}>Add to basket <i className="bx bx-right-arrow-alt button-icon"></i></button>
          </article>

          <article className={styles.sneaker}>
            <img src={jordan10} alt="" className={styles.sneaker__img} id="onyx"/>
            <span className={styles.sneaker__name} id="onyx-text">adidas Yeezy Foam RNR Onyx</span>
            <span className={styles.sneaker__precio}>114€</span>
            <button className={styles.buttonLight} onClick={() => addToBasket('adidas Yeezy Foam RNR Onyx', 'Adidas', 114, true)}>Add to basket <i className="bx bx-right-arrow-alt button-icon"></i></button>
          </article>

          <article className={styles.sneaker}>
            <img src={jordan11} alt="" className={styles.sneaker__img} id="trvis" />
            <span className={styles.sneaker__name} id="trvis">Jordan 1 Retro Low OG SP Fragment x Travis Scott</span>
            <span className={styles.sneaker__precio}>1.444€</span>
            <button className={styles.buttonLight} onClick={() => addToBasket('Jordan 1 Retro Low OG SP Fragment x Travis Scott', 'Jordan', 1444, true)}>Add to basket <i className="bx bx-right-arrow-alt button-icon"></i></button>
          </article>
        </div>
        
        {/* <!--Paginador sin funcionamiento por le momento--> */}
        <div className={`${styles.sneakerPages} ${styles.bdGrid}`}>
          <div>
            <span className={styles.sneakerPag}>1</span>
            <span className={styles.sneakerPag}>2</span>
            <span className={styles.sneakerPag}>3</span>
            <span className={styles.sneakerPag}>4</span>
            <span className={styles.sneakerPag}>➔</span>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Shop;
