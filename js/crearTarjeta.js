function crearTarjetas() {
  const containerCard = document.getElementById("container-principal");
  fetch("./js/inventario.json")
    .then(response => response.json())
    .then(data => {
      data.forEach(cards => {
        const cardElemento = document.createElement("div");
        cardElemento.classList.add("content");
        const imgElemento = document.createElement("img");
        imgElemento.src = cards.imagen;
        imgElemento.classList.add("imgElement");
        const tituloElemento = document.createElement("h1");
        const precioElemento = document.createElement("h3");
        const botonElemento = document.createElement("button");
        botonElemento.classList.add("btn");
        const botonEliminar = document.createElement("button");
        botonEliminar.classList.add("btn");
        tituloElemento.textContent = cards.name;
        imgElemento.textContent = cards.img;
        precioElemento.textContent = cards.precio;
        botonElemento.textContent = "Comprar";
        botonEliminar.textContent = "Eliminar";
        cardElemento.appendChild(tituloElemento);
        cardElemento.appendChild(imgElemento);
        cardElemento.appendChild(precioElemento);
        cardElemento.appendChild(botonElemento);
        cardElemento.appendChild(botonEliminar);
        containerCard.append(cardElemento);
        botonElemento.addEventListener("click", () => {
          addCar(cards); // Agregar el producto al carrito
          // Mostrar una alerta de Sweet Alert
          Swal.fire({
            title: "Producto agregado al carrito",
            text: cards.name,
            icon: 'success',
            confirmButtonText: 'OK'
          });
        });
        botonEliminar.addEventListener("click", () => {
          eliminarDelCarrito(cards);
          Swal.fire({
            title: 'Producto eliminado',
            text: cards.nombre,
            icon: 'warning',
            confirmButtonText: 'OK'
          });
        });
      });
    })
    .catch(error => {
      console.error("Error:", error);
    });
}
crearTarjetas();


// function crearTarjetas() {
//   const containerCard = document.getElementById("container-principal");
//   fetch("./js/inventario.json")
//     .then(response => response.json())
//     .then(data => {
//       data.forEach(cards => {
//         const cardElemento = document.createElement("div");
//         cardElemento.classList.add("content");
//         const imgElemento = document.createElement("img");
//         imgElemento.setAttribute("src", cards.imagen); // Corrección aquí
//         imgElemento.classList.add("imgElement");
//         const tituloElemento = document.createElement("h1");
//         const precioElemento = document.createElement("h3");
//         const botonElemento = document.createElement("button");
//         botonElemento.classList.add("btn");
//         const botonEliminar = document.createElement("button");
//         botonEliminar.classList.add("btn");
//         tituloElemento.textContent = cards.nombre;
//         precioElemento.textContent = cards.precio;
//         botonElemento.textContent = "Comprar";
//         botonEliminar.textContent = "Eliminar";
//         cardElemento.appendChild(tituloElemento);
//         cardElemento.appendChild(imgElemento);
//         cardElemento.appendChild(precioElemento);
//         cardElemento.appendChild(botonElemento);
//         cardElemento.appendChild(botonEliminar);
//         containerCard.appendChild(cardElemento);
//         botonElemento.addEventListener("click", () => {
//           addCar(cards);
//           Swal.fire({
//             title: 'Producto agregado al carrito',
//             text: cards.nombre,
//             icon: 'success',
//             confirmButtonText: 'OK'
//           });
//         });
//         botonEliminar.addEventListener("click", () => {
//           deleteProduct(cards);
//           Swal.fire({
//             title: 'Producto eliminado',
//             text: cards.nombre,
//             icon: 'warning',
//             confirmButtonText: 'OK'
//           });
//         });
//       });
//     })
//     .catch(error => {
//       console.error("Error:", error);
//     });
// }
// showCarShop(carShop);
// crearTarjetas();

