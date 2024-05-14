// Importa los módulos necesarios
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcryptjs");

// Crea una instancia de Express
const app = express();
app.use(express.json()); // Permite el uso de JSON en las solicitudes
app.use(cors()); // Habilita el CORS

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  pasword: "",
  database: "sneakstil",
});

// Conexión a la base de datos
connection.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos: ", err);
    return;
  }
  console.log("Conexión exitosa a la base de datos");
});

// Endpoint para obtener datos
app.get("/datos", (req, res) => {
  connection.query("SELECT * FROM productos", (err, results) => {
    if (err) {
      console.error("Error al realizar la consulta: ", err);
      res.status(500).send("Error al obtener datos");
      return;
    }
    res.json(results);
  });
});

// Endpoint para insertar datos
app.post("/insertar-datos", (req, res) => {
  const { nombre, marca, precio, disponibilidad } = req.body;
  const query =
    "INSERT INTO productos (nombre, marca, precio, disponibilidad) VALUES (?, ?, ?, ?)";
  connection.query(
    query,
    [nombre, marca, precio, disponibilidad],
    (err, results) => {
      if (err) {
        console.error("Error al insertar datos: ", err);
        res.status(500).send("Error al insertar datos");
        return;
      }
      res.status(200).send("Datos insertados correctamente");
    }
  );
});

// Endpoint para actualizar datos
app.put("/actualizar-datos/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, marca, precio, disponibilidad } = req.body;
  const query =
    "UPDATE productos SET nombre=?, marca=?, precio=?, disponibilidad=? WHERE id=?";
  connection.query(
    query,
    [nombre, marca, precio, disponibilidad, id],
    (err, results) => {
      if (err) {
        console.error("Error al actualizar datos: ", err);
        res.status(500).send("Error al actualizar datos");
        return;
      }
      res.status(200).send("Datos actualizados correctamente");
    }
  );
});

// Endpoint para borrar datos
app.delete("/borrar-datos/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM productos WHERE id=?";
  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error al borrar datos: ", err);
      res.status(500).send("Error al borrar datos");
      return;
    }
    res.status(200).send("Datos borrados correctamente");
  });
});

//Endpoint para obtener datos de cliente
app.get("/datos-cliente", (req, res) => {
  connection.query("SELECT * FROM clientes", (err, results) => {
    if (err) {
      console.error("Error al realizar la consulta: ", err);
      res.status(500).send("Error al obtener datos de clientes");
      return;
    }
    res.json(results);
  });
});

app.post("/insertar-cliente", (req, res) => {
  const { nombre, email, pasword, admin } = req.body;
  const query =
    "INSERT INTO clientes (nombre, email, pasword) VALUES (?, ?, ?)";
  connection.query(query, [nombre, email, pasword, admin], (err, results) => {
    if (err) {
      console.error("Error al insertar datos: ", err);
      res.status(500).send("Error al insertar datos en clientes");
      return;
    }
    res.status(200).send("Datos insertados correctamente en clientes");
  });
});

app.put("/actualizar-cliente/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, email, pasword } = req.body;
  const query =
    "UPDATE clientes SET nombre=?, email=?, pasword=?, admin=? WHERE id=?";
  connection.query(
    query,
    [nombre, email, pasword, admin, id],
    (err, results) => {
      if (err) {
        console.error("Error al actualizar datos: ", err);
        res.status(500).send("Error al actualizar datos en clientes");
        return;
      }
      res.status(200).send("Datos actualizados correctamente en clientes");
    }
  );
});

app.delete("/borrar-cliente/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM clientes WHERE id=?";
  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error al borrar datos: ", err);
      res.status(500).send("Error al borrar datos en clientes");
      return;
    }
    res.status(200).send("Datos borrados correctamente en clientes");
  });
});

// Endpoint para obtener datos de la cesta
app.get("/datos-cesta", (req, res) => {
  connection.query("SELECT * FROM cesta", (err, results) => {
    if (err) {
      console.error("Error al realizar la consulta: ", err);
      res.status(500).send("Error al obtener datos de la cesta");
      return;
    }
    res.json(results);
  });
});

// Endpoint para insertar datos en la cesta
app.post("/insertar-datos-cesta", (req, res) => {
  const { nombre, marca, precio, disponibilidad } = req.body;
  const query =
    "INSERT INTO cesta (nombre, marca, precio, disponibilidad) VALUES (?, ?, ?, ?)";
  connection.query(
    query,
    [nombre, marca, precio, disponibilidad],
    (err, results) => {
      if (err) {
        console.error("Error al insertar datos: ", err);
        res.status(500).send("Error al insertar datos en la cesta");
        return;
      }
      res.status(200).send("Datos insertados correctamente en la cesta");
    }
  );
});

// Endpoint para actualizar datos en la cesta
app.put("/actualizar-datos-cesta/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, marca, precio, disponibilidad } = req.body;
  const query =
    "UPDATE cesta SET nombre=?, marca=?, precio=?, disponibilidad=? WHERE id=?";
  connection.query(
    query,
    [nombre, marca, precio, disponibilidad, id],
    (err, results) => {
      if (err) {
        console.error("Error al actualizar datos: ", err);
        res.status(500).send("Error al actualizar datos en la cesta");
        return;
      }
      res.status(200).send("Datos actualizados correctamente en la cesta");
    }
  );
});

// Endpoint para borrar datos de la cesta
app.delete("/borrar-datos-cesta/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM cesta WHERE id=?";
  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error al borrar datos: ", err);
      res.status(500).send("Error al borrar datos en la cesta");
      return;
    }
    res.status(200).send("Datos borrados correctamente en la cesta");
  });
});

// Endpoint para validar el login
app.post("/login", (req, res) => {
  const { nombre, pasword } = req.body;
  
  const query = `
    SELECT * FROM admin WHERE nombre = ? AND pasword = ?
  `;
  
  connection.query(query, [nombre, pasword], (err, results) => {
    if (err) {
      console.error("Error al realizar la consulta: ", err);
      res.status(500).json({ success: false, message: "Error al iniciar sesión" });
      return;
    }
    if (results.length === 1) {
      res.status(200).json({ success: true, message: "Inicio de sesión como administrador exitoso" });
    } else {
      const clienteQuery = `
        SELECT * FROM clientes WHERE nombre = ? AND pasword = ?
      `;
      connection.query(clienteQuery, [nombre, pasword], (err, results) => {
        if (err) {
          console.error("Error al realizar la consulta: ", err);
          res.status(500).json({ success: false, message: "Error al iniciar sesión" });
          return;
        }
        if (results.length === 1) {
          res.status(200).json({ success: true, message: "Inicio de sesión como cliente exitoso" });
        } else {
          res.status(404).json({ success: false, message: "Usuario no encontrado" });
        }
      });
    }
  });
});



// Define el puerto en el que escuchará el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
