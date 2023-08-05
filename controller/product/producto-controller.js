import obtenerCategorias from "../categories/obtener-categorias.js";
import { productServices } from "../../service/product-service.js";

const crearTarjeta = (url, nombre, precio) => {
    const tarjeta = document.createElement("div");
    const content = `
    <img src="${url}" alt="${nombre}" class="productos__imagen">
    <p class="productos__descripcion">${nombre}</p>
    <p class="productos__precio">$${precio} COP</p>
    <a href="#">
    <p class="productos__detalle">Ver Producto</p>
    </a>
    `;
    tarjeta.classList.add("productos__tarjeta");
    tarjeta.innerHTML = content;
    return tarjeta;
};

const proteinas = document.querySelector("[data-proteinas]");
const creatinas = document.querySelector("[data-creatinas]");
const suplementos = document.querySelector("[data-suplementos]");
let categorias = [];

(async () => {
    try {
        categorias = await obtenerCategorias();
    } catch (error) {
        console.error("Error en otro archivo:", error);
    }

    try {
        const data = await productServices.listaProducto();
        data.forEach(({ idCategoria, url, nombre, precio }) => {
            const nuevaTarjeta = crearTarjeta(url, nombre, precio);
            const categoria = categorias.find(
                (item) => item.id == idCategoria
            )?.nombre;
            const containerElement = getCategoriaContainer(categoria);

            if (
                categoria &&
                containerElement &&
                containerElement.childElementCount < 6
            ) {
                containerElement.appendChild(nuevaTarjeta);
            }
        });
    } catch (error) {
        console.log("Error al cargar los productos:", error);
        alert(error);
    }
})();

const getCategoriaContainer = (categoria) => {
    switch (categoria) {
        case "Proteina":
            return proteinas;
        case "Creatina":
            return creatinas;
        case "Suplemento":
            return suplementos;
        default:
            return null;
    }
};
