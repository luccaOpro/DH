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

var total 
var ganancias
var buscarAuto = [];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let autos = require("./autos/autos");
let concesionaria = {
    autos: autos,

    buscarAuto: function (patente) {
        for (let i = 0; i < autos.length; i++) {
            if (autos[i].patente == patente) {
                buscarAuto = autos[i];
            } else {
                buscarAuto = null;
            }
        }
        return buscarAuto;
    },
    venderAuto: function (patente) {
        if (this.buscarAuto(patente) != null) {
            this.buscarAuto(patente).vendido = true;
        }
    },
    autosParaLaVenta: function autosParaLaVenta() {
        let paraLaVenta = this.autos.filter(function (auto) {
            return auto.vendido == false;
        });
        return paraLaVenta;
    },
    autosNuevos: function autosNuevos() {
        let autosPVenta = this.autosParaLaVenta();
        let autosNuevos = autosPVenta.filter(function (autosPVenta) {
            return autosPVenta.km <= 100;
        });
        return autosNuevos;
    },
    listaDeVentas: function listaDeVentas() {
        let autosVendidos = this.autos.filter(function (auto) {
            return auto.vendido == true;
        });
        let ganancias = [0];
        autosVendidos.forEach(function (precio) {
            ganancias.push(precio.precio);
        });
        return ganancias;
    },
    totalDeVentas: function totalDeVentas() {
         ganancias = concesionaria.listaDeVentas();
        if (ganancias != 0) {
            total = ganancias.reduce(reducer);
        } else {
            total = 0
        }
        return total
    },
    puedeComprar: function puedeComprar(auto, persona){
        if(persona.capacidadDePagoTotal >= auto.precio && persona.capacidadDePagoEnCuotas >= auto.precio / auto.cuotas ){
            return true;
        }else{
            return false;
        }
    },
    autosQuePuedeComprar: function(persona){

        let autosParaVender = this.autosParaLaVenta();
        let autosPosiblesDeCompra=[];
     
        for (let i=0;i<autosParaVender.length;i++){
          
          if(this.puedeComprar(autosParaVender[i],persona)==true){
              autosPosiblesDeCompra.push(autosParaVender[i]);
          }
     
        }
     
          return autosPosiblesDeCompra;
     
      }
};


//console.log(concesionaria.venderAuto("JJK116"));

//console.log(concesionaria.autosNuevos());
//console.log(concesionaria.autosParaLaVenta());
//console.log(concesionaria.listaDeVentas())
//console.log(concesionaria.totalDeVentas())
/* console.log(concesionaria.puedeComprar({
    marca: "Toyota",
    modelo: "Corolla",
    precio: 100000,
    km: 0,
    color: "Blanco",
    cuotas: 14,
    anio: 2019,
    patente: "JJK116",
    vendido: false,
} ,{
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    }))
 */
