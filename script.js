
//Traemos la información de los input a travez de los getElement
let boton = document.getElementById("boton");
let input = document.getElementById("nombre");
let inputTipo=document.getElementById("tipo");
let inputPrecio =document.getElementById("precio");
let inputCantidad = document.getElementById("cantidad");
let botonStorage = document.getElementById("botonCarrito");



//implementando sweet alert
boton.onclick = ()=>{
    swal("Buen trabajo!", "Lo haz agregado con éxito", "success");

}


//Creo la clase del objeto producto con su respectivo contrusctor.

class Producto {
    constructor(nombre, precio, tipo, cantidad) {
        this.nombre  = nombre;
        this.precio  = parseFloat(precio).toFixed(2);
        this.tipo=tipo;
        this.cantidad =cantidad;
    }    
}


let carrito = []
//cargamos de a uno los productos en el storage con formato Json
boton.addEventListener('click', (e) =>
{
    e.preventDefault();
 let producto = new Producto(input.value,parseInt(inputCantidad.value),inputTipo.value,parseFloat(inputPrecio.value));
 localStorage.setItem("producto", JSON.stringify(producto))
  carrito.push(producto);
 
})

//generamos el carrito con los productos cargados anteriormente
botonStorage.addEventListener('click', () =>
{
    
   localStorage.setItem("carrito", JSON.stringify(carrito))
  
}

   


)
