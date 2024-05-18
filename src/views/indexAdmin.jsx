/**
 * @fileoverview Componente de React para la página de administrador.
 * @module IndexAdmin
 * @requires React
 * @requires useEffect
 * @requires useState
 * @requires axios
 * @requires Link
 * @requires styles
 * @requires Button
 * @requires Header
 * @requires Footer
 */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "../css/styles.module.css";
import { Button } from "react-bootstrap";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

/**
 * Componente funcional que representa la página de administrador.
 * @function IndexAdmin
 * @returns {JSX.Element} Elemento JSX que representa la página de administrador.
 */
const IndexAdmin = () => {
  const [datos, setDatos] = useState([]);

  /**
   * Hook useEffect para obtener los datos del servidor al cargar la página.
   */
  useEffect(() => {
    axios
      .get("http://localhost:5000/datos") 
      .then((response) => {
        setDatos(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos: ", error);
      });
  }, []);

  /**
   * Función para manejar la eliminación de un dato.
   * @async
   * @function handleDelete
   * @param {number} id - ID del dato a eliminar.
   */
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/borrar-datos/${id}`);
      setDatos(datos.filter((dato) => dato.id !== id));
      alert('Producto eliminado correctamente');
    } catch (error) {
      console.error('Error al eliminar el producto: ', error);
      alert('Error al eliminar el producto');
    }
  };


  return (
    <div>
      <Header />
      <div className={`${styles.contenedorAdmin} ${styles.section}`}>
        <h1>Administrador</h1>
        <br />
        <Link to="/admin/crear" className={styles.botonVerde} data-cy="crearSneaker">
          Nueva Sneaker
        </Link>
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
                <Button href={`/admin/actualizar/${dato.id}`}>Actualizar</Button>
                </div>
                <div>
                  ---------
                </div>
                <div>
                  <Button data-cy="eliminarSneaker" href="" onClick={() => handleDelete(dato.id)}>Borrar</Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>

        <Footer />
      </div>
    </div>
  );
};

export default IndexAdmin;
