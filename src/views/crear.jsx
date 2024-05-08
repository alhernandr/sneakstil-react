import React from 'react';
import styles from '../css/styles.module.css';

import logo from '../img/logo.png'

const Crear = () => {
 return (
    <div>
      <main className={`${styles.contenedor} ${styles.seccion}`}>
        <form className={styles.formulario} method="POST" enctype="multipart/form-data">
          <h1>Crear</h1>
          <legend><u>Información General</u></legend>

          <label htmlFor="Nombre">Nombre: </label>
          <input type="text" id="Nombre" name="Nombre" />

          <label htmlFor="Marca">Marca:</label>
          <input type="text" name="Marca" id="Marca" />

          <label htmlFor="imagen">Imagen:</label>
          <input type="file" name="imagen" id="imagen" accept="image/jpeg, image/png, image/jpg" />

          <label htmlFor="Precio">Precio:</label>
          <input type="text" name="Precio" id="Precio" placeholder="" />

          <label htmlFor="Disponibilidad">Disponibilidad:</label>
          <input type="text" name="Disponibilidad" id="Disponibilidad" placeholder="" />

          <legend><u>Vendedor</u></legend>
          <select name="vendedor" id="vendedor">
            <option value="1">Lyonel</option>
            <option value="2">Álvaro</option>
          </select>

          <div className={styles.log_button}>
            <input type="submit" value="Crear propiedad" />
          </div>
        </form>
      </main>
      <div className={styles.logoAdmin}>
        <img className={styles.logoGrande} src={logo} alt="Logo" />
      </div>
    </div>
 );
};

export default Crear;
