import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "../css/styles.module.css";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";


const IndexAdmin = () => {
 
  const [productosList, setProductosList] = useState([]);


  return (
    <div>
      <Header />
      <div className={`${styles.contenedorAdmin} ${styles.section}`}>
        <h1>Administrador</h1>
        <br />

        {/* Enlace para agregar un nuevo producto */}
        <Link to="/admin/crear" className={styles.botonVerde}>
          Nueva Sneaker
        </Link>
        <br></br>

        {/* Mensaje de éxito mostrado después de agregar un nuevo producto */}
        {/* {resultado === 1 && <p className={styles.alertaExito}>PRODUCTO AÑADIDO CORRECTAMENTE</p>} */}
        {/* Tabla para mostrar los productos existentes */}

        <table>
          <tr>
            <td>Imagen</td>
            <td>ID</td>
            <td>Nombre</td>
            <td>Marca</td>
            <td>Precio</td>
            <td>Disponibilidad</td>
            <td>Operaciones</td>
          </tr>
        </table>
        <table  key={productosList.id}>
          <tr>
            <td>{productosList.imagen}</td>  
            <td>{productosList.id}</td>
            <td>{productosList.nombre}</td>
            <td>{productosList.marca}</td>
            <td>{productosList.precio}</td>
            <td>{productosList.disponibilidad}</td>
            <td>
              <Link
                to="/admin/actualizar"
                // className="boton boton-actualizar"
              >
                Actualizar
              </Link>
              </td>
              <td>
              <Link
                to="/borrar"
                // className="boton boton-block"
              >
                Borrar
              </Link>
            </td>
          </tr>
        </table>
        <Footer />
      </div>
    </div>
  );
};

export default IndexAdmin;
