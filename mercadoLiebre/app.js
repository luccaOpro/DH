const express = require('express');
const path = require('path');

const app = express();

app.get('/mercadoLiebre', (req,res) =>{
    //res.send("Hola Mundo");  // Permite enviar texto o codigo HTML
    res.sendFile(path.resolve(__dirname, './views/index.html'));  // Permite enviar un archivo HTML
});

app.use(express.static(path.resolve(__dirname, './public')));

app.listen(3005, () => {
    console.log("Servidor corriendo");
});



