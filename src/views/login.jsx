/**
 * @fileoverview Componente de React para el formulario de inicio de sesión.
 * @module Login
 * @requires React
 * @requires useState
 * @requires Link
 * @requires axios
 * @requires Header
 * @requires Footer
 * @requires styles
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import styles from "../css/styles.module.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { Button } from "react-bootstrap";

/**
 * Componente funcional que representa el formulario de inicio de sesión.
 * @function Login
 * @returns {JSX.Element} Elemento JSX que representa el formulario de inicio de sesión.
 */
const Login = () => {
  /**
   * Estado para el nombre de usuario.
   * @type {[string, function]} Array que contiene el valor del nombre de usuario y una función para actualizarlo.
   */
  const [nombre, setNombre] = useState("");
  /**
   * Estado para la contraseña.
   * @type {[string, function]} Array que contiene el valor de la contraseña y una función para actualizarla.
   */
  const [pasword, setPasword] = useState("");
  /**
   * Estado para los errores de validación.
   * @type {[Object, function]} Array que contiene un objeto con los errores y una función para actualizarlos.
   */
  const [errors, setErrors] = useState({ nombre: "", pasword: "" });

  /**
   * Maneja el cambio en el campo de nombre de usuario.
   * @function handleNombreChange
   * @param {Object} event - Evento de cambio.
   */
  const handleNombreChange = (event) => {
    setNombre(event.target.value);
    if (!event.target.value) {
      setErrors({ ...errors, nombre: "El nombre de usuario es obligatorio." });
    } else {
      setErrors({ ...errors, nombre: "" });
    }
  };

  /**
   * Maneja el cambio en el campo de contraseña.
   * @function handlePaswordChange
   * @param {Object} event - Evento de cambio.
   */
  const handlePaswordChange = (event) => {
    setPasword(event.target.value);
    if (event.target.value.length < 8) {
      setErrors({
        ...errors,
        pasword: "La contraseña debe tener al menos 8 caracteres.",
      });
    } else {
      setErrors({ ...errors, pasword: "" });
    }
  };

  /**
   * Maneja el envío del formulario de inicio de sesión.
   * @async
   * @function handleSubmit
   * @param {Object} event - Evento de envío.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (nombre && pasword.length >= 8) {
      try {
        const response = await axios.post('http://localhost:5000/login', {
          nombre,
          pasword,
        });

        if (response.data.success) {
          alert("Inicio de sesión exitoso");
        } else {
          alert(response.data.message || "Error al iniciar sesión");
        }
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
        alert("Error al iniciar sesiónnnnnnnnnnnnnnnnnnnnnnnnn");
      }
    } else {
      alert("Por favor, complete todos los campos correctamente.");
    }
  };

  return (
    <div>
      <Header />
      <section>
        <div className={styles.contenedorLog}>
          <center>
            <h2 className={styles.login}>LOGIN</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="nombre">Usuario:</label>
              <br />
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={nombre}
                onChange={handleNombreChange}
                required
              />
              <br />
              <br />
              <div className={styles.error}>{errors.nombre}</div>
              <label htmlFor="pasword">Contraseña:</label>
              <br />
              <input
                type="password"
                id="pasword"
                name="pasword"
                value={pasword}
                onChange={handlePaswordChange}
                required
              />
              <br />
              <br />
              <div className={styles.error}>{errors.pasword}</div>
              <div className={styles.logButton}>
                <Button href="/" className={styles.boton} type="submit" value="Login" >Login</Button>
              </div>
              <br />
              <div className={styles.createAccount}>
                <Link to="/login/signin">Create an account</Link>
              </div>
            </form>
          </center>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
