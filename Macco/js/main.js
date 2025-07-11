// Datos del menú (puedes cambiarlos)
const platos = [
    { nombre: "Parrillada Don Maco", precio: "$25", imagen: "img/parrillada.jpg" },
    { nombre: "Ceviche Campestre", precio: "$18", imagen: "img/ceviche.jpg" },
    // Agrega más platos...
];

document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.getElementById('menu-container');
    
    platos.forEach(plato => {
        menuContainer.innerHTML += `
            <div class="menu-item">
                <img src="${plato.imagen}" alt="${plato.nombre}">
                <h3>${plato.nombre}</h3>
                <p>${plato.precio}</p>
            </div>
        `;
    });
});