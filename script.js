class Producto {
    constructor(nombre, precio, tipo) {
        this.nombre  = nombre;
        this.precio  = parseFloat(precio);
        this.tipo=tipo;
    }    
}



let continuar;
const productos = [];
do {    
    
    productos.push(new Producto(prompt("Ingrese nombre del producto"),prompt("Ingrese precio del producto"),prompt("Ingrese tipo")));
    continuar = prompt("desea continuar cargando items? si/no");

}while (continuar == "si");




for (const producto of productos);

console.log(productos);