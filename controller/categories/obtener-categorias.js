import { categoryServices } from "../../service/category-service.js";

const obtenerCategorias = async () => {
    try {
        const data = await categoryServices.listaCategorias();
        const categorias = [];
        data.forEach(({ id, nombre }) => {
            categorias.push({id,nombre});
        });
        return categorias;
    } catch (error) {
        console.error("Error al obtener categorías:", error);
        throw error; // Relanzamos el error para que el consumidor pueda manejarlo
    }
};

export default obtenerCategorias;
