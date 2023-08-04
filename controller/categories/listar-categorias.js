import obtenerCategorias from "./obtener-categorias.js";

const selector = document.querySelector("[data-categoria]");
let categorias = [];

(async () => {
    try {
        categorias = await obtenerCategorias();
        categorias.forEach((item) => {
            const option = document.createElement("option");
            option.value, (option.textContent = item.nombre);
            selector.appendChild(option);
        });
    } catch (error) {
        console.error("Error en otro archivo:", error);
    }
})();
