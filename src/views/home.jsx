/**
 * @fileoverview Componente de React para la página de inicio.
 * @module Home
 * @requires React
 * @requires Link
 * @requires styles
 * @requires Header
 * @requires Footer
 */
import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../css/styles.module.css'
import imgHome from '../img/imghome.png'
import jordan1 from '../img/Jordan 1 Retro High OG SP Travis Scott Mocha.png'
import jordan2 from '../img/Jordan 4 Retro Military Black.png'
import jordan3 from '../img/air-jordan-3-retro-sp-j-balvin-removebg-preview.png'
import zapatilla1 from '../img/0280418168e64ee1339cd6c011e79ebd-removebg-preview.png'
import zapatilla2 from '../img/76aba495949b8a4392da6ce5ae3f3582-removebg-preview.png'
import jordan4 from '../img/Jordan 4 Retro Canyon Purple.png'
import jordan9 from '../img/Jordan 4 Frozen Moments.png'
import jordan5 from '../img/Jordan 11 Retro Midnight Navy.png'
import jordan6 from '../img/Jordan 1 Mid SE Fearless Melody Ehsani.png'
import zapatilla3 from '../img/536656ebed743b8b607a473303352cf5-removebg-preview.png'
import zapatilla4 from '../img/new1.png'
import zapatilla5 from '../img/1 (1).png'
import jordan7 from '../img/jordan-2-retro-low-sp-off-white-white-red-2-removebg-preview.png'

import Header from '../components/header/header';
import Footer from '../components/footer/footer';

/**
 * Componente funcional que representa la página de inicio.
 * @function Home
 * @returns {JSX.Element} Elemento JSX que representa la página de inicio.
 */
const home = () => {
  return (
<div>
  <Header/>
  <section className={styles.home} id="home">
    <div className={`${styles.home__container} ${styles.bdGrid}`}>
      {/* <!-- Sneaker --> */}
      <div className={styles.home__sneaker}>
        <div className={styles.home__shape}></div>
        <img src={imgHome} alt="" className={styles.home__img} />
      </div>
      {/* <!-- Datos de la página de inicio --> */}
      <div className={styles.home__data}>
        <span className={styles.home__new}>New in</span>
        <h1 className={styles.home__title}>Yeezy Boost 350 V2 <br /> Beluga Reflective </h1>
        <p className={styles.home__description}>Explore the new collection of sneaker</p>
        <Link to="/shop" className={styles.button}>Explore now</Link>
      </div>
      
    </div>
  </section>

  {/* <!-- Sección de productos destacados --> */}
  <section className={`${styles.featured} ${styles.section}`} id="featured">
    <h2 className={styles.sectionTitle}>FEATURED</h2>
    <div className={`${styles.featured__container} ${styles.bdGrid}`}> 
      {/* <!-- Producto destacado 1 --> */}
      <article className={styles.sneaker}>
        <img src={jordan1} alt="" className={styles.sneaker__img} />
        <span className={styles.sneaker__name}>Jordan 1 Retro High OG SP Travis Scott Mocha</span>
        <span className={styles.sneaker__preci}>1.366€</span>
        <Link to="/shop" className={styles.buttonLight}>Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i></Link>{/*ARREGLAR CON LA UNION DE VARIAS CLASES*/}
      </article>
      {/* <!-- Producto destacado 2 --> */}
      <article className={styles.sneaker}>
        <img src={jordan2} alt="" className={styles.sneaker__img} />
        <span className={styles.sneaker__name}>Jordan 4 Retro Military Black</span>
        <span className={styles.sneaker__preci}>546€</span>
        <Link to="/shop" className={styles.buttonLight}>Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i></Link>{/*ARREGLAR CON LA UNION DE VARIAS CLASES*/}
      </article>

      {/* <!-- Producto destacado 3 --> */}
      <article className={styles.sneaker}>
        <img src={jordan3} alt="" className={styles.sneaker__img} />
        <span className={styles.sneaker__name}>Jordan 3 Retro SP J Balvin Medellín Sunset</span>
        <span className={styles.sneaker__preci}>582€</span>
        <Link to="/shop" className={styles.buttonLight}>Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i></Link>{/*ARREGLAR CON LA UNION DE VARIAS CLASES*/}
      </article>
    </div>
  </section>

  {/* <!-- Sección de colecciones --> */}
  <section className={`${styles.collection} ${styles.section}`}>
    <div className={`${styles.collection__container} ${styles.bdGrid}`}>
      {/* <!-- Colección de hombres --> */}
      <div className={styles.collection__card}>
        <div className={styles.collection__data}>
          <h3 className={styles.collection__name}>Men's</h3>
          <p className={styles.collection__description}>New collection 2023</p>
          <Link to="/shop" className={styles.buttonLight}>Buy Now <i className="bx bx-right-arrow-alt button-icon"></i></Link>{/*ARREGLAR CON LA UNION DE VARIAS CLASES*/}
        </div>
        <img src={zapatilla1} alt="" className={styles.collection__img}/>
      </div>
      {/* <!-- Colección de mujeres --> */}
      <div className={styles.collection__card}>
        <div className={styles.collection__data}>
          <h3 className={styles.collection__name}>Women's</h3>
          <p className={styles.collection__description}>New collection 2023</p>
          <Link to="/shop" className={styles.buttonLight}>Buy Now <i className="bx bx-right-arrow-alt button-icon"></i></Link>{/*ARREGLAR CON LA UNION DE VARIAS CLASES*/}
        </div>
        <img src={zapatilla2} alt="" className={styles.collection__img_womens} id="wmns"/>
      </div>
    </div>
  </section>

  {/* <!-- Sección de zapatillas para mujeres --> */}
  <section className={`${styles.women} ${styles.section}`} id="women">
    <h2 className={styles.sectionTitlew}></h2>
    <div className={`${styles.women__container} ${styles.bdGrid}`}>
      {/* <!-- Zapatilla de mujer 1 --> */}
      <article className={styles.sneaker}>
        <div className={styles.sneaker__sale}>Sale</div>
        <img src={jordan4} alt="" className={styles.sneaker__img} />
        <span className={styles.sneaker__nameCanyon}>Jordan 4 Retro Canyon Purple</span>
        <span className={styles.sneaker__preci}>289€</span>
        <Link to="/shop" className={styles.buttonLight}>Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i></Link>{/*ARREGLAR CON LA UNION DE VARIAS CLASES*/}
      </article>
      {/* <!-- Zapatilla de mujer 2 --> */}
      <article className={styles.sneaker}>
        <div className={styles.sneaker__sale}>Sale</div>
        <img src={jordan9} alt="" className={styles.sneaker__img} />
        <span className={styles.sneaker__nameFrozen}>Jordan 4 Frozen Moments</span>
        <span className={styles.sneaker__preci}>284€</span>
        <Link to="/shop" className={styles.buttonLight}>Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i></Link>{/*ARREGLAR CON LA UNION DE VARIAS CLASES*/}
      </article>
      {/* <!-- Zapatilla de mujer 3 --> */}
      <article className={styles.sneaker}>
        <div className={styles.sneaker__sale}>Sale</div>
        <img src={jordan5} alt="" className={styles.sneaker__img} />
        <span className={styles.sneaker__nameMidnight}>Jordan 11 Retro Midnight Navy</span>
        <span className={styles.sneaker__preci}>120€</span>
        <Link to="/shop" className={styles.buttonLight}>Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i></Link>{/*ARREGLAR CON LA UNION DE VARIAS CLASES*/}
      </article>
      {/* <!-- Zapatilla de mujer 4 --> */}
      <article className={styles.sneaker}>
        <div className={styles.sneaker__sale}>Sale</div>
        <img src={jordan6} alt="" className={styles.sneaker__img}/>
        <span className={styles.sneaker__nameFearless}>Jordan 1 Fearless Melody Ehsani</span>
        <span className={styles.sneaker__preci}>885€</span>
        <Link to="/shop" className={styles.buttonLight}>Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i></Link>{/*ARREGLAR CON LA UNION DE VARIAS CLASES*/}
      </article>
    </div>
  </section>

  {/* <!-- Oferta --> */}
  <section-offer className={styles.section}>
    <div className={`${styles.offer__container} ${styles.bdGrid}`}>
      <div className={styles.offer__data}>
        <h3 className={styles.offer__title}>50% OFF</h3>
        <p className={styles.offer__description}>on the 2022 Collection! </p>
        <Link to="/shop" className={styles.button}>Shop Now</Link>
      </div>
      <img src={zapatilla3} alt="" className={styles.offer__img} />
    </div>
  </section-offer>

  {/* <!-- Nueva colección --> */}
  <section className={`${styles.new} ${styles.section}`} id="new">
    <h2 className={styles.sectionTitle}>NEW COLLECTION</h2>
    <div className={`${styles.new__container} ${styles.bdGrid}`}>
      {/* <!-- Zapatos para hombres --> */}
      <div className={styles.new__mens}>
        <img src={zapatilla4} alt="" className={styles.new__mensImg} />
        <h3 className={styles.new__title}>Mens Shoes</h3>
        <span className={styles.new__preci}>From 79.99€</span>
        <Link to="/shop" className={styles.buttonLight}>View Collection <i className="bx bx-right-arrow-alt button-icon"></i></Link>{/*ARREGLAR CON LA UNION DE VARIAS CLASES*/}
      </div>
      {/* <!-- Sneakers de la nueva colección --> */}
      <div className={styles.new__sneaker}>
        {/* <!-- Sneaker 1 --> */}
        <div className={styles.new__sneakerCard}>
          <img src={zapatilla5} alt="" className={styles.new__sneakerImg} />
          <div className={styles.new__sneakerOverlay}>
            <Link to="/shop" className={styles.button}>Add to Cart</Link>
          </div>
        </div>
        {/* <!-- Sneaker 2 --> */}
        <div className={styles.new__sneakerCard}>
          <img src={jordan7} alt="" className={styles.new__sneakerImg}/>
          <div className={styles.new__sneakerOverlay}>
            <Link to="/shop" className={styles.button}>Add to Cart</Link>
          </div>
        </div>
        {/* <!-- Sneaker 3 --> */}
        <div className={styles.new__sneakerCard}>
          <img src={jordan5} alt="" className={styles.new__sneakerImg}/>
          <div className={styles.new__sneakerOverlay}>
            <Link to="/shop" className={styles.button}>Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- Boletín --> */}
  <section className={`${styles.newsletter} ${styles.section}`}>
    <div className={`${styles.newsletter__container} ${styles.bdGrid}`}>
      <div>
        <h3 className={styles.newsletter__title}> Subscribe And Get <br /> 10% OFF</h3>
        <p className={styles.newsletter__description}> Get 10% discount for all products </p>
      </div>
      {/* <!-- Formulario de suscripción al boletín --> */}
      <form action="" className={styles.newsletter__subscribe}>
        <input type="text"placeholder="@email.com"className={styles.newsletter__input}/>
        <Link to="" className={styles.button}>Subscribe</Link>
      </form>
    </div>
  </section>
  <Footer/>
</div>
  )
}

export default home;
