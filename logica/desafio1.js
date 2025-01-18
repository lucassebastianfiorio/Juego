alert('Bienvenida');

//let nombre = 'Lua';
//let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;

alert('¡Error! Completa todos los campos');

let mensajeDeError = '¡Error! Completa todos los campos';

let nombre = prompt('Ingresa tu nombre');
let edad = prompt('Ingresa tu edad');

if (edad >= 18) {
    alert('Puedes obtener tu licencia de conducir');
}else{
    alert('No puedes obtener tu licencia de conducir');
}