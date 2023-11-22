//Creamos un arreglo vacio para el carrito
let carShop = [];

// Creamos la funcion agregar
function addCar(producto) {
    // Obtener los datos del carrito del almacenamiento local
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
    // Agregar el producto al carrito
    carrito.push(producto);
  
    // Guardar los datos actualizados del carrito en el almacenamiento local
    localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrarCarrito(carShop);
};
// Eliminar producto del carrito
function eliminarDelCarrito(producto) {
    // Obtener los datos del carrito del almacenamiento local
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
    // Encontrar el índice del producto que deseas eliminar
    const index = carrito.findIndex(item => item.id === producto.id);
  
    // Verificar si se encontró el producto
    if (index !== -1) {
      // Eliminar el producto del array del carrito
      carrito.splice(index, 1);
  
      // Guardar los datos actualizados del carrito en el almacenamiento local
      localStorage.setItem("carrito", JSON.stringify(carrito));
  
      // Mostrar nuevamente el contenido del carrito
    }
    mostrarCarrito();
  }

  function mostrarCarrito() {
    // Obtener el contenedor donde se mostrará el contenido del carrito
    const containerCarrito = document.getElementById("container-carrito");
    
    // Limpiar el contenedor
    containerCarrito.innerHTML = "";
  
    // Obtener los datos del carrito del almacenamiento local
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
    // Recorrer los productos del carrito y crear elementos HTML para mostrarlos
    carrito.forEach(producto => {
      const productoElemento = document.createElement("div");
      productoElemento.textContent = producto.nombre;
  
      // Agregar el elemento del producto al contenedor
      containerCarrito.appendChild(productoElemento);
    });
}

// Llamar a la función para mostrar el contenido del carrito al cargar la página
mostrarCarrito();