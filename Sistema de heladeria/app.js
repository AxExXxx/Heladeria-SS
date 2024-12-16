let saboresSeleccionados = [];
let metodoPago = "";
let precioTotal = 0;
let pedidosRealizados = 0;

// Mensaje de bienvenida dinámico
const mensajeBienvenida = document.getElementById('mensaje-bienvenida');
const hora = new Date().getHours();
if (hora < 12) mensajeBienvenida.textContent = "🌞 ¡Buenos días! ¿Listo para tu helado?";
else if (hora < 18) mensajeBienvenida.textContent = "☀️ ¡Buenas tardes! Disfruta un dulce descanso.";
else mensajeBienvenida.textContent = "🌙 ¡Buenas noches! Un helado siempre cae bien.";

const botonesSabores = document.querySelectorAll('#sabores-lista button');
const displaySabores = document.getElementById('sabores-seleccionados');
botonesSabores.forEach(button => {
    button.addEventListener('click', () => {
        const sabor = button.dataset.sabor;
        if (!saboresSeleccionados.includes(sabor)) {
            saboresSeleccionados.push(sabor);
            displaySabores.textContent = saboresSeleccionados.join(', ');
        }
    });
});

// Ruleta de la suerte
document.getElementById('girar-ruleta').addEventListener('click', () => {
    const resultado = Math.random() < 0.5 ? "¡Ganaste un 5% de descuento!" : "¡Sigue intentando!";
    document.getElementById('resultado-ruleta').textContent = resultado;
});

// Finalizar compra
document.getElementById('finalizar-compra').addEventListener('click', () => {
    if (saboresSeleccionados.length === 0 || metodoPago === "") {
        alert("Completa todos los campos.");
        return;
    }

    const descuento = saboresSeleccionados.length >= 3 ? 10 : 0;
    const precioBase = parseInt(document.getElementById('tamano').value);
    precioTotal = precioBase - (precioBase * descuento / 100);

    document.getElementById('ticket-sabores').textContent = saboresSeleccionados.join(', ');
    document.getElementById('ticket-tamano').textContent = "Tamaño Seleccionado";
    document.getElementById('ticket-total').textContent = precioTotal;

    pedidosRealizados++;
    document.getElementById('contador').textContent = pedidosRealizados;
    document.getElementById('ticket').classList.remove('oculto');

    alert("¡Compra realizada con éxito! 🎉");
});
