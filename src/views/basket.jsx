import React , { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/styles.module.css';
import axios from "axios";
import { Button } from "react-bootstrap";
import Header from '../components/header/header'
import Footer from '../components/footer/footer'


const Basket = () => {
  const [datos, setDatos] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/datos-cesta');
      setDatos(response.data);
    } catch (error) {
      console.error('Error al obtener datos de la cesta: ', error);
      alert('Error al obtener datos de la cesta');
    }
  };

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
            <td>Imagen</td>
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
              <td>{dato.imagen}</td>
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
