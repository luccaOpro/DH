const express = require('express')
const app = express();
let saludo = "Bienvenido/a, ahora estamos en tu perfil"
let producto = {tipoProducto: null, precio: null, cantidad: null}
app.get('/producto/agregar',(req,res)=>{
    res.send(producto);
});

app.listen(8000, () => {
    console.log('Levantando un servidor con Express')
}); 