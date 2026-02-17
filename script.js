function ouvrirModale(type) {
    const modal = document.getElementById('modal-container');
    const body = document.getElementById('modal-body');
    let contenu = "";
    
    modal.style.display = "block";
    modal.scrollTop = 0; 

    if (type === 'architecture') {
        contenu = `
            <div class="detail-text">
                <h1>I. Présentation de ChatGPT</h1>
                <p>ChatGPT est un agent conversationnel créé par la société <strong>OpenAI</strong> basée à San Francisco.</p>
                <h3>Comment fonctionne cette IA ?</h3>
                <ul>
                    <li><strong>Données d'entraînement :</strong> Le modèle a analysé des milliards de textes (livres, web, code).</li>
                    <li><strong>Le modèle prédit des mots :</strong> Il calcule statistiquement le mot suivant le plus probable.</li>
                    <li><strong>Entraînement assisté :</strong> Des humains ont aidé à corriger l'IA pour la rendre plus fiable (RLHF).</li>
                </ul>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/SlMAz4nk07U" allowfullscreen></iframe>
                </div>
            </div>`;
    } 
    else if (type === 'limites') {
        contenu = `
            <div class="detail-text">
                <h1>II. Analyse des Réponses & Limites</h1>
                <p>ChatGPT semble tout savoir, mais il possède des limites importantes.</p>
                <h3>Peut-il répondre à tout ?</h3>
                <ul>
                    <li><strong>Hallucinations :</strong> Il peut affirmer des choses totalement fausses avec beaucoup d'assurance.</li>
                    <li><strong>Les Biais :</strong> L'IA peut reproduire des préjugés sexistes ou racistes présents dans ses données de base.</li>
                    <li><strong>Le Prompting :</strong> L'importance de savoir poser la question (contexte, rôle, contraintes).</li>
                </ul>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/Q4Np2tlq2vc" allowfullscreen></iframe>
                </div>
            </div>`;
    } 
    else if (type === 'enjeux') {
        contenu = `
            <div class="detail-text">
                <h1>III. Possibilités & Dangers</h1>
                <h3>Aller au-delà de la triche</h3>
                <p>Pour un élève, ChatGPT est un tuteur qui peut réexpliquer un cours de SNT mal compris ou aider à structurer un exposé.</p>
                <h3>Éthique et Cybercriminalité</h3>
                <ul>
                    <li><strong>Manipulation :</strong> Risque de création massive de fausses informations (Fake News).</li>
                    <li><strong>Dangers :</strong> La porte ouverte à la cybercriminalité (aide à la rédaction de mails de phishing).</li>
                    <li><strong>Métiers :</strong> Transformation profonde de nombreux secteurs (journalisme, code, graphisme).</li>
                </ul>
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b" class="modal-img">
            </div>`;
    }
    body.innerHTML = contenu;
}

// GESTION DE LA FERMETURE (CROIX + CLIC EXTERNE)
document.addEventListener('click', function(e) {
    const modal = document.getElementById('modal-container');
    if (e.target.classList.contains('close-modal') || e.target === modal) {
        modal.style.display = "none";
        document.getElementById('modal-body').innerHTML = ""; // Coupe le son des vidéos
    }
});

// MODE SOMBRE
document.getElementById('theme-toggle').onclick = function() {
    document.body.classList.toggle('dark-theme');
    this.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
};

// DÉMO CONSOLE
function lancerDemo() {
    const box = document.getElementById('demo-box');
    box.style.display = "block";
    box.innerHTML = "> Connexion aux serveurs OpenAI... ";
    const texte = "Analyse des tokens... Calcul de probabilité... Réponse générée.";
    let i = 0;
    function type() {
        if (i < texte.length) { box.innerHTML += texte.charAt(i); i++; setTimeout(type, 30); }
    }
    type();
}
