var miAuto = {
    marca: "FORD",
    modelo: "RAPTOR",
    annio: "2020",
}
var miFruta = {
    nombre: "Manzana",
    color: "Verde",
    precio: 1200,
}
function imprimirProp(objeto){
    let array_objeto=Object.values(objeto)
    for (i=0; i<array_objeto.length;i++){
       console.log(`La ${array_objeto[i][0]} es ${array_objeto[i][1]}`)
       //console.log(array_objeto)

    }
    console.log ("\n")
}

imprimirProp(miAuto)

