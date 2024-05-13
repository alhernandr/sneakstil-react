import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/styles.module.css";
import axios from "axios";
import { Button } from "react-bootstrap";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Cookies from "js-cookie";

const Basket = () => {
  const [basketProducts, setBasketProducts] = useState([]);
  useEffect(() => {
    const productsFromCookie = Cookies.get("basketProducts");
    if (productsFromCookie) {
      const parsedProducts = JSON.parse(productsFromCookie);
      if (Array.isArray(parsedProducts)) {
        setBasketProducts(parsedProducts);
      } else {
        console.error("Los productos de la cesta no están en formato de array");
      }
    }
  }, []);

  const handleDeleteProduct = (productId) => {
    const updatedProducts = basketProducts.filter(
      (product) => product.id !== productId
    );
    setBasketProducts(updatedProducts);
    Cookies.set("basketProducts", JSON.stringify(updatedProducts));
  };

  return (
    <div>
      <Header />
      <div className={`${styles.contenedorAdmin} ${styles.section}`}>
        <h1>Cesta</h1>
      
        <br></br>
        <br></br>
        <table>
          <thead>
            <tr>
              <td>Nombre</td>
              <td>Precio</td>
              <td>Operaciones</td>
            </tr>
          </thead>
          <tbody>
            {basketProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.nombre}</td>
                <td>{product.precio}</td>
                <td>
                  <div>
                    <Button onClick={() => handleDeleteProduct(product.id)}>
                      Borrar
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br></br>
        <br></br>
        <Button
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          className={styles.botonVerde}
        >
          Continuar Al Pago
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default Basket;
