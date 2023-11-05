//Creamos un arreglo vacio para el carrito
let carShop = [];

// Creamos la funcion agregar
function addCar (producto, cantidad){
    carShop.push({producto: producto, cantidad:cantidad});
    localStorage.setItem("carShop",JSON.stringify(carShop));
}
//Creamos una funcion para calcular el Total a pagar
function paymentTotal (){
    let total = 0;
    for (let price = 0; price < carShop.length; price++){
        let product = carShop[price].producto;
        let amountProduct = carShop[price].cantidad;
        
        total += product.precio * amountProduct
    };
};
// Creamos una funcion para mostrar el contenido del carrito
function showCarShop (){
    for(let i = 0; i < carShop.length; i++ ){
        let product = carShop[i].producto;
        let amountProduct = carShop[i].cantidad;

        console.log((product.nombre + "- Cantidad: " + amountProduct));
    };
};
//Funcion para remover un articulo del carrito
function deleteProduct (producto){
    for (let i = 0; i < carShop.length; i++){
        if(carShop[i].producto === producto) {
            carShop.splice(i,1);
            break;
        };
    };
    localStorage.setItem("carShop",JSON.stringify(carShop));
};