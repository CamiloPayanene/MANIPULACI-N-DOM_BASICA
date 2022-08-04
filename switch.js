opciones=["Piedra", "Papel", "Tijera"]
valorUser=prompt("Por favor escriba una opcion para el humano Piedra, Papel, o Tijera")
ValorMachine=prompt("Por favor escriba una opcion para el computador Piedra, Papel, o Tijera")

function iniciaJuego(human, machine){
    switch (true){
        
        case (human==opciones[0] && machine==opciones[1]):
            console.log("Gana la maquina con " + opciones[1]);
            break;

        case (human==opciones[0] && machine==opciones[2]):
            console.log("Gana el humano con " + opciones[0]);
            break;

        case (human==opciones[1] && machine==opciones[2]):
            console.log("Gana la maquina con " + opciones[2]);
            break;

        case (human==opciones[1] && machine==opciones[0]):
            console.log("Gana el humano con " + opciones[1]);
            break;

        case (human==opciones[2] && machine==opciones[0]):
            console.log("Gana la maquina con " + opciones[0]);
            break;

        case (human==opciones[2] && machine==opciones[1]):
            console.log("Gana el humano " + opciones[2]) ;
            break;   
        
                

        default:
            console.log("Es un empate");
    }
}
iniciaJuego(valorUser, ValorMachine)