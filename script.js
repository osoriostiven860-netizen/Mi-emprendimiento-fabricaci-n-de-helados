function mostrarMensaje() {
    alert("Gracias por contactar a Helados Osorio 🍦.Pronto responderemos tu mensaje.");
}
const enlaces = document.querySelectorAll("nav a");
enlaces.forEach(enlace => {
    if (enlace.href === window.location.href) {
        enlace.style.backgroundColor = "#ff5d8f";
        enlace.style.color = "white";
        enlace.style.padding = "5px 10px";
        enlace.style.borderRadius = "5px";
    }
});
function mostrarProducto (sabor) {
    alert("Has seleccionado helado de " + sabor + ". Elaborado con ingredientes naturales.");
}
const hora = new Date().getHours();
let saludo = "";
if (hora < 12) {
    saludo = "Buenos días";
} else if (hora < 18) {
    saludo = "Buenas tardes";
} else {
    saludo = "Buenas noches";
}
console.log(saludo + ", bienvenido a Helados Osorio🍦");