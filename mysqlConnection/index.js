require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const connectDB = require("./database.js");
const {testDBCOnnection} = require("./database.js")

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

function getData(){
  // get all data
  if(testDBCOnnection=true){
    app.get("/api/get-all-data", (req, res) => {
      const sqlSelect = "SELECT * FROM productos";
      connectDB.query(sqlSelect, (err, result) => {
        res.json(result);
        console.log(res)
      });
    });
  } else{
    console.log("no conecta")
  }
  }



// create new data
app.post("/api/insert", (req, res) => {
  const nombreProducto = req.body.nombre;
  const marcaProducto = req.body.marca;
  const precioProducto = req.body.precio;
  const disponibilidadProducto = req.body.disponibilidad;
  const imagenProducto = req.body.imagen;

  const sqlInser =
    "INSERT INTO productos (nombreProducto, marcaProducto, precioProducto, disponibilidadProducto, imagenProducto) VALUES (?, ?, ?, ?, ?)";
  connectDB.query(sqlInser, [nombreProducto, marcaProducto, precioProducto, disponibilidadProducto, imagenProducto], (err, result) => {
    console.log(err);
  });
});

// delete a data
app.delete("/api/delete/:id", (req, res) => {
  const id = req.params.id;

  const sqlDelete = "DELETE FROM productos WHERE id = ?";
  connectDB.query(sqlDelete, id, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});

// update a data
app.put("/api/update/:id", (req, res) => {
  const id = req.params.id;
  const nombre = req.body.nombre;

  const sqlUpdate = "UPDATE productos SET nombreProducto = ?, marcaProducto = ?, precioProducto = ?, disponibilidadProducto = ?, imagenProducto = ? WHERE id = ?";

  connectDB.query(sqlUpdate, [nombre, id], (err, result) => {
    console.log(err);
  });
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});

