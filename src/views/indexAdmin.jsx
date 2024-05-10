import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "../css/styles.module.css";
import { Button } from "react-bootstrap";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const IndexAdmin = () => {
  const [datos, setDatos] = useState([]);

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
        <Link to="/admin/crear" className={styles.botonVerde}>
          Nueva Sneaker
        </Link>
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
              <td><img src={`http://localhost:5000/imagen/${dato.imagen}`} alt={dato.imagen}/></td>
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
                  <Button href="" onClick={() => handleDelete(dato.id)}>Borrar</Button>
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
