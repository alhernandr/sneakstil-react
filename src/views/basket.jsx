/**
 * @fileoverview Componente de React para la página de la cesta de compras.
 * @module Basket
 * @requires React
 * @requires useEffect
 * @requires useState
 * @requires Link
 * @requires styles
 * @requires axios
 * @requires Button
 * @requires Header
 * @requires Footer
 */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/styles.module.css';
import axios from "axios";
import { Button } from "react-bootstrap";
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

/**
 * Componente funcional para la página de la cesta de compras.
 * @function Basket
 * @returns {JSX.Element} Componente de React que muestra la página de la cesta de compras.
 */
const Basket = () => {
  /**
   * Estado local para almacenar los datos de la cesta.
   * @type {Array}
   */
  const [datos, setDatos] = useState([]);

  /**
   * Función asincrónica para obtener los datos de la cesta desde el servidor.
   * @function
   * @name fetchData
   */
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/datos-cesta');
      setDatos(response.data);
    } catch (error) {
      console.error('Error al obtener datos de la cesta: ', error);
      alert('Error al obtener datos de la cesta');
    }
  };

  /**
   * Función asincrónica para eliminar un producto de la cesta.
   * @function
   * @name handleDelete
   * @param {number} id - ID del producto a eliminar.
   */
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/borrar-datos-cesta/${id}`);
      setDatos(datos.filter((dato) => dato.id !== id));
      alert('Producto eliminado correctamente');
    } catch (error) {
      console.error('Error al eliminar el producto: ', error);
      alert('Error al eliminar el producto');
    }
  };

  /**
   * Efecto de lado que se ejecuta después de que el componente es montado.
   * Obtiene los datos de la cesta cuando el componente se carga por primera vez.
   */
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <div className={`${styles.contenedorAdmin} ${styles.section}`}>
        <h1>Cesta</h1>
        <br />
        <Button href="/shop" className={styles.botonVerde}>
          Seguir Comprando
        </Button>
        <br></br>
        <br></br>
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Marca</td>
            <td>Precio</td>
            <td>Disponibilidad</td>
            <td>Operaciones</td>
          </tr>
        </thead>
        <tbody>
          {datos.map((dato) => (
            <tr key={dato.id}>
              <td>{dato.nombre}</td>
              <td>{dato.marca}</td>
              <td>{dato.precio}</td>
              <td>{dato.disponibilidad}</td>
              <td>
                
                <div>
                  <Button href="" onClick={() => handleDelete(dato.id)}>Borrar</Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        <br></br>
        <br></br>
        <Button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className={styles.botonVerde}>
          Continuar Al Pago
        </Button>

        <Footer />
      </div>
    </div>
  );
};

export default Basket;
