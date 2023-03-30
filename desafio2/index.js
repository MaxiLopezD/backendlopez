import {ProductManager} from "./manager/ProductManager.js";

const product = new ProductManager();

const env = async () =>{

    let product = {
        title: celular,
        description: sansung,
        price: 50000,
        thumbnail: thumbnail,
        code: asd123,
        stock: 25,
        id: ++id,
        }
    
    let result = await product.crearProducto(producto);
    console.log(result)
    let productos = await product.consultarProducto()
    console.log(productos)

} 

env()