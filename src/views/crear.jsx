import React, { useState } from 'react';
import styles from '../css/styles.module.css';
import axios from "axios";
import logo from '../img/logo.png';

const Crear = () => {
  const [nombre, setNombre] = useState('');
  const [marca, setMarca] = useState('');
  const [imagen, setImagen] = useState('');
  const [precio, setPrecio] = useState('');
  const [disponibilidad, setDisponibilidad] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('marca', marca);
    formData.append('imagen', imagen);
    formData.append('precio', precio);
    formData.append('disponibilidad', disponibilidad);

    try {
      await axios.post('http://localhost:5000/insertar-datos', formData, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
});
      alert('Datos insertados correctamente');
      // Aquí puedes redirigir a otra página o realizar alguna otra acción después de insertar los datos
    } catch (error) {
      console.error('Error al insertar datos: ', error);
      alert('Error al insertar datos');
    }
  };

  return (
    <div>
      <main className={`${styles.contenedor} ${styles.seccion}`}>
        <form className={styles.formulario} onSubmit={handleSubmit}>
          <h1>Crear</h1>
          <legend><u>Información General</u></legend>

          <label htmlFor="nombre">Nombre: </label>
          <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />

          <label htmlFor="marca">Marca:</label>
          <input type="text" name="marca" id="marca" value={marca} onChange={(e) => setMarca(e.target.value)} />

          <label htmlFor="imagen">Imagen:</label>
          <input type="file" name="imagen" id="imagen" accept="image/jpeg, image/png, image/jpg" onChange={(e) => setImagen(e.target.files[0])} />

          <label htmlFor="precio">Precio:</label>
          <input type="text" name="precio" id="precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />

          <label htmlFor="disponibilidad">Disponibilidad:</label>
          <input type="text" name="disponibilidad" id="disponibilidad" value={disponibilidad} onChange={(e) => setDisponibilidad(e.target.value)} />

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