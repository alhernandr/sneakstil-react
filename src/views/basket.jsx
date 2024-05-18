import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Cookies from "js-cookie";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import styles from "../css/styles.module.css";

/**
 * Componente funcional que representa la página de la cesta de la compra.
 * @returns {JSX.Element} Elemento JSX que representa la página de la cesta de la compra.
 */
const Basket = () => {
  /**
   * Estado que almacena los productos de la cesta.
   * @type {Array}
   */
  const [basketProducts, setBasketProducts] = useState([]);

  /**
   * Efecto secundario que se ejecuta al cargar el componente para obtener los productos de la cesta desde las cookies.
   */
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

  /**
   * Manejador de eventos para eliminar un producto de la cesta.
   * @param {number} productId - ID del producto a eliminar.
   */
  const handleDeleteProduct = (productId) => {
    const updatedProducts = basketProducts.filter(
      (product) => product.id !== productId
    );
    setBasketProducts(updatedProducts);
    Cookies.set("basketProducts", JSON.stringify(updatedProducts));
  };

  /**
   * Manejador de eventos para cambiar la cantidad de un producto en la cesta.
   * @param {number} productId - ID del producto cuya cantidad se va a cambiar.
   * @param {number} change - Cambio en la cantidad del producto.
   */
  const handleQuantityChange = (productId, change) => {
    const updatedProducts = basketProducts.map((product) => {
      if (product.id === productId) {
        const newQuantity = (product.quantity || 1) + change;
        return { ...product, quantity: newQuantity > 0 ? newQuantity : 1 };
      }
      return product;
    });
    setBasketProducts(updatedProducts);
    Cookies.set("basketProducts", JSON.stringify(updatedProducts));
  };

  /**
   * Calcular el precio total de los productos en la cesta.
   * @returns {number} Precio total de los productos en la cesta.
   */
  const calculateTotalPrice = () => {
    return basketProducts.reduce((total, product) => {
      return total + product.precio * (product.quantity || 1);
    }, 0);
  };

  return (
    <div>
      <Header />
      <div className={`${styles.contenedorAdmin} ${styles.section}`}>
        <h1>Cesta</h1>
        <br></br>
        <br></br>
          <thead style={{backgroundColor: "LightGray"}}>
            <tr>
              <td>Nombre</td>
              <td>Precio</td>
              <td>Cantidad</td>
              <td>Operaciones</td>
            </tr>
          </thead>
          <tbody>
            {basketProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.nombre}</td>
                <td>{product.precio}€</td>
                <td>
                  <div>
                    <Button onClick={() => handleQuantityChange(product.id, -1)}>-</Button>
                    <span style={{ margin: '0 10px' }}>{product.quantity || 1}</span>
                    <Button onClick={() => handleQuantityChange(product.id, 1)}>+</Button>
                  </div>
                </td>
                <td>
                  <div>
                    <Button onClick={() => handleDeleteProduct(product.id)}>
                      Borrar
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
            <tr style={{backgroundColor: "LightGray"}}>
              <td>Total</td>
              <td>{calculateTotalPrice()}€</td>
            </tr>
          </tbody>
        <br></br>
        <br></br>
        <Button
          data-cy="compraPago"
          href="/basket/stuff"
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
