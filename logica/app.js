//Variables


let numeroMaximoPosible = 100;


//Math.floor redondea hacia abajo
//Math.random genera un numero aleatorio entre 0 y 1
//Multiplicamos por 10 para que el numero sea entre 0 y 9
//Sumamos 1 para que el numero sea entre 1 y el maximo posible

let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible) + 1;

//Imprimir en consola el numero secreto
console.log('Numero secreto: ' + numeroSecreto);


let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;


//Mientras se cumpla la condicion se ejecutara el codigo
while(numeroUsuario != numeroSecreto){

    //Solicitar un numero al usuario.
    //parseInt convierte el string a numero

    let numeroUsuario = parseInt(prompt(`Adivina el numero secreto entre 1 y ${numeroMaximoPosible}`));

    //Imprimir en consola el tipo de dato de la variable
    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {

        //Mensaje de alerta con operador ternario
        alert(`Acertaste, el numero es ${numeroSecreto} y lo lograste en ${intentos} ${intentos > 1 ? 'veces' : 'vez'}`);

        //Cuando se cumple la condicion se sale del bucle
        break;
    }else{
        if(numeroUsuario > numeroSecreto){
            alert('El numero debe ser menor');
        }else{
            alert('El numero debe ser mayor');
        }
        //Incrementa el contador de intentos cuando no acierta
        intentos++;
        //Cambiar la palabra a plural si el contador de intentos es mayor a 1
        palabraVeces = 'veces';
    }


    //Límite de intentos.
    if (intentos > maximosIntentos) {
        alert(`Lo siento, has llegado al limite de ${maximosIntentos} intentos.`);
        break;
    }
   
}



