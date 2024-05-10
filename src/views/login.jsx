import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import styles from "../css/styles.module.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const Login = () => {
  const [nombre, setNombre] = useState("");
  const [pasword, setPasword] = useState("");
  const [errors, setErrors] = useState({ nombre: "", pasword: "" });

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
    if (!event.target.value) {
      setErrors({ ...errors, nombre: "El nombre de usuario es obligatorio." });
    } else {
      setErrors({ ...errors, nombre: "" });
    }
  };

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
        alert("Error al iniciar sesiónnnnnnnnnn");
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
              <label htmlFor="pasword">Pasword:</label>
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
                <input className={styles.boton} type="submit" value="Login" />
              </div>
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
