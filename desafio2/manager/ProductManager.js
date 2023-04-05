import fs from 'fs';

const path = './files/Productos.json'

export class ProductManager {

    consultarProductos = async () => {
        if (fs.existsSync(path)) {
            const data = await fs.promises.readFile(path, 'utf-8')
            const productos = JSON.parse(data);
            return productos;
        } else {
            return [];
        }
    }
    
    AddProducto = async (producto) => {
        const productos = await this.consultarProducto();

        if (this.Productos.length === 0) {
            producto.id = 1
        } else {
            producto.id = productos[productos.length - 1].id + 1;
        }
        productos.push(producto);

        await fs.promises.writeFile(path, JSON.stringify(productos, null, '\t'))
        return producto;
    }

}
