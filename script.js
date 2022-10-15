//Creo la clase del objeto producto con su respectivo contrusctor

class Producto {
    constructor(nombre, precio, tipo) {
        this.nombre  = nombre;
        this.precio  = parseFloat(precio).toFixed(2);
        this.tipo=tipo;
    }    
}



let continuar;//defino la variable que me mantiene dentro del bucle

const productos = [];//defino el array donde quedaran guardados los datos de cada uno de los productos que ingrese

//Creamos la función para cargar los items dentro del array

function CargarCarrito(){

    let carrito = new Producto();

do {    
    
    productos.push(new Producto(prompt("Ingrese nombre del producto"),prompt("Ingrese precio del producto"),prompt("Ingrese tipo")));
    continuar = prompt("desea continuar cargando items? si/no");

}while (continuar == "si");

return carrito;
}

//Llamamos a la funcion
CargarCarrito();

//recorro el array
for (let carrito of productos);

//mostramos en consola
console.log(productos); 
