import {ProductManager} from "./manager/ProductManager.js";

const product = new ProductManager();

const env = async () =>{

    let product = {
        title: "celular",
        description: "sansung",
        price: 50000,
        thumbnail: "SIN IMAGEN",
        code: "asd123",
        stock: 25,
        id: ++id,
        }
    
    let result = await product.AddProducto(producto);
    console.log(result)
    let productos = await product.AddProducto()
    console.log(productos)

} 

env()