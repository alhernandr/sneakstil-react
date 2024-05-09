import React, { useEffect, useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";
import styles from "../css/styles.module.css";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const IndexAdmin = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    // Realiza la solicitud GET al endpoint '/datos' en tu servidor backend
    axios.get('http://localhost:5000/datos') // Modifica el puerto según corresponda
      .then(response => {
        // Si la solicitud es exitosa, actualiza el estado con los datos recibidos
        setDatos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los datos: ', error);
      });
  }, []);

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

        <table className={styles.tablaAdmin}>
           
            <td>Imagen</td>
            <td>Nombre</td>
            <td>Marca</td>
            <td>Precio</td>
            <td>Disponibilidad</td>
            <td>Operaciones</td>
            
          
            {datos.map((dato) => (
              <tr key={dato.id}>
                <td>{dato.imagen}</td>
                <td>{dato.nombre}</td>
                <td>{dato.marca}</td>
                <td>{dato.precio}</td>
                <td>{dato.disponibilidad}</td>
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
            ))}
          </table>
        <Footer />
      </div>
    </div>
  );
};

export default IndexAdmin;
