/**
 * @fileoverview Componente de React para la creación de productos.
 * @module Crear
 * @requires React
 * @requires useState
 * @requires styles
 * @requires axios
 * @requires useNavigate
 * @requires logo
 */

import React, { useState } from 'react';
import styles from '../css/styles.module.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import logo from '../img/logo.png';
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

/**
 * Componente funcional para crear un nuevo producto.
 * @function Crear
 * @returns {JSX.Element} Elemento JSX que representa el formulario de creación de producto.
 */
const Crear = () => {
  const [nombre, setNombre] = useState('');
  const [marca, setMarca] = useState('');
  const [imagen, setImagen] = useState('');
  const [precio, setPrecio] = useState('');
  const [disponibilidad, setDisponibilidad] = useState('');

  const navigate = useNavigate();

  /**
   * Maneja el envío del formulario de creación de producto.
   * @function handleSubmit
   * @param {Event} e - Evento de formulario.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = {
      nombre,
      marca,
      precio,
      disponibilidad
    };
  
    try {
      await axios.post('http://localhost:5000/insertar-datos', data);
      alert('Datos insertados correctamente');
      navigate("/admin");
    } catch (error) {
      console.error('Error al insertar datos: ', error);
      alert('Error al insertar datos');
    }
  };
  return (
    <div>
      <Header/>
      <main className={`${styles.contenedor} ${styles.seccion}`}>
        <form className={styles.formulario} onSubmit={handleSubmit}>
          <h1>Crear</h1>
          <legend><u>Información General</u></legend>

          <label htmlFor="nombre">Nombre: </label>
          <input data-cy="usernameSneaker" type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />

          <label htmlFor="marca">Marca:</label>
          <input data-cy="marcaSneaker" type="text" name="marca" id="marca" value={marca} onChange={(e) => setMarca(e.target.value)} />

          <label htmlFor="imagen">Imagen:</label>
          <input type="file" name="imagen" id="imagen" value={imagen} accept="image/jpeg, image/png, image/jpg" onChange={(e) => setImagen(e.target.files[0])} />

          <label htmlFor="precio">Precio:</label>
          <input data-cy="precioSneaker" type="text" name="precio" id="precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />

          <label htmlFor="disponibilidad">Disponibilidad:</label>
          <input data-cy="disponibilidadSneaker" type="text" name="disponibilidad" id="disponibilidad" value={disponibilidad} onChange={(e) => setDisponibilidad(e.target.value)} />

          <legend><u>Vendedor</u></legend>
          <select data-cy="vendedorSneaker" name="vendedor" id="vendedor">
            <option value="1">Lyonel</option>
            <option value="2">Álvaro</option>
          </select>

          <div className={styles.log_button}>
            <input data-cy="crearSneaker" href="/admin" type="submit" value="Crear Sneaker"/>
          </div>
        </form>
      </main>
      <div className={styles.logoAdmin}>
        <img className={styles.logoGrande} src={logo} alt="Logo" />
      </div>
      <Footer/>
    </div>
  );
};

export default Crear;