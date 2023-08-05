import { productServices } from "../../../service/product-service.js";

const creatTarjeta = (url, nombre, precio) => {
    const tarjeta = document.createElement("div");
    const content = `
    <p class="prodcutos__iconos">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
    class="lucide lucide-edit">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
    class="lucide lucide-trash-2">
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    <line x1="10" x2="10" y1="11" y2="17" />
    <line x1="14" x2="14" y1="11" y2="17" />
    </svg>
    </p>
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

const contenido = document.querySelector("[data-contenido]");

(async () => {
    try {
        const data = await productServices.listaProducto();
        data.forEach(({ url, nombre, precio }) => {
            const nuevaTarjeta = creatTarjeta(url, nombre, precio);
            contenido.appendChild(nuevaTarjeta);
        });
    } catch (error) {
        console.log("Error al cargar los productos:", error);
        alert(error);
    }
})();
