function selectItem(element) {
    // Remover la clase 'selected' de todos los elementos
    let items = document.querySelectorAll('.header-item');
    items.forEach(item => item.classList.remove('selected'));

    // Agregar la clase 'selected' al elemento seleccionado
    element.classList.add('selected');
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

function goToCV() {
    window.open("https://google.com", "_blank"); // Abre la URL en una nueva pestaña
}

function goToGithub() {
    window.open("https://github.com/aarnauu", "_blank"); // Abre la URL en una nueva pestaña
}

function goToLinkedin() {
    window.open("https://www.linkedin.com/in/arnau-boronat-2a758a2b8/", "_blank"); // Abre la URL en una nueva pestaña
}

//popup mas info
document.addEventListener('DOMContentLoaded', function() {
    // Agregar un controlador de eventos de clic al botón "Más Información"
    document.getElementById("mas-info-btn").addEventListener('click', function(event) {
        var popup = document.getElementById("popup");
        popup.style.display = "block";
    });

    // Agregar un controlador de eventos de clic al documento
    document.addEventListener('click', function(event) {
        var popup = document.getElementById("popup");
        var targetElement = event.target; // Elemento en el que se hizo clic

        // Verificar si el objetivo del clic está fuera del popup y del botón "Más Información"
        if (!popup.contains(targetElement) && targetElement.id !== "mas-info-btn") {
            popup.style.display = "none"; // Ocultar el popup si el clic ocurrió fuera de él y fuera del botón
        }
    });
});