let producto1 = { nombre: "Remera Levis", precio: 30 };
let producto2 = { nombre: "Pantalon Cargo ", precio: 15};
let producto3 = { nombre: "Zapatillas DC ", precio: 45};

let carrito = [];
let total = 0;
function mostrarProductos() {
    alert("Productos disponibles:\n1. " + producto1.nombre + " - $" + producto1.precio +
          "\n2. " + producto2.nombre + " - $" + producto2.precio +
          "\n3. " + producto3.nombre + " - $" + producto3.precio);
}

function agregarAlCarrito(producto) {
    carrito.push(producto);
    total += producto.precio;
    alert(producto.nombre  +   " se ha agregado al carrito con exito!.");
}

function mostrarCarrito() {
    alert("Carrito de compras:");
    for (let i = 0; i < carrito.length; i++) {
        alert((i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio);
    }
    alert("Total: $" + total);
}

function tiendaVirtual() {
    while (true) {
        let opcion = prompt("Seleccione una opción:\n1. Remera Levis\n2. Pantalon Cargo\n3. Zapatillas DC\n4. Mostrar Carrito\n5. Salir");

        switch (opcion) {
            case "1":
                agregarAlCarrito(producto1);
                break;
            case "2":
                agregarAlCarrito(producto2);
                break;
            case "3":
                agregarAlCarrito(producto3);
                break;
            case "4":
                mostrarCarrito();
                break;
            case "5":
                alert("Gracias por visitar nuestra tienda virtual.");
                return;
            default:
                alert("Opción inválida. Por favor, elija una opción válida.");
        }
    }
}
tiendaVirtual();