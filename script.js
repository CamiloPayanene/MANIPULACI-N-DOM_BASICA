const h1=document.querySelector('h1');
const form=document.querySelector('#form');
const input1=document.querySelector('#calculo1');
const input2=document.querySelector('#calculo2');
const btn=document.querySelector('#btnCalcular');
const pResult=document.querySelector('#result');

form.addEventListener('submit', btnOnesubmit)

function sumarInputs(){

    var suma = parseInt(input1.value)+parseInt(input2.value);
    return suma;
}
function btnOnesubmit(event){
    event.preventDefault()
    console.log("Estoy escuchando el click");
    pResult.innerText="El resultado es: "+sumarInputs();

    
}

