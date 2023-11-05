function crearTarjetas() {
    const containerCard = document.getElementById("card");
    product.forEach((cards) => {
      const cardElemento = document.createElement("div");
      cardElemento.classList.add("content");
      const imgElemento = document.createElement("img");
      imgElemento.src = cards.img;
      imgElemento.classList.add("imgElement");
      const tituloElemento = document.createElement("h1");
      const precioElemento = document.createElement("h3");
      const botonElemento = document.createElement("button");
  
      tituloElemento.textContent = cards.nombre;
      imgElemento.textContent = cards.img;
      precioElemento.textContent = cards.precio;
      botonElemento.textContent = 'Comprar';
  
      cardElemento.appendChild(tituloElemento);
      cardElemento.appendChild(imgElemento);
      cardElemento.appendChild(precioElemento);
      cardElemento.appendChild(botonElemento);
      containerCard.appendChild(cardElemento);
  
      botonElemento.addEventListener("click", () => {
        addCar(cards); // Agregar el producto al carrito
  
        // Mostrar una alerta de Sweet Alert
        Swal.fire({
          title: 'Producto agregado al carrito',
          text: cards.nombre,
          icon: 'success',
          confirmButtonText: 'OK'
        });
  
        showCarShop(carShop); // Actualizar el contenido del carrito
      });
    });
  }

  crearTarjetas();