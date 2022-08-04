/*var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
}
console.log(miAuto["marca"])
console.log(miAuto.marca)
console.log(miAuto.annio)
console.log(miAuto.detalleDelAuto())
*/


function auto(marca, modelo, annio){
    this.marca=marca;
    this.modelo=modelo;
    this.annio=annio;

}

var listaAutos=[]
var cantidad=prompt("Cuántos autos desea ingresar?")

parseInt(cantidad)
for (let i=0; i<cantidad; i++){
    marca=prompt("Por favor ingrese la marca:");
    modelo=prompt("Por favor ingrese el modelo:");
    annio=prompt("Por favor ingrese el annio:");

    var miAuto=new auto(marca, modelo, annio);
    listaAutos.unshift(miAuto);
}

console.log(listaAutos)