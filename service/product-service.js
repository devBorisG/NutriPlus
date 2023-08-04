const crearProducto = (url, nombre, idCategoria, precio, descripcion) => {
    return fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: uuid.v4(),
            url,
            nombre,
            idCategoria,
            precio,
            descripcion,
        }),
    });
};

const listaProducto = () => {
    return fetch("http://localhost:3000/products").then((response) => response.json());
};

export const productServices = {
    crearProducto,
    listaProducto,
};
