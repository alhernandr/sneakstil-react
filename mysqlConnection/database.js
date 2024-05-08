const mysql = require('mysql2')

const connectDB = mysql.createPool({
     host: 'localhost', // host name
     user: 'root', // user name
     password: "", // password
     database: "sneakstil" // database name
});

module.exports = connectDB;

// function testDBconnection() {
//      try {
//           // Intenta hacer ping a la base de datos
//           connection.ping();
//           console.log('Conectado a la base de datos MySQL.');
//         } catch (err) {
//           console.error('Error al verificar la conexión:', err);
//           // Aquí puedes implementar la lógica para manejar el error, como intentar reconectar
//         }
//       }
