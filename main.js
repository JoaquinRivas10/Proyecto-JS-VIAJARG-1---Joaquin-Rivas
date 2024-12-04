//Valores de los paquetes de viaje estandar (7 dias)
const valorViajeBaseSalta = 55000;
const valorViajeBaseNeuquen = 45000;
const valorViajeBaseMendoza = 40000;
const valorViajeBaseJujuy = 50000;

let repetirReserva = true;

//Bucle para realizar reservas
while (repetirReserva) {
    alert("¡Estás más cerca de tu próxima aventura! Completá el siguiente formulario de reserva y preparate para vivir una experiencia inolvidable.");
    alert("Éstos son los valores POR DIA y POR PERSONA de nuestro paquete base (7 días) de cada destino:");
    alert("Salta $55.000");
    alert("Neuquen $45.000");
    alert("Mendoza $40.000");
    alert("Jujuy $50.000");
    let nombreViajero = prompt("Ingresá tu nombre");
    let apellidoViajero = prompt("Ingresá tu apellido");
    let emailViajero = prompt("Ingresá tu mail");
    let cantidadViajeros = parseInt(prompt("¿Cuántas personas viajarán?"));
    let duracionViaje = parseInt(prompt("¿Cuántos días? (7 días mínimo (paquete base), sin descuento. Entre 8 y 12 días, 10% de descuento. Más de 12 días, 20% de descuento)"));

    //Verificamos que ingrese al menos 7 días
    while (duracionViaje < 7) {
        alert("El mínimo de días es de 7 (paquete base)");
        duracionViaje = prompt("¿Cuántos días? (7 días mínimo (paquete base), sin descuento. Entre 8 y 12 días, 10% de descuento. Mís de 12 días, 20% de descuento)");
    }

    let fechaViaje = prompt("Ingresá fecha de viaje (dd-mm-aaaa)");
    let destinoViajero = prompt("Ingresá el destino: Salta, Neuquen, Mendoza o Jujuy").toLowerCase();

    //Verificamos que el nombre del destino sea valido
    while (destinoViajero !== "salta" && destinoViajero !== "neuquen" && destinoViajero !== "mendoza" && destinoViajero !== "jujuy") {
        alert("El destino ingresado es inválido, intentá nuevamente");
        destinoViajero = prompt("Ingresá el destino: Salta, Neuquen, Mendoza o Jujuy").toLowerCase();
    }

    // Constantes para aplicar descuento, entre 7 y 12 dias de viaje, descuento del 10%, mas de 9 dias descuento del 20%.
    const descuentoBajo = 0.10;
    const descuentoAlto = 0.20;

    let descuentoViaje;
    let valorFinalViaje;

    if (duracionViaje > 7 && duracionViaje <= 12) {
        descuentoViaje = descuentoBajo;
        alert("Te ofrecemos un descuento del 10% del total a abonar por superar los 7 días de viaje");
    }
    else if (duracionViaje > 12) {
        descuentoViaje = descuentoAlto;
        alert("Te ofrecemos un descuento del 20% del total a abonar por superar los 12 días de viaje");
    }
    else {
        descuentoViaje = 0;
        alert("Elegiste el paquete base, no podemos ofrecerte un descuento");
    }

    if (destinoViajero === "salta") {
        valorFinalViaje = (valorViajeBaseSalta * duracionViaje) - ((valorViajeBaseSalta * duracionViaje) * descuentoViaje);
        alert(nombreViajero + ", el monto a abonar es: " + valorFinalViaje + "$ por persona");
    }
    else if (destinoViajero === "neuquen") {
        valorFinalViaje = (valorViajeBaseNeuquen * duracionViaje) - ((valorViajeBaseNeuquen * duracionViaje) * descuentoViaje);
        alert(nombreViajero + ", el monto a abonar es: " + valorFinalViaje + "$ por persona");
    }
    else if (destinoViajero === "mendoza") {
        valorFinalViaje = (valorViajeBaseMendoza * duracionViaje) - ((valorViajeBaseMendoza * duracionViaje) * descuentoViaje);
        alert(nombreViajero + ", el monto a abonar es: " + valorFinalViaje + "$ por persona");
    }
    else if (destinoViajero === "jujuy") {
        valorFinalViaje = (valorViajeBaseJujuy * duracionViaje) - ((valorViajeBaseJujuy * duracionViaje) * descuentoViaje);
        alert(nombreViajero + ", el monto a abonar es: " + valorFinalViaje + "$ por persona");
    }

    //Damos la opcion al usuario a que pueda realizar otra reserva automaticamente
    let respuesta = prompt("¿Querés realizar otra reserva? si/no").toLocaleLowerCase();
    if (respuesta !== "si") {
        repetirReserva = false;
        alert("Gracias por confiar en VIAJARG, que tengas buen día!");
    }
}
