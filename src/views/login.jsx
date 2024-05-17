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
import { useNavigate } from "react-router-dom";
import styles from "../css/styles.module.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { Button } from "react-bootstrap";
import Cookies from 'js-cookie';

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
    if (event.target.value.length < 5) {
      setErrors({
        ...errors,
        pasword: "La contraseña debe tener al menos 5 caracteres.",
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
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (nombre && pasword.length >= 5) {
      try {
        const response = await axios.post('http://localhost:5000/login', {
          nombre,
          pasword
        });
  
        if (response.data.success) {
          alert("Inicio de sesión exitoso");
          Cookies.set('token', response.data.token); // Guarda el token de sesión en una cookie llamada 'token'
          
          if (response.data.message === "Inicio de sesión como administrador exitoso") {
            navigate("/admin");
          } else {
            navigate("/");
          }
        } else {
          alert(response.data.message || "Error al iniciar sesión");
        }
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
        alert("Error al iniciar sesión");
      }
    } else {
      alert("Por favor, complete todos los campos correctamente.");
    }
  };
  

  return (
    <div>
      <Header />
      <section className={styles.lognnn}>
        <div className={styles.container}>
          <h1>LOGIN</h1>
          <form >
            <input
              data-cy="email"
              type="text"
              placeholder="Username"
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={handleNombreChange}
              required
            />
            <div className={styles.error}>{errors.nombre}</div>
            <input
              data-cy="password"
              type="password"
              placeholder="Password"
              id="clave"
              name="clave"
              value={pasword}
              onChange={handlePaswordChange}
              required
            />
            <div className={styles.error}>{errors.pasword}</div>
            <div className={styles.logButton}>
                <Button data-cy="logIn" href="/" className={styles.buttonLogin} type="submit" value="Login" onClick={handleSubmit} >Login</Button>
              </div>            
            <div className={styles.createaccount}>
              <Link data-cy="login" to="/login/signin">Create an account</Link>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
