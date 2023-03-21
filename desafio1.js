class ProductManager {
    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        let id_producto = this.getProducts().length;

        let producto = {
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
            id: ++id_producto,
            }

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            return console.log("Error: Todos los campos son requeridos");
        }
        let codigo =this.products.find((prod)=> prod.code == producto.code)

        if (codigo) {
            return "Error producto con el mismo codigo ya existe";
        }else {
            this.products.push(producto)
            return this.products
        }
    }

    getProductById(id_product) {
        let producto = this.products.find((producto) => producto.id === id_product);
        //console.log("clg product " + product);
        if (producto) {
            return producto;
        } else {
            return console.log("Product not found");
        }
    }
}

const productos = new ProductManager();
productos.addProduct("iphone 11 pro max", "celular", 500000, "#", 12, 200, 1);
productos.addProduct("iphone 10", "celular", 420000, "#", 20, 500, 2);

console.log(productos.getProductById(200));
