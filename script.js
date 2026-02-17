// Fonction pour ouvrir la modale
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Stop le scroll
    }
}

// Fonction pour fermer la modale
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Relance le scroll
        
        // Arrêter la vidéo
        const iframes = modal.querySelectorAll('iframe');
        iframes.forEach(iframe => { iframe.src = iframe.src; });
    }
}

// Fermer si on clique sur le fond noir
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
};
