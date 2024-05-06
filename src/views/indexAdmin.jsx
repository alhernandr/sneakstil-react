import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/styles.module.css';

const IndexAdmin = ({ resultado, productos }) => {
  // Función para manejar la creación de nuevos productos
  const handleNewProduct = () => {
    // Aquí iría la lógica para crear un nuevo producto
    console.log("Crear nuevo producto");
  };


  return (
    <div>
      <div className={styles.contenedorAdminSection}>
        <h1>Administrador</h1><br />

        {/* Enlace para agregar un nuevo producto */}
        <Link to="/crear" className={styles.botonVerde} onClick={handleNewProduct}>Nueva Sneaker</Link><br></br>

        {/* Mensaje de éxito mostrado después de agregar un nuevo producto */}
        {resultado === 1 && <p className={styles.alertaExito}>PRODUCTO AÑADIDO CORRECTAMENTE</p>}

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
          {/* {productos.map((producto) => (
            <tr key={producto.id}>
              <td><img src={`./build/img/${producto.nombre}.png`} alt={producto.nombre} /></td>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>{producto.marca}</td>
              <td>{producto.precio}</td>
              <td>{producto.disponibilidad}</td>
              <td className={styles.operaciones}>
                <a href={`/actualizar?id=${producto.id}`} className="boton boton-actualizar">Actualizar</a>
                <a href={`/borrar?id=${producto.id}`} className="boton boton-block">Borrar</a>
              </td>
            </tr>
           ))}  */}
        </table>
      </div>
    </div>
  );
};

export default IndexAdmin;
