"use strict";

var express = require('express');

var app = express();
var saludo = "Bienvenido/a, ahora estamos en tu perfil";
var producto = {
  tipoProducto: null,
  precio: null,
  cantidad: null
};
app.get('/producto/agregar', function (req, res) {
  res.send(producto);
});
app.listen(8000, function () {
  console.log('Levantando un servidor con Express');
});