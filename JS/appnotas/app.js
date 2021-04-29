let obj_literal = require('./servicios/tareas.json');


let {listarTareas, agregarTarea, borrarTarea} = require('./funcionesDeTareas/funcionesDeTareas');


listarTareas(obj_literal);

let nuevaTarea =
{
    "codigo": 11,
    "titulo": "Testear unidad de producto",
    "estado": "Pendiente"
};

//agregarTarea(obj_literal, nuevaTarea);

borrarTarea(obj_literal, 11);