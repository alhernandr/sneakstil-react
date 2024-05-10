import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../css/styles.module.css';
import axios from "axios";
import logo from '../img/logo.png';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const Actualizar = () => {
  const { id } = useParams();
  const [nombre, setNombre] = useState('');
  const [marca, setMarca] = useState('');
  const [imagen, setImagen] = useState('');
  const [precio, setPrecio] = useState('');
  const [disponibilidad, setDisponibilidad] = useState('');

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
    } catch (error) {
      console.error('Error al actualizar datos: ', error);
      alert('Error al actualizar datos');
    }
  };
  

  return (
    <div>
      <Header />
      <h1>Actualizar</h1>

      <form className={styles.formulario} onSubmit={handleSubmit}>
        <legend><u>Información General</u></legend>

        <label htmlFor="Nombre">Nombre: </label>
        <input type="text" id="Nombre" name="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />

        <label htmlFor="Marca">Marca:</label>
        <input type="text" name="Marca" id="marca" value={marca} onChange={(e) => setMarca(e.target.value)} />

        <label htmlFor="imagen">Imagen:</label>
        <input type="file" name="imagen" id="imagen" accept="image/jpeg, image/png, image/jpg" onChange={(e) => setImagen(e.target.files[0])} />

        <label htmlFor="Precio">Precio:</label>
        <input type="text" name="Precio" id="precio" placeholder="Precio del sneakers..." value={precio} onChange={(e) => setPrecio(e.target.value)} />

        <label htmlFor="Disponibilidad">Disponibilidad:</label>
        <input type="text" name="Disponibilidad" id="disponibilidad" placeholder="Disponibilidad del sneakers..." value={disponibilidad} onChange={(e) => setDisponibilidad(e.target.value)} />

        <legend><u>Vendedor</u></legend>
        <select name="vendedor" id="vendedor">
          <option value="1">Lyonel</option>
          <option value="2">Álvaro</option>
        </select>

        <div className={styles.log_button}>
          <input type="submit" name="" id="" className={styles.submit} value="Actualizar propiedad" />
        </div>
        <Footer />
      </form>
      <div className={styles.logoAdmin}>
        <img className={styles.logoGrande} src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Actualizar;
