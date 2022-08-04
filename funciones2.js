var lista1=[1,2,3,4,5,6,7,8,9,10]
var lista2=[1,2,3,4,5,6,7,8,9,10]
var funcion=prompt("escriba la operacion al realizar: sumar o restar")

function sumar(numero1, numero2){

    return numero1+numero2
}
function restar(numero1, numero2){

    return numero1-numero2
}

function calculadora(numero1, numero2, funcion){
    switch(true){
        case (funcion=='sumar'):
            console.log(sumar(numero1, numero2))
            break
        case(funcion=='restar'):
            console.log(restar(numero1, numero2))
            break
        default:
            console.log("ingrese uan opcion valida")
    }
}

for (var i=0; i<1000; i++){
    
    var numero1=i*2
    var numero2=i*3
    calculadora(parseInt(numero1), parseInt(numero2), funcion)

}



