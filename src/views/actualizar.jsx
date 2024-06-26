/**
 * @fileoverview Componente de React para la página de actualización de productos.
 * @module Actualizar
 * @requires React
 * @requires useState
 * @requires useParams
 * @requires useNavigate
 * @requires styles
 * @requires axios
 * @requires Header
 * @requires Footer
 * @requires logo
 */

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../css/styles.module.css';
import axios from "axios";
import logo from '../img/logo.png';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

/**
 * Componente funcional para la página de actualización de productos.
 * @function Actualizar
 * @returns {JSX.Element} Componente de React que muestra el formulario de actualización de productos.
 */
const Actualizar = () => {
  /**
   * Hook de enrutamiento para obtener el parámetro de ID de la URL.
   * @type {Object}
   */
  const { id } = useParams();

  /**
   * Estado local para el nombre del producto.
   * @type {string}
   */
  const [nombre, setNombre] = useState('');

  /**
   * Estado local para la marca del producto.
   * @type {string}
   */
  const [marca, setMarca] = useState('');

  /**
   * Estado local para la imagen del producto.
   * @type {string}
   */
  const [imagen, setImagen] = useState('');

  /**
   * Estado local para el precio del producto.
   * @type {string}
   */
  const [precio, setPrecio] = useState('');

  /**
   * Estado local para la disponibilidad del producto.
   * @type {string}
   */
  const [disponibilidad, setDisponibilidad] = useState('');

  /**
   * Hook de enrutamiento para la navegación entre páginas.
   * @type {function}
   */
  const navigate = useNavigate();

  /**
   * Función para manejar el envío del formulario de actualización de datos.
   * @function
   * @name handleSubmit
   * @param {Event} e - Objeto de evento del formulario.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      nombre,
      marca,
      imagen,
      precio,
      disponibilidad
    };

    try {
      // Realizar la solicitud PUT al endpoint correspondiente en tu servidor
      await axios.put(`http://localhost:5000/actualizar-datos/${id}`, data);
      alert('Datos actualizados correctamente');
      navigate("/admin");
    } catch (error) {
      console.error('Error al actualizar datos: ', error);
      alert('Error al actualizar datos');
    }
  };
  return (
    <div>
      <Header />
      <h1>Actualizar</h1>
      <main className={`${styles.contenedor} ${styles.seccion}`}>
        <form className={styles.formulario} onSubmit={handleSubmit}>
          <legend><u>Información General</u></legend>

          <label htmlFor="Nombre">Nombre: </label>
          <input data-cy="usernameSneaker" type="text" id="Nombre" name="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />

          <label htmlFor="Marca">Marca:</label>
          <input data-cy="marcaSneaker" type="text" name="Marca" id="marca" value={marca} onChange={(e) => setMarca(e.target.value)} />

          <label htmlFor="imagen">Imagen:</label>
          <input type="file" name="imagen" id="imagen" accept="image/jpeg, image/png, image/jpg" onChange={(e) => setImagen(e.target.files[0])} />

          <label htmlFor="Precio">Precio:</label>
          <input data-cy="precioSneaker" type="text" name="Precio" id="precio" placeholder="Precio del sneakers..." value={precio} onChange={(e) => setPrecio(e.target.value)} />

          <label htmlFor="Disponibilidad">Disponibilidad:</label>
          <input data-cy="disponibilidadSneaker" type="text" name="Disponibilidad" id="disponibilidad" placeholder="Disponibilidad del sneakers..." value={disponibilidad} onChange={(e) => setDisponibilidad(e.target.value)} />

          <legend><u>Vendedor</u></legend>
          <select data-cy="vendedorSneaker" name="vendedor" id="vendedor">
            <option value="1">Lyonel</option>
            <option value="2">Álvaro</option>
          </select>

          <div className={styles.log_button}>
            <input data-cy="ActualizarSneaker" href="/admin" type="submit" name="" id="" className={styles.submit} value="Actualizar Sneaker" />
          </div>
        </form>
      </main>
      <div className={styles.logoAdmin}>
        <img className={styles.logoGrande} src={logo} alt="Logo" />
      </div>
      <Footer />
    </div>
  );
};

export default Actualizar;


