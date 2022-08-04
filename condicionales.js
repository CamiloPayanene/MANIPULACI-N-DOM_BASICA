opciones=["Piedra", "Papel", "Tijera"]
valorUser=prompt("Por favor escriba una opcion para el humano Piedra, Papel, o Tijera")
ValorMachine=prompt("Por favor escriba una opcion para el computador Piedra, Papel, o Tijera")

function iniciaJuego(human, machine){

    if (human==opciones[0] && machine==opciones[1]) {
        console.log("Gana la maquina con " + opciones[1]) 
    } else if (human==opciones[0] && machine==opciones[2]) {
        console.log("Gana el humano con " + opciones[0]) 
    } else if (human==opciones[1] && machine==opciones[2]) {
        console.log("Gana la maquina con " + opciones[2])
    } else if (human==opciones[1] && machine==opciones[0]) {
        console.log("Gana el humano con " + opciones[1]) 
    } else if (human==opciones[2] && machine==opciones[0]) {
        console.log("Gana la maquina con " + opciones[0]) 
    } else if (human==opciones[2] && machine==opciones[1]) {
        console.log("Gana el humano " + opciones[2]) 

    }else {
        console.log("Es un empate")
    }
}


