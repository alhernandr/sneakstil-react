import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import styles from "../css/styles.module.css";

/**
 * Componente que representa la página de pago.
 * Permite al usuario ingresar información para realizar el pago de los productos en la cesta.
 *
 * @returns {JSX.Element} Elemento JSX que representa la página de pago.
 */
const Stuff = () => {
  const [basketProducts, setBasketProducts] = useState([]);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    direccion: "",
    codigoPostal: "",
    tarjeta: "",
    vencimiento: "",
    cvv: ""
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Obtener productos de la cesta desde las cookies al cargar el componente
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
   * Manejador de evento para realizar el pago.
   * @param {Event} e - Evento de envío del formulario.
   */
  const handlePayment = (e) => {
    e.preventDefault();
    const { nombre, email, direccion, codigoPostal, tarjeta, vencimiento, cvv } = formData;

    if (nombre && email && direccion && codigoPostal && tarjeta && vencimiento && cvv) {
      // Realizar el pago si todos los campos están llenos
      alert("Compra Realizada");
      setFormData({
        nombre: "",
        email: "",
        direccion: "",
        codigoPostal: "",
        tarjeta: "",
        vencimiento: "",
        cvv: ""
      });
      Cookies.remove("basketProducts"); // Limpiar la cesta después del pago
      navigate("/");
    } else {
      // Mostrar alerta si faltan campos por llenar
      const errores = [];
      if (!nombre) errores.push("Nombre completo es requerido");
      if (!email) errores.push("Correo electrónico es requerido");
      if (!direccion) errores.push("Dirección es requerida");
      if (!codigoPostal) errores.push("Código postal es requerido");
      if (!tarjeta) errores.push("Número de tarjeta es requerido");
      if (!vencimiento) errores.push("Fecha de vencimiento es requerida");
      if (!cvv) errores.push("CVV es requerido");
      alert(errores.join("\n"));
    }
  };

  /**
   * Manejador de evento para cambiar los valores del formulario.
   * @param {Event} e - Evento de cambio en un input del formulario.
   */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
      <center>
        <div className={`${styles.contenedorAdmin} ${styles.section}`}>
          <h1>Pago</h1>
          <br></br>
            <thead style={{backgroundColor: "LightGray"}}>
              <tr>
                <td>Nombre</td>
                <td>Precio</td>
                <td>Cantidad</td>
                <td>Total</td>
              </tr>
            </thead>
            <tbody>
              {basketProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.nombre}</td>
                  <td>{product.precio}€</td>
                  <td>{product.quantity || 1}</td>
                  <td>{product.precio * (product.quantity || 1)}€</td>
                </tr>
              ))}
              <tr style={{backgroundColor: "LightGray"}}>
                <td colSpan="3">Total</td>
                <td>{calculateTotalPrice()}€</td>
              </tr>
            </tbody>
          <br></br>
          <br></br>
          <div>
            {/* Formulario de Pago */}
            <form className={styles.formPago} onSubmit={handlePayment}>
              <h2>Formulario de Pago</h2>
              <div className={styles.formGroup}>
                <label htmlFor="nombre">Nombre Completo:</label>
                <input data-cy="compraNombre" type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Correo Electrónico:</label>
                <input data-cy="compraCorreo" type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="_______@_____._____" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="direccion">Dirección:</label>
                <input data-cy="compraDireccion" type="text" id="direccion" name="direccion" value={formData.direccion} onChange={handleChange} placeholder="" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="codigoPostal">Código Postal:</label>
                <input data-cy="compraCP" type="text" id="codigoPostal" name="codigoPostal" value={formData.codigoPostal} onChange={handleChange} placeholder="" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="tarjeta">Número de Tarjeta:</label>
                <input data-cy="compraTarjeta" type="text" id="tarjeta" name="tarjeta" value={formData.tarjeta} onChange={handleChange} pattern="[0-9]{13,16}" placeholder="XXXX-XXXX-XXXX-XXXX" required />
                <small>Debe contener entre 13 y 16 dígitos numéricos.</small>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="vencimiento">Fecha de Vencimiento:</label>
                <input data-cy="compraVencimiento" type="text" id="vencimiento" name="vencimiento" value={formData.vencimiento} onChange={handleChange} placeholder="MM/AA" pattern="(0[1-9]|1[0-2])\/([0-9]{2})" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="cvv">CVV:</label>
                <input data-cy="compraCVV" type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleChange} pattern="[0-9]{3,4}" required />
                <small>Debe contener entre 3 y 4 dígitos numéricos.</small>
              </div>
              <Button data-cy="compraPagar" type="submit" className={styles.botonVerde}>
                Pagar
              </Button>
            </form>
            {/* Fin del Formulario de Pago */}
          </div>
        </div>
      </center>
      <Footer />
    </div>
  );
};

export default Stuff;
