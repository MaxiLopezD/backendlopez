import ProductManager from "./manager/ProductManager";

const productos = new ProductManager();

const env = async () =>{

    let producto = {
        title: title,
        description: description,
        price: price,
        thumbnail: thumbnail,
        code: code,
        stock: stock,
        id: ++id,
        }
    

    let result = await productos.addProduct(producto);
    console.log(result)
    let produc = await productos.consultarProducto()
    console.log(usuarios)

} 

env()