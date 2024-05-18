import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../css/styles.module.css";
import axios from "axios";
import { Button } from "react-bootstrap";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Cookies from "js-cookie";

const Stuff = () => {
  const [basketProducts, setBasketProducts] = useState([]);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    tarjeta: "",
    vencimiento: "",
    cvv: ""
  });
  const navigate = useNavigate();

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

  const handlePayment = (e) => {
    e.preventDefault();
    const { nombre, email, tarjeta, vencimiento, cvv } = formData;

    if (nombre && email && tarjeta && vencimiento && cvv) {
      // Todos los campos están llenos
      alert("Compra Realizada");
      setFormData({
        nombre: "",
        email: "",
        tarjeta: "",
        vencimiento: "",
        cvv: ""
      });
      navigate("/");
    } else {
      // Faltan campos por llenar, muestra los errores
      const errores = [];
      if (!nombre) errores.push("Nombre completo es requerido");
      if (!email) errores.push("Correo electrónico es requerido");
      if (!tarjeta) errores.push("Número de tarjeta es requerido");
      if (!vencimiento) errores.push("Fecha de vencimiento es requerida");
      if (!cvv) errores.push("CVV es requerido");
      alert(errores.join("\n"));
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
            </tr>
        </thead>
        <tbody>
            {basketProducts.map((product) => (
            <tr key={product.id}>
                <td>{product.nombre}</td>
                <td>{product.precio}€</td>
            </tr>
            ))}
            <tr style={{backgroundColor: "LightGray"}}>
                <td>Total</td>
                <td>{basketProducts.reduce((total, product) => total + product.precio, 0)}€</td>
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
            <label htmlFor="tarjeta">Direccion:</label>
            <input data-cy="compraDireccion" type="text" id="direccion" name="direccion" value={formData.direccion} onChange={handleChange}  placeholder="" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="tarjeta">Codigo postal:</label>
            <input data-cy="compraCP" type="text" id="codigoPostal" name="codigoPostal" value={formData.codigo} onChange={handleChange}  placeholder="" required />
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
            <small>Debe contener entre 3 digitos</small>
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
