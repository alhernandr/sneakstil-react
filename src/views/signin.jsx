/**
 * @fileoverview Componente de React para el formulario de registro.
 * @module SignIn
 * @requires React
 * @requires useState
 * @requires styles
 * @requires Link
 * @requires useNavigate
 * @requires axios
 * @requires Header
 * @requires Footer
 */

import React, { useState } from 'react';
import styles from '../css/styles.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import { Button } from "react-bootstrap";

/**
 * Componente funcional que representa el formulario de registro.
 * @function SignIn
 * @returns {JSX.Element} Elemento JSX que representa el formulario de registro.
 */
const SignIn = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [pasword, setPasword] = useState('');
  const [errors, setErrors] = useState({ nombre: '', email: '', pasword: '' });

  const navigate = useNavigate();

  /**
   * Función para manejar el envío del formulario de registro.
   * @async
   * @function handleSubmit
   * @param {Event} e - Evento del formulario.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Hashear la contraseña
    // const hashedPassword = await bcrypt.hash(pasword, 10); 
    
    const data = {
      nombre,
      email,
      pasword, //:hashedPassword
    };
    try {
      await axios.post('http://localhost:5000/insertar-cliente', data);
      alert('Sign In Successfull');
      navigate("/login");
    } catch (error) {
      console.error('Error al insertar datos: ', error);
      alert('Error al insertar datos');
    }
  };

  /**
   * Función para manejar el cambio en el campo de nombre de usuario.
   * @function handleNombreChange
   * @param {Event} event - Evento del campo de nombre de usuario.
   */
  const handleNombreChange = (event) => {
    setNombre(event.target.value);
    // Validación básica aquí, por ejemplo, verificar que el nombre de usuario no esté vacío
    if (!event.target.value) {
      setErrors({ ...errors, nombre: 'El nombre de usuario es obligatorio.' });
    } else {
      setErrors({ ...errors, nombre: '' });
    }
  };

  /**
   * Función para manejar el cambio en el campo de contraseña.
   * @function handlePasswordChange
   * @param {Event} event - Evento del campo de contraseña.
   */
  const handlePasswordChange = (event) => {
    setPasword(event.target.value);
    // Validación básica aquí, por ejemplo, verificar que la contraseña tenga al menos 5 caracteres
    if (event.target.value.length < 5) {
      setErrors({ ...errors, pasword: 'La contraseña tiene que tener al menos 5 caracteres.' });
    } else {
      setErrors({ ...errors, pasword: '' });
    }
  };

  /**
   * Función para manejar el cambio en el campo de correo electrónico.
   * @function handleEmailChange
   * @param {Event} event - Evento del campo de correo electrónico.
   */
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    // Expresión regular para validar el formato del correo electrónico
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    // Validar el formato del correo electrónico
    if (!emailPattern.test(event.target.value)) {
      setErrors({ ...errors, email: 'Por favor, ingrese un correo electrónico válido.' });
    } else {
      setErrors({ ...errors, email: '' });
    }
  };

  return (
    <div>
      <Header/>
      <section className={styles.lognnn}>
        <div className={styles.container}>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            {/* //NOMBRE */}
            <label htmlFor="nombre"></label><br />
            <div className={styles.error}>{errors.nombre}</div>
            <input type="text" placeholder='Username' id="nombre" name="nombre" value={nombre} onChange={handleNombreChange} required />
          
            {/* //EMAIL */}
            <label htmlFor="email"></label><br />
            <div className={styles.error}>{errors.email}</div>
            <input type="text" placeholder='Email' id="email" name="email" value={email} onChange={handleEmailChange} required />
          
            {/* //CONTRASEÑA */}
            <label htmlFor="password"></label><br />
            <div className={styles.error}>{errors.pasword}</div>
            <input type="password" placeholder='Password' id="password" name="password" value={pasword} onChange={handlePasswordChange} required />

            <div className={styles.logButton}>
              <input className={styles.buttonSignin} type="submit" value="Sign In" />
            </div>
            
            <div className={styles.createaccount}>
              <Link to="/login">Already have an account?</Link>
            </div>
          </form>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default SignIn;
