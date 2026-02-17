// Gestion du Mode Sombre
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeBtn.innerHTML = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
});

// Simulation de l'IA
let isTyping = false;
function lancerDemo() {
    if (isTyping) return;
    isTyping = true;
    const box = document.getElementById('demo-box');
    box.style.display = 'block';
    box.innerHTML = 'AI_ENGINE > ';
    
    const texte = "Analyse sémantique... Génération de réponse... OK. L'intelligence artificielle n'est pas magique, c'est de la statistique.";
    let i = 0;

    function type() {
        if (i < texte.length) {
            box.innerHTML += texte.charAt(i);
            i++;
            setTimeout(type, 40);
        } else {
            isTyping = false;
        }
    }
    type();
}
