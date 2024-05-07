import React from 'react';
import styles from '../css/styles.module.css';
import { Link } from 'react-router-dom';

import Header from '../components/header/header'
import Footer from '../components/footer/footer'

const SignIn = () => {
  return (
    <div>
      <Header/>
      <div className={styles.contenedorLog}>
        <center>  
          {/* Título del formulario de registro */}
          <h2 className={styles.login}>Sign In</h2>
          {/* Formulario de registro */}
          <form method="post" action="/signin">
            {/* Campo para ingresar el nombre de usuario */}
            <label htmlFor="username">Username:</label><br />
            <input type="text" id="username" name="username" required /><br /><br />
            {/* Campo para ingresar el correo electrónico */}
            <label htmlFor="email">Email:</label><br />
            <input type="text" id="email" name="email" required /><br /><br />
            {/* Campo para ingresar la contraseña */}
            <label htmlFor="password">Password:</label><br />
            <input type="password" id="password" name="password" required /><br /><br />
            {/* Botón para enviar el formulario de registro */}
            <div className={styles.logButton}>
              <input className={styles.boton} type="submit" value="Sign In" />
            </div>
            {/* Enlace para redirigir a los usuarios a la página de inicio de sesión */}
            <div className={styles.createAccount}>
              <Link to="/login">Already have an account?</Link>
            </div>
          </form>
        </center>
      </div>
      <Footer/>
    </div>
  );
}

export default SignIn;