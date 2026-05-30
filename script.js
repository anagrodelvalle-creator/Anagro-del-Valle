// Base de datos de productos agroquímicos del Valle
const inventario = [
    {
        nombre: "Tronus (Línea Ecoline)",
        descripcion: "Nutrición de alta eficiencia fisiológica para el cultivo de tomate. Optimiza el cuajado y llenado de frutos bajo condiciones del Valle.",
        tecnologia: "Formulación avanzada Ecoline de rápida asimilación celular.",
        precio: "Cotizar por volumen"
    },
    {
        nombre: "Acondicionador de Suelo Organo-Mineral",
        descripcion: "Mejora la estructura física del suelo y optimiza la retención de humedad en zonas cálidas.",
        tecnologia: "Complejo orgánico humificado.",
        precio: "Disponibilidad local"
    }
];

const miTelefono = "573106026768"; 

function cargarProductos() {
    const contenedor = document.getElementById('grid-productos');
    if (!contenedor) return;
    
    contenedor.innerHTML = inventario.map(prod => {
        // Esto crea el mensaje automático que te llegará al celular
        const mensajeWhatsApp = encodeURIComponent(`Hola! Estoy interesando en cotizar el producto: ${prod.nombre} para mi cultivo.`);
        const enlaceWha = `https://wa.me/${miTelefono}?text=${mensajeWhatsApp}`;

        return `
            <div class="card">
                <h3>${prod.nombre}</h3>
                <p>${prod.descripcion}</p>
                <p><small><strong>Fisiología y Tecnología:</strong> ${prod.tecnologia}</small></p>
                <p class="precio" style="color: #2d5a27; font-weight: bold; margin-top: 15px;">${prod.precio}</p>
                <a href="${enlaceWha}" target="_blank" style="text-decoration: none;">
                    <button class="btn-comprar" style="background: #f39c12; color: white; border: none; padding: 10px 15px; border-radius: 6px; cursor: pointer; width: 100%; font-weight: bold; margin-top: 10px;">Cotizar por WhatsApp</button>
                </a>
            </div>
        `;
    }).join('');
}

window.onload = cargarProductos;
