class ProductManager {
    constructor() {
        this.products = [];
        this.productIdCounter = 1;
    }

    addProduct({ title, description, price, thumbnail, code, stock }) {

    if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error("Todos los campos son obligatorios.");
        return;
    }


    if (this.products.some(product => product.code === code)) {
        console.error("El código del producto ya está en uso.");
        return;
    }


    const newProduct = {
        id: this.productIdCounter++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
    };

    this.products.push(newProduct);
    console.log("Producto agregado correctamente:", newProduct);
}

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);

        if (!product) {
        console.error("Producto no encontrado.");
        return null;
    }

        return product;
    }
}


const productManager = new ProductManager();

    console.log("Productos iniciales:", productManager.getProducts());

    productManager.addProduct({
    title: "camiseta 1",
    description: "Argentina",
    price: 40000,
    thumbnail: "imagen",
    code: "abc123",
    stock: 10,
});

console.log("Productos después de agregar uno:", productManager.getProducts());


    productManager.addProduct({
    title: "camiseta 1",
    description: "Argentina",
    price: 40000,
    thumbnail: "imagen",
    code: "abc123",
    stock: 10,
});


const foundProduct = productManager.getProductById(1);
console.log("Producto encontrado por ID:", foundProduct);


productManager.getProductById(50);