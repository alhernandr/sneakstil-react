import React from 'react';
import { Link } from 'react-router-dom'

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
  return (
    <div>
      {/* <!--===== ALL PRODUCTS =====--> */}
      <section className={`${styles.featured} ${styles.section} ${styles.shop}`} id="shop">
        <h2 className={styles.sectionTitle}>All Products</h2>

        <div className={`${styles.featuredContainer} ${styles.bdGrid}`}>
          <article className={`${styles.sneaker} ${styles.article}`}>
            <img src={jordan1} alt="" className={styles.sneakerImg} />
            <span className={styles.sneakerName}>Jordan 1 Retro High OG SP Travis Scott Mocha</span>
            <span className={styles.sneakerPrecio}>1.366€</span>
            <Link to="" className={styles.buttonLight}>Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i></Link>
          </article>
          
          <article className={`${styles.sneaker} ${styles.article}`}>
            <img src={jordan2} alt="" className={styles.sneakerImg} />
            <span className={styles.sneakerName}>Jordan 4 Retro Military Black</span>
            <span className={styles.sneakerPrecio}>546€</span>
            <Link to="" className={styles.buttonLight}>Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i></Link>
          </article>
          <article className={`${styles.sneaker} ${styles.article}`}>
            <img src={jordan3} alt="" className={styles.sneakerImg} />
            <span className={styles.sneakerName}>Jordan 3 Retro SP A Ma Maniére</span>
            <span className={styles.sneakerPrecio}>461€</span>
            <Link to="" className={styles.buttonLight}>Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i></Link>
          </article>
          <article className={`${styles.sneaker} ${styles.article}`}>
            <img src={jordan4} alt="" className={styles.sneakerImg} />
            <span className={styles.sneakerName}>Jordan 4 Retro Canyon Purple</span>
            <span className={styles.sneakerPrecio}>289€</span>
            <Link to="" className={styles.buttonLight}>Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i></Link>
          </article>
          <article className={`${styles.sneaker} ${styles.article}`}>
            <img src={jordan5} alt="" className={styles.sneakerImg} />
            <span className={styles.sneakerName}>Jordan 4 Frozen Moments</span>
            <span className={styles.sneakerPrecio}>284€</span>
            <Link to="" className={styles.buttonLight}>Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i></Link>
          </article>
          <article className={`${styles.sneaker} ${styles.article}`}>
            <img src={jordan6} alt="" className={styles.sneakerImg} />
            <span className={styles.sneakerName}>Jordan 11 Retro Midnight Navy</span>
            <span className={styles.sneakerPrecio}>120€</span>
            <Link to="" className={styles.buttonLight}>Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i></Link>
          </article>
          <article className={`${styles.sneaker} ${styles.article}`}>
            <img src={jordan7} alt="" className={styles.sneakerImg} />
            <span className={styles.sneakerName}>Jordan 1 Mid SE Fearless Melody Ehsani</span>
            <span className={styles.sneakerPrecio}>885€</span>
            <Link to="" className={styles.buttonLight}>Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i></Link>
          </article>
          <article className={`${styles.sneaker} ${styles.article}`}>
            <img src={jordan8} alt="" className={styles.sneakerImg} />
            <span className={styles.sneakerName}>Jordan 1 Retro High OG Palomino</span>
            <span className={styles.sneakerPrecio}>171€</span>
            <Link to="" className={styles.buttonLight}>Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i></Link>
          </article>
          <article className={`${styles.sneaker} ${styles.article}`}>
            <img src={jordan9} alt="" className={styles.sneakerImg} id="dnk" />
            <span className={styles.sneakerName} id="dnk-text">Nike SB Dunk Low Concepts Purple Lobster</span>
            <span className={styles.sneakerPrecio}>982€</span>
            <Link to="" className={styles.buttonLight}>Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i></Link>
          </article>
          <article className={`${styles.sneaker} ${styles.article}`}>
            <img src={jordan10} alt="" className={styles.sneakerImg} id="onyx"/>
            <span className={styles.sneakerName} id="onyx-text">adidas Yeezy Foam RNR Onyx</span>
            <span className={styles.sneakerPrecio}>114€</span>
            <Link to="" className={styles.buttonLight}>Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i></Link>
          </article>
          <article className={`${styles.sneaker} ${styles.article}`}>
            <img src={jordan11} alt="" className={styles.sneakerImg} id="trvis" />
            <span className={styles.sneakerName} id="trvis">Jordan 1 Retro Low OG SP Fragment x Travis Scott</span>
            <span className={styles.sneakerPrecio}>1.444€</span>
            <Link to="" className={styles.buttonLight}>Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i></Link>
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
    </div>
  );
};

export default Shop;
