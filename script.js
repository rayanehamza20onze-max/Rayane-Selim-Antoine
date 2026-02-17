// Attendre que toute la page soit chargée
document.addEventListener('DOMContentLoaded', () => {
    console.log("Système interactif chargé !");

    // 1. GESTION DES MODALES (OUVERTURE)
    window.openModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "block";
            document.body.style.overflow = "hidden"; // Bloque le scroll
            console.log("Ouverture de : " + modalId);
        } else {
            console.error("Erreur : La modale " + modalId + " n'existe pas dans le HTML.");
        }
    };

    // 2. GESTION DES MODALES (FERMETURE)
    window.closeModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto"; // Réactive le scroll
            
            // Coupe le son des vidéos en fermant
            const iframes = modal.querySelectorAll('iframe');
            iframes.forEach(iframe => { iframe.src = iframe.src; });
        }
    };

    // 3. FERMER AU CLIC EXTÉRIEUR
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = "none";
            document.body.style.overflow = "auto";
        }
    };
});
