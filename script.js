function selectItem(element) {
    // Remover la clase 'selected' de todos los elementos
    let items = document.querySelectorAll('.header-item');
    items.forEach(item => item.classList.remove('selected'));

    // Agregar la clase 'selected' al elemento seleccionado
    element.classList.add('selected');
}

function goToCV() {
    window.open("https://google.com", "_blank"); // Abre la URL en una nueva pestaña (CV)
}
function goToGithub() {
    window.open("https://github.com/aarnauu", "_blank"); // Abre la URL en una nueva pestaña (Github)
}
function goToLinkedin() {
    window.open("https://google.com", "_blank"); // Abre la URL en una nueva pestaña (Linkedin)
}