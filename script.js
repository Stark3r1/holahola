// script.js

function mostrarTexto(imgElement) {
    let perfil = imgElement.parentElement;
    if (perfil.id === 'profile1') {
        imgElement.style.display = 'none';
        perfil.querySelector('p').textContent = 'Mentira >:v';
    }
}

function redirigirPagina() {
    // Redirigir a la nueva página
    window.location.href = 'index2.html'; // Cambia 'nueva_pagina.html' por la URL deseada
}
