import React, { useState }from 'react';
import { Link } from 'react-router-dom';

import styles from '../css/styles.module.css'; // Asegúrate de que esta ruta sea correcta

const Login = () => {

    // Estado inicial para los campos de entrada y errores
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', password: '' });

  // Función para manejar el cambio en el campo de nombre de usuario
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    // Validación básica aquí, por ejemplo, verificar que el nombre de usuario no esté vacío
    if (!event.target.value) {
      setErrors({...errors, username: 'Username is required.' });
    } else {
      setErrors({...errors, username: '' });
    }
  };

  // Función para manejar el cambio en el campo de contraseña
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    // Validación básica aquí, por ejemplo, verificar que la contraseña tenga al menos 8 caracteres
    if (event.target.value.length < 8) {
      setErrors({...errors, password: 'Password must be at least 8 characters long.' });
    } else {
      setErrors({...errors, password: '' });
    }
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario
    // Aquí puedes agregar la lógica para enviar los datos al servidor
    console.log('Submitting:', { username, password });
  };

  return (
    <div>
      <section>
        <div className={styles.contenedorLog}>
          <center>
            <h2 className={styles.login}>LOGIN</h2>
            <form method="post" action="/login" onSubmit={handleSubmit}>
              <label htmlFor="nombre">Username:</label><br />
              <input type="text" id="nombre" name="email" value={username} onChange={handleUsernameChange} required /><br /><br />
              <div className={styles.error}>{errors.username}</div>
              <label htmlFor="password">Password:</label><br />
              <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required /><br /><br />
              <div className={styles.error}>{errors.password}</div>
              <div className={styles.logButton}>
                <input className={styles.boton} type="submit" value="Login" />
              </div>
              <div className={styles.createAccount}>
                <Link to="/signin">Create an account</Link>
              </div>
            </form>
          </center>
        </div>
      </section>
    </div>
  );
};

export default Login;