const express = require('express');
const path = require('path');

const app = express();

app.get('/public', (req,res) =>{

    res.sendFile(path.resolve(__dirname, './views/index.html')); 
});

app.use(express.static(path.resolve(__dirname, './public')));

app.listen(process.env.PORT || 3005, () => {
    console.log("Servidor corriendo");
});



