// Fonction pour ouvrir une modale spécifique
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    document.body.style.overflow = "hidden"; // Empêche le scroll en arrière-plan
}

// Fonction pour fermer une modale spécifique
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.style.overflow = "auto";
    
    // Stop toutes les vidéos en cours lors de la fermeture
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        const src = iframe.src;
        iframe.src = src; // Réinitialise l'URL pour couper le son
    });
}

// Fermer si l'utilisateur clique en dehors de la fenêtre blanche
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}
