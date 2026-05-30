// CONFIGURACIÓN DE TU MARCA
const miTelefono = "573106026768"; // REEMPLAZA CON TU CELULAR REAL (Mantén el 57)
const nombreEmpresa = "Anagro del Valle";

// CATÁLOGO REAL DE PRODUCTOS (Glifosol y Amina)
const inventario = [
    {
        nombre: "Glifosol",
        descripcion: "Herbicida sistémico no selectivo para el control eficaz de malezas anuales y perennes. Excelente absorción foliar.",
        tecnologia: "Formulación con surfactantes avanzados para mayor penetración cuticular.",
        presentaciones: ["1 Litro", "4 Litros (Galón)", "20 Litros (Caneca)"],
        precio: "Consultar precio según presentación",
        imagen: "glifosol.jpg"
    },
    {
        nombre: "Amina",
        descripcion: "Herbicida hormonal selectivo para el control contundente de malezas de hoja ancha en cultivos autorizados.",
        tecnologia: "Alta solubilidad y baja volatilidad para aplicaciones seguras y eficientes.",
        presentaciones: ["1 Litro", "4 Litros (Galón)", "20 Litros (Caneca)"],
        precio: "Consultar precio según presentación",
        imagen: "amina.jpg"
    }
];

function cargarProductos() {
    const contenedor = document.getElementById('grid-productos');
    if (!contenedor) return;
    
    contenedor.innerHTML = inventario.map(prod => {
        const mensajeWhatsApp = encodeURIComponent(`Hola ${nombreEmpresa}, deseo cotizar el producto: ${prod.nombre} para mi cultivo.`);
        const enlaceWha = `https://wa.me/${miTelefono}?text=${mensajeWhatsApp}`;

        // Construcción de las etiquetas verdes de las presentaciones
        const etiquetasPresentacion = prod.presentaciones.map(pres => 
            `<span style="background: #e2ede4; color: #2d5a27; padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: bold; margin-right: 5px; display: inline-block; margin-top: 5px; border: 1px solid #2d5a27;">${pres}</span>`
        ).join('');

        return `
            <div class="card" style="border: 1px solid #e0e0e0; padding: 25px; border-radius: 16px; background: #fff; text-align: left; box-shadow: 0 4px 12px rgba(0,0,0,0.05); display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                    <div style="text-align: center; margin-bottom: 15px; background: #fafafa; border-radius: 12px; padding: 10px;">
                        <img src="${prod.imagen}" alt="${prod.nombre}" style="max-width: 100%; height: 220px; object-fit: contain;" onerror="this.style.display='none';">
                    </div>
                    <h3 style="color: #2d5a27; margin: 0 0 10px 0; font-size: 22px; font-weight: bold;">${prod.nombre}</h3>
                    <p style="color: #444; font-size: 14.5px; line-height: 1.5; margin-bottom: 15px;">${prod.descripcion}</p>
                    
                    <div style="margin-bottom: 15px;">
                        <strong style="font-size: 13.5px; color: #333; display: block; margin-bottom: 5px;">Presentaciones disponibles:</strong>
                        <div style="margin-top: 5px;">${etiquetasPresentacion}</div>
                    </div>
                    
                    <p style="font-size: 13px; color: #666; margin: 10px 0; line-height: 1.4;"><small><strong>Tecnología:</strong> ${prod.tecnologia}</small></p>
                </div>
                
                <div>
                    <p class="precio" style="color: #2d5a27; font-weight: bold; font-size: 16px; margin: 20px 0 12px 0; border-top: 1px dotted #ccc; padding-top: 10px;">${prod.precio}</p>
                    <a href="${enlaceWha}" target="_blank" style="text-decoration: none;">
                        <button style="background: #2d5a27; color: white; border: none; padding: 12px; border-radius: 8px; cursor: pointer; width: 100%; font-weight: bold; font-size: 15px;">
                            Cotizar por WhatsApp
                        </button>
                    </a>
                </div>
            </div>
        `;
    }).join('');
}

window.onload = cargarProductos;
