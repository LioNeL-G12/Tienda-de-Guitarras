// Variables y constantes

let dinero = 100000;
let compras = [];
let carrito = [];

const guitarras = [
  { id: 1, nombre: "Gibson", precio: 60000 },
  { id: 2, nombre: "Less Paul", precio: 45000 },
  { id: 3, nombre: "Fender", precio: 50000 },
  { id: 4, nombre: "Ibanez", precio: 30000 },
  { id: 5, nombre: "Yamaha", precio: 25000 },
  { id: 6, nombre: "Jackson", precio: 40000 },
  { id: 7, nombre: "ESP", precio: 55000 },
  { id: 8, nombre: "PRS", precio: 35000 }
];

// Funciones

function mostrarMenu() {
  let mensaje = "🎸 Lista de guitarras disponibles:\n\n";
  for (let guitarra of guitarras) {
    mensaje += `${guitarra.id}. ${guitarra.nombre} - $${guitarra.precio}\n`;
  }
  mensaje += `\n💵 Dinero disponible: $${dinero}`;
  mensaje += `\n\nEscribe el número para agregar al carrito`;
  mensaje += `\nEscribe 'carrito' para ver el carrito`;
  mensaje += `\nEscribe 'eliminar' para quitar un producto`;
  mensaje += `\nEscribe 'comprar' para finalizar la compra`;
  return mensaje;
}
function agregarAlCarrito(guitarra) {
  carrito.push(guitarra);
  let total = carrito.reduce((sum, g) => sum + g.precio, 0);
  alert(
    `🛒 Agregaste una ${guitarra.nombre} al carrito.\n\n` +
    `Total acumulado: $${total}`
  );
  console.log("🧾 Carrito actual:", carrito.map(g => g.nombre));
}

function eliminarDelCarrito(nombre) {
  const index = carrito.findIndex(g => g.nombre.toLowerCase() === nombre.toLowerCase());
  if (index !== -1) {
    const quitada = carrito.splice(index, 1)[0];
    alert(`Quitaste una ${quitada.nombre} del carrito.`);
  } else {
    alert(`No se encontró ninguna ${nombre} en el carrito.`);
  }
}

function mostrarResumen() {
  if (compras.length === 0) {
    alert(`No compraste nada. 💸 Te quedó $${dinero}`);
  } else {
    let resumen = "🛍️ Resumen de tus compras:\n\n";
    for (let guitarra of compras) {
      resumen += `- ${guitarra}\n`;
    }
    resumen += `\n💰 Dinero restante: $${dinero}`;
    alert(resumen);
  }
}


// Programa principal


function iniciarSimulador() {
  alert("Bienvenido a la tienda de guitarras eléctricas!");

  let seguir = true;

  while (seguir) {
    let opcion = prompt(mostrarMenu());

    if (opcion === null) break;

    if (opcion.toLowerCase() === "carrito") {
      if (carrito.length === 0) {
        alert("🛒 El carrito está vacío.");
      } else {
        let contenido = "🛒 Carrito actual:\n";
        for (let g of carrito) {
          contenido += `- ${g.nombre} ($${g.precio})\n`;
        }
        alert(contenido);
      }
      continue;
    }

    if (opcion.toLowerCase() === "eliminar") {
      let nombre = prompt("Ingresa el nombre de la guitarra que deseas quitar del carrito:");
      eliminarDelCarrito(nombre);
      continue;
    }

    if (opcion.toLowerCase() === "comprar") {
      let total = carrito.reduce((sum, g) => sum + g.precio, 0);
      if (total > dinero) {
        alert(`No tienes suficiente dinero. Total del carrito: $${total}, tu dinero: $${dinero}`);
      } else if (carrito.length === 0) {
        alert("No hay productos en el carrito.");
      } else {
        dinero -= total;
        compras = compras.concat(carrito.map(g => g.nombre));
        alert(`Compra realizada por $${total}. Te queda $${dinero}`);
        carrito = [];
        break;
      }
      continue;
    }

    const producto = guitarras.find(g => g.id === Number(opcion));
    if (producto) {
      agregarAlCarrito(producto);
    } else {
      alert("❌ Opción inválida. Intenta nuevamente.");
    }

    seguir = confirm("¿Deseas continuar con tu compra?");
  }

  mostrarResumen();
}

iniciarSimulador();
