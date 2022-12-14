let formulario=document.querySelector("#formulario");
let nombreTitular=document.querySelector("#nombreApellido");
let correoElectronico=document.querySelector("#correoElectronico");
let telefono=document.querySelector("#telefono");
let cantidadPersonas=document.querySelector("#cantidadPersonas");
let tipoHabitacion=document.querySelector("#tipoHabitacion");
let fechaIngreso=document.querySelector("#fechaIngreso");
let fechaSalida=document.querySelector("#fechaSalida");
let metodoPago=document.querySelector("#metodoPago");
let datosReserva=document.querySelector("#datosReserva");
let numeroReserva=Math.round(Math.random()*5000);
let boton=document.querySelector("#boton");

formulario.addEventListener("submit", function (e){
    e.preventDefault();
    datosReserva.innerHTML=`
    <div class="alert alert-success" role="alert"><p>¡Gracias por confiar en nosotros! Te enviamos un correo a ${correoElectronico.value} con los datos de tu reserva.
    <br>
    <br>
    Datos de tu reserva:
    <br>
    Nombre del titular: ${nombreTitular.value}
    <br>
    Cantidad de personas: ${cantidadPersonas.value}
    <br>
    Tipo de habitación: ${tipoHabitacion.value}
    <br>
    Fecha de ingreso: ${fechaIngreso.value}
    <br>
    Fecha de salida: ${fechaSalida.value}
    <br>
    Método de pago: ${metodoPago.value}
    <br>
    Número de reserva: ${numeroReserva}
    <br>
    <br>
    No olvides presentarte en recepción al momento de hacer el check-in con los respectivos DNI para validar los datos.</p>
    </div>`;
});

const reservas=[];

boton.addEventListener("click", ()=>{
    const reserva={
        "Nombre del titular": nombreTitular.value,
        "Correo electrónico": correoElectronico.value,
        "Teléfono": telefono.value,
        "Cantidad de personas": cantidadPersonas.value,
        "Tipo de habitación": tipoHabitacion.value,
        "Fecha de ingreso": fechaIngreso.value,
        "Fecha de salida": fechaSalida.value,
        "Método de pago": metodoPago.value,
        "Número de reserva": numeroReserva
    }
    reservas.push(reserva);
    localStorage.setItem("reserva", JSON.stringify(reserva));
    sessionStorage.setItem("reserva", JSON.stringify(reserva));
});

const habitaciones=[{
    id: 1,
    nombre: "Habitación Doble",
    precio: 35
}, {
    id: 2,
    nombre: "Habitación Triple",
    precio: 40
}, {
    id: 3,
    nombre: "Habitación Cuádruple",
    precio: 50
}, {
    id: 4,
    nombre: "Suite",
    precio: 85
}];

const servicios=["Aire acondicionado", "Baño privado", "TV LED con cable", "Cama sommier", "Frigobar", "Pava eléctrica", "Salón desayunador", "Sala de juegos", "Wi-Fi", "Estacionamiento cubierto"];