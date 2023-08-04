import { productServices } from "../../service/product-service.js";

(()=>{
    const formulario = document.querySelector("[data-form]");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        const url = document.querySelector("[data-url]").value;
        const nombre = document.querySelector("[data-nombre]").value;
        const categoria = document.querySelector("[data-categoria]").value;
        const precio = document.querySelector("[data-precio]").value;
        const descripcion = document.querySelector("[data-descripcion]").value;
        productServices
            .crearProducto(url, nombre, categoria, precio, descripcion)
            .then((window.location.href = "/assets/html/admin/admin.html"))
            .catch((error) => {
                console.log(error);
                alert("Intente nuevamente.");
            });
    });
})();