var estudiantes =["Maria", "Sergio","Rosa", "Daniel"];

/*function saludarEstudiantes(){

    for (let estudiante=0; estudiante<estudiantes.length; estudiante++){
        console.log(`Hola ${estudiantes[estudiante]}`);
    }
}

saludarEstudiantes()*/

function saludar(estudiante){

    alert(`Hola, ${estudiante}`)
}

var contador=0;
while(contador<estudiantes.length){
    saludar(estudiantes[contador])
    contador++
}


estudiantes.shift()

console.log(estudiantes.length)