// Animation fluide pour l'apparition des cartes
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        card.style.transform = "translateY(20px)";
        
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 200);
    });
});
