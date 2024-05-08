import React from 'react';
import styles from '../css/styles.module.css';

import logo from '../img/logo.png'

const Actualizar = () => {
 return (
    <div>
      <h1>Actualizar</h1>

      <form className={styles.formulario} method="POST" enctype="multipart/form-data">
        <legend><u>Información General</u></legend>

        <label htmlFor="Nombre">Nombre: </label>
        <input type="text" id="Nombre" name="Nombre" value="" />

        <label htmlFor="Marca">Marca:</label>
        <input type="text" name="Marca" id="marca" value="" />

        <label htmlFor="imagen">Imagen:</label>
        <input type="file" name="imagen" id="imagen" accept="image/jpeg, image/png, image/jpg" />

        <label htmlFor="Precio">Precio:</label>
        <input type="text" name="Precio" id="precio" placeholder="Precio del sneakers..." value="" />

        <label htmlFor="Disponibilidad">Disponibilidad:</label>
        <input type="text" name="Disponibilidad" id="disponibilidad" placeholder="Disponibilidad del sneakers..." value="" />

        <legend><u>Vendedor</u></legend>
        <select name="vendedor" id="vendedor">
          <option value="1">Lyonel</option>
          <option value="2">Álvaro</option>
        </select>

        <div className={styles.log_button}>
          <input type="submit" name="" id="" className={styles.submit} value="Actualizar propiedad" />
        </div>
      </form>
      <div className={styles.logoAdmin}>
        <img className={styles.logoGrande} src={logo} alt="Logo" />
      </div>
    </div>
 );
};

export default Actualizar;