const { Console } = require('console');
let fs = require('fs');

function listarTareas(tareas){
    tareas.forEach(element => {
        console.log(element.tareas);
    });
}

function agregarTarea(tareas, nuevaTarea){
    tareas.push(nuevaTarea);
    fs.writeFileSync('./servicios/tareas.json', JSON.stringify(tareas));
}

function borrarTarea(Tareas, cod){
   tareas2 = tareas.filter(function(elemento){
        return elemento.codigo!=cod;
    });
    fs.writeFileSync('./servicios/tareas.json', JSON.stringify(tareas2));
}
module.exports = {listarTareas, agregarTarea, borrarTarea};
