// 1. GESTION DES FENÊTRES (MODALES)
function ouvrirModale(type) {
    const modal = document.getElementById('modal-container');
    const body = document.getElementById('modal-body');
    let contenu = "";

    if (type === 'architecture') {
        contenu = `
            <div class="detail-text">
                <h1>L'Architecture de ChatGPT</h1>
                <p>ChatGPT a été créé par <strong>OpenAI</strong>, une entreprise fondée en 2015 à San Francisco.</p>
                <p>Il utilise le modèle <strong>GPT (Generative Pre-trained Transformer)</strong> qui s'appuie sur des milliards de paramètres pour prédire mathématiquement le mot suivant dans une phrase.</p>
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995" class="modal-img" alt="IA">
            </div>`;
    } 
    else if (type === 'limites') {
        contenu = `
            <div class="detail-text">
                <h1>Analyse des réponses : Limites et Biais</h1>
                <p>L'IA peut donner des réponses impressionnantes, mais elles sont parfois <strong>totalement fausses</strong> : c'est ce qu'on appelle des hallucinations.</p>
                <p>Il est crucial de vérifier les sources, car l'IA peut reproduire des biais ou des stéréotypes présents dans ses données d'entraînement assisté par les humains.</p>
            </div>`;
    } 
    else if (type === 'enjeux') {
        contenu = `
            <div class="detail-text">
                <h1>Enjeux, Métiers et Dangers</h1>
                <h3>Utilisation intelligente au lycée</h3>
                <p>L'IA doit être vue comme un tuteur pour expliquer des cours complexes ou aider à structurer un plan, plutôt qu'un simple outil de triche.</p>
                <h3>Cybercriminalité et Éthique</h3>
                <p>L'outil peut être détourné pour créer des mails de phishing crédibles, générer des fausses informations (infox) ou faciliter la cybercriminalité.</p>
                <h3>Impact sur les métiers</h3>
                <p>L'IA transforme les secteurs créatifs et techniques, posant de nouvelles questions sur l'avenir du travail dans différents secteurs.</p>
            </div>`;
    }

    body.innerHTML = contenu;
    modal.style.display = "block";
}

// 2. FERMETURE DE LA FENÊTRE
document.querySelector('.close-modal').onclick = function() {
    document.getElementById('modal-container').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('modal-container');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// 3. DÉMO TEMPS RÉEL (TOKENS)
function lancerDemo() {
    const box = document.getElementById('demo-box');
    box.style.display = "block";
    box.innerHTML = "";
    
    const texteIA = `> INITIALISATION DU NOYAU GPT-4...
> ANALYSE : "Explique ton fonctionnement."
> GÉNÉRATION DES TOKENS EN COURS...
--------------------------------------------------
L'IA générative fonctionne par prédiction statistique. 
Chaque mot est choisi car il est le plus probable mathématiquement.

Étape 1 : Découpage en tokens (unités de sens).
Étape 2 : Transformation en vecteurs numériques.
Étape 3 : Calcul d'attention pour comprendre le contexte.

> RÉPONSE GÉNÉRÉE AVEC SUCCÈS.`;

    let i = 0;
    function taper() {
        if (i < texteIA.length) {
            box.innerHTML += texteIA.charAt(i);
            i++;
            setTimeout(taper, 40); // Vitesse de frappe
        }
    }
    taper();
}

// 4. MODE SOMBRE
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeToggle.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
});
