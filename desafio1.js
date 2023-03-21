class ProductManager {
    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Error: Todos los campos son requeridos");
            return;
        }

        if (this.products.some((product) => product.code === code)) {
            console.log("Error producto con el mismo codigo ya existe");
            return;
        }

        let id_producto = this.getProducts().length;
        console.log(id_producto);
        let producto = {
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
            id: ++id_producto,
        };

        this.products.push(producto);
        return this.products;
    }

    getProductById(id_prod) {
        let product = this.products.find((prod) => prod.id === id_prod);
        console.log("clg product " + product);
        if (product) {
            return console.log(product);
        } else {
            return console.log("Product not found");
        }
    }
}

const productos = new ProductManager();
productos.addProduct("iphone 11 pro max", "", 500000, "", 1, 200);
productos.addProduct("iphone 10", "", 420000, "", 2, 500);

productos.getProductById(2);

//console.log(productos.getProductById(1))
