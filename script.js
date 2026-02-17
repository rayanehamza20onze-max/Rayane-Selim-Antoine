function ouvrirModale(type) {
    const modal = document.getElementById('modal-container');
    const body = document.getElementById('modal-body');
    let contenu = "";
    
    modal.style.display = "block";
    modal.scrollTop = 0; 

    if (type === 'architecture') {
        contenu = `
            <div class="detail-text" style="max-width:800px; margin:auto;">
                <h1>I. L'IA et OpenAI</h1>
                <p>ChatGPT est un agent conversationnel créé par <strong>OpenAI</strong>. Ce n'est pas une base de données, mais un moteur de prédiction statistique.</p>
                <h3>Le fonctionnement technique</h3>
                <ul>
                    <li><strong>Données d'entraînement :</strong> Le modèle a ingéré des milliards de textes pour apprendre la logique du langage.</li>
                    <li><strong>Entraînement assisté (RLHF) :</strong> Des humains ont aidé à affiner les réponses.</li>
                    <li><strong>Infrastructure :</strong> Processeurs <strong>NVIDIA H100</strong> via Microsoft Azure.</li>
                </ul>
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995" class="modal-img" style="width:100%; border-radius:15px;">
                <h3>Vidéo : Fonctionnement de l'IA</h3>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/SlMAz4nk07U" allowfullscreen></iframe>
                </div>
            </div>`;
    } 
    else if (type === 'limites') {
        contenu = `
            <div class="detail-text" style="max-width:800px; margin:auto;">
                <h1>II. Analyses et Limites</h1>
                <p>L'IA a des failles majeures qu'il faut savoir identifier.</p>
                <h3>Hallucinations et Biais</h3>
                <ul>
                    <li><strong>Hallucinations :</strong> L'IA peut inventer des faits faux avec une assurance totale.</li>
                    <li><strong>Biais :</strong> Elle peut refléter les préjugés présents dans les textes du web.</li>
                </ul>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/Q4Np2tlq2vc" allowfullscreen></iframe>
                </div>
            </div>`;
    } 
    else if (type === 'enjeux') {
        contenu = `
            <div class="detail-text" style="max-width:800px; margin:auto;">
                <h1>III. Dangers et Avenir</h1>
                <h3>Cybercriminalité et Éthique</h3>
                <p>L'IA peut aider à la création de mails de <strong>phishing</strong> ou de fausses informations.</p>
                <h3>Utilisation intelligente au lycée</h3>
                <p>Au-delà de la triche, c'est un tuteur pour expliquer un concept complexe.</p>
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b" class="modal-img" style="width:100%; border-radius:15px;">
            </div>`;
    }
    body.innerHTML = contenu;
}

// FERMETURE : On écoute le clic sur TOUTE la page
document.addEventListener('click', function(e) {
    const modal = document.getElementById('modal-container');
    // Si on clique sur la croix OU sur le fond noir
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

// DÉMO
function lancerDemo() {
    const box = document.getElementById('demo-box');
    box.style.display = "block";
    box.innerHTML = "> Analyse SNT en cours... ";
    const texte = "Prédiction statistique... Calcul des matrices... OK.";
    let i = 0;
    function type() {
        if (i < texte.length) { box.innerHTML += texte.charAt(i); i++; setTimeout(type, 30); }
    }
    type();
}
