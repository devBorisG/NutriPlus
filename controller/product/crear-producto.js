import { productServices } from "../../service/product-service.js";
import obtenerCategorias from "../categories/obtener-categorias.js";

(() => {
    const formulario = document.querySelector("[data-form]");

    formulario.addEventListener("submit", async (e) => {
        e.preventDefault();
        const url = document.querySelector("[data-url]").value;
        const nombre = document.querySelector("[data-nombre]").value;
        const categoria = document.querySelector("[data-categoria]").value;
        let idCategoria;
        try {
            const categorias = await obtenerCategorias();
            const categoriaEncontrada = categorias.find(({ nombre }) => categoria === nombre);
            if (categoriaEncontrada) {
                idCategoria = categoriaEncontrada.id;
            }
        } catch (error) {
            console.log("Error al obtener las categorias", error);
            alert('Por favor, intente nuevamente.');
            return; // Salir de la función en caso de error
        }
        const precio = document.querySelector("[data-precio]").value;
        const descripcion = document.querySelector("[data-descripcion]").value;
        try {
            await productServices.crearProducto(url, nombre, idCategoria, precio, descripcion);
            window.location.href = "/assets/html/admin/admin.html"; // Redirección después de crear el producto
        } catch (error) {
            console.log(error);
            alert("Intente nuevamente.");
        }
    });
})();