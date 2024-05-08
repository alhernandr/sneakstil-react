import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/styles.module.css';


import Header from '../components/header/header'
import Footer from '../components/footer/footer'


const IndexAdmin = () => {
  


  return (
    <div>
        <Header/>
      <div className={styles.contenedorAdminSection}>
        <h1>Administrador</h1><br />

        {/* Enlace para agregar un nuevo producto */}
        <Link to="/crear" className={styles.botonVerde}>Nueva Sneaker</Link><br></br>

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
      </div>
      <Footer/>
    </div>
  );
};

export default IndexAdmin;
