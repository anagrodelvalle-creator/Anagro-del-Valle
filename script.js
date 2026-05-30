// Base de datos de productos (La iremos ampliando cada día)
const inventario = [
    {
        nombre: "Fertilizante Granulado NPK",
        descripcion: "Alta solubilidad para suelos del Valle.",
        tecnologia: "Tecnología de liberación controlada",
        precio: "Consultar precio"
    },
    {
        nombre: "Acondicionador de Suelo",
        descripcion: "Mejora la estructura física y química.",
        tecnologia: "Patente de micronización",
        precio: "Oferta local"
    }
];

function cargarProductos() {
    const contenedor = document.getElementById('grid-productos');
    contenedor.innerHTML = inventario.map(prod => `
        <div class="card">
            <h3>${prod.nombre}</h3>
            <p>${prod.descripcion}</p>
            <small><strong>Tecnología:</strong> ${prod.tecnologia}</small>
            <p class="precio">${prod.precio}</p>
            <button class="btn-comprar">Cotizar ahora</button>
        </div>
    `).join('');
}

window.onload = cargarProductos;