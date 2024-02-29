function selectItem(element) {
    // Remover la clase 'selected' de todos los elementos
    let items = document.querySelectorAll('.header-item');
    items.forEach(item => item.classList.remove('selected'));

    // Agregar la clase 'selected' al elemento seleccionado
    element.classList.add('selected');
}
