let numeroSecreto =0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario =parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento ('p',`Acertaste el número en ${intentos} ${(intentos ===1) ? 'intento': 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else if(numeroDeUsuario > numeroSecreto){
        //El usuario no acertó.
        asignarTextoElemento ('p','El número Secreto es menor');
    }else {
        asignarTextoElemento('p','El número Secreto es mayor')
    }
    intentos++;
    limpiarCaja();
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 
    //Si ya sorteamos todos los numeros;
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles')
    }else {
        //Si el numeroGenerado esta incluido en la lista

        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else {
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    }
}

function limpiarCaja(){
   let valorCaja= document.querySelector('#valorUsuario');
   valorCaja.value ='';
}

function reiniciarJuego(){
    //limpiar la Caja
    limpiarCaja();
    //Indicar mensaje de intervalo 1 a 10
    //generar el numero aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    
    //dejar el botón de nuevo juego deshabilitado
    document.querySelector('#reiniciar').setAttribute('disabled',true)
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
 }

 condicionesIniciales();

