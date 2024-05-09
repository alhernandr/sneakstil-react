// Importa los módulos necesarios
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

// Crea una instancia de Express
const app = express();
app.use(express.json()); // Permite el uso de JSON en las solicitudes
app.use(cors()); // Habilita el CORS

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sneakstil'
});

// Conexión a la base de datos
connection.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos: ', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

// Endpoint para obtener datos
app.get('/datos', (req, res) => {
  connection.query('SELECT * FROM productos', (err, results) => {
    if (err) {
      console.error('Error al realizar la consulta: ', err);
      res.status(500).send('Error al obtener datos');
      return;
    }
    res.json(results);
  });
});

// Endpoint para insertar datos
app.post('/insertar-datos', (req, res) => {
  const { nombre, marca, precio, disponibilidad } = req.body;
  const query = 'INSERT INTO productos (nombre, marca, precio, disponibilidad) VALUES (?, ?, ?, ?)';
  connection.query(query, [nombre, marca, precio, disponibilidad], (err, results) => {
    if (err) {
      console.error('Error al insertar datos: ', err);
      res.status(500).send('Error al insertar datos');
      return;
    }
    res.status(200).send('Datos insertados correctamente');
  });
});

// Endpoint para actualizar datos
app.put('/actualizar-datos/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, marca, precio, disponibilidad } = req.body;
  const query = 'UPDATE productos SET nombre=?, marca=?, precio=?, disponibilidad=? WHERE id=?';
  connection.query(query, [nombre, marca, precio, disponibilidad, id], (err, results) => {
    if (err) {
      console.error('Error al actualizar datos: ', err);
      res.status(500).send('Error al actualizar datos');
      return;
    }
    res.status(200).send('Datos actualizados correctamente');
  });
});

// Endpoint para borrar datos
app.delete('/borrar-datos/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM productos WHERE id=?';
  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error al borrar datos: ', err);
      res.status(500).send('Error al borrar datos');
      return;
    }
    res.status(200).send('Datos borrados correctamente');
  });
});

// Define el puerto en el que escuchará el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
