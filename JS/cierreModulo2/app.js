/* En base a las definiciones técnicas tomadas con el equipo deberás declarar la variable autos.
Esta debe contener los siguientes vehículos:

    El primer auto es un Ford Fiesta Azul, del 2019, con 200 kilómetros, cuyo precio es 150000, 
    disponible en 12 cuotas, con la patente APL123 que no está vendido.
El segundo auto es un Toyota Corolla Blanco, del 2019, 0 kilómetros, cuyo precio es 100000, 
disponible en 14 cuotas, con la patente JJK116 que no está vendido.
Cada auto debe tener los siguientes atributos: marca, modelo, precio, km, color, cuotas, anio, patente, vendido. */

/* En esta primera etapa, necesitamos requerir tu módulo autos que se encuentra en la misma carpeta del
archivo donde estás trabajando.Además, necesitarás crear un objeto literal llamado concesionaria que
contendrá todas las funcionalidades que el cliente solicita.Por último, nuestro objeto literal debe
tener un atributo llamado autos que contenga la lista de automóviles importada anteriormente. */

/* Ahora que la concesionaria tiene los autos, es posible crear la funcionalidad buscarAuto que reciba
por parámetro la patente y devuelva el auto al cual le corresponde.En caso de no encontrar el mismo,
deberá retornar null.Para que todo funcione tenés que agregar el código que escribiste en el ejercicio anterior. */



let autos = require('./autos/autos');
let concesionaria = {
    autos: autos,

    buscarAuto: function(patente){
        for(let i = 0; i < autos.length; i++){
            if(autos[i].patente == patente){
                codigo = i;
                return autos[i];
            }else{
                return null;
            }
        }

    },
    venderAuto: function(patente){
       if(this.buscarAuto(patente) != null){
           this.buscarAuto(patente).vendido = true;
       }
    },
    autosParaLaVenta: function(){
        for( i = 0; i < autos.length; i++){
           
    }
}

//console.log(concesionaria.venderAuto("APL123"));
console.log(concesionaria.autosParaLaVenta());