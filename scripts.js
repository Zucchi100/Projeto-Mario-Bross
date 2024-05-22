
const form = document.querySelector(".formulario-fale-conosco");
const mascara = document.querySelector(".mascara-formulario");  



function mostrarform() {
    form.style.left = "40px";
    form.style.transform = "translateX (-50%)";
    mascara.style.visibility = "visible";

}
function esconderform() {
    form.style.left = "-300px";
    form.style.transform = "translateX (0)";
    mascara.style.visibility = "hidden";
   
}


setTimeout(function() {
    alert ("\n Olá, está com problemas? Empresa DS está a disposição, Entre em Contato, em breve responderemos!")
}, 5000);

