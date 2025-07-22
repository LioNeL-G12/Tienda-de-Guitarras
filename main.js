alert ("Bienvenido a esta tienda de guitarras")


//dinero disponible para el usuario

let dinero = 50000 

const precioGibson = 25000
const precioFender = 40000
const precioLessPaul = 60000

// esta parte le muetra las opciones de compra al comprador
alert ("Elige uno de los siguientes modelos disponibles!:\n\n1. Gibson - $25000\n2. Fender  - $40000\n3. Less Paul - $60000")

let opcion = prompt("Ingrese el numero de la guitarra que desea comprar (1, 2 o 3):")

function eleccion (precio, nombre) {
    if (precio > dinero){
        alert (`Lo sentimos, no hay suficientes fondos para comprar la ${nombre}`)
}   else { 
        alert (`Buena eleccion, gracias por realizar la compra de la ${nombre}.`);
}

}

//Ahora esta parte evalua la eleccion del comprador 

if (opcion == "1"){
    eleccion (precioGibson, "Gibson")
} else if (opcion == "2") {
    eleccion (precioFender, "Fender") 
} else if (opcion == "3"){
    eleccion (precioLessPaul, "LessPaul")
} else {
    alert("Opcion invalida, intente nuevanmente.")
}

