import fs from 'fs';

const path = './files/Productos.json'

export default class ProductManager {

    consultarProductos = async () => {
        if (fs.existsSync(path)) {
            const data = await fs.promises.readFile(path, 'utf-8')
            const users = JSON.parse(data);
            return users;
        } else {
            return [];
        }
    }
    crearProducto = async (producto) => {
        const productos = await this.consultarProducto();

        if (this.Productos.length === 0) {
            usuario.id = 1
        } else {
            producto.id = productos[productos.length - 1].id + 1;
        }
        producto.push(producto);

        await fs.promises.writeFile(path, JSON.stringify(productos, null, '\t'))
        return producto;
    }

}
