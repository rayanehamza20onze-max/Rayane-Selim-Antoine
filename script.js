function ouvrirModale(type) {
    const modal = document.getElementById('modal-container');
    const body = document.getElementById('modal-body');
    let contenu = "";
    
    modal.style.display = "block";
    modal.scrollTop = 0; 

    if (type === 'architecture') {
        contenu = `
            <div class="detail-text">
                <h1>I. L'IA et OpenAI</h1>
                <p>ChatGPT est un agent conversationnel créé par <strong>OpenAI</strong>. Ce n'est pas une base de données, mais un moteur de prédiction statistique.</p>
                <h3>Le fonctionnement technique</h3>
                <ul>
                    <li><strong>Données d'entraînement :</strong> Le modèle a ingéré des milliards de textes pour apprendre la logique du langage.</li>
                    <li><strong>Entraînement assisté (RLHF) :</strong> Des humains ont aidé à affiner les réponses pour les rendre plus naturelles.</li>
                    <li><strong>Infrastructure :</strong> Utilise des processeurs <strong>NVIDIA H100</strong> via Microsoft Azure.</li>
                </ul>
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995" class="modal-img">
                <h3>Vidéo : Fonctionnement de l'IA</h3>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/SlMAz4nk07U" allowfullscreen></iframe>
                </div>
            </div>`;
    } 
    else if (type === 'limites') {
        contenu = `
            <div class="detail-text">
                <h1>II. Analyses et Limites</h1>
                <p>L'IA a des failles majeures qu'il faut savoir identifier.</p>
                <h3>Hallucinations et Biais</h3>
                <ul>
                    <li><strong>Hallucinations :</strong> L'IA peut inventer des faits faux avec une assurance totale.</li>
                    <li><strong>Biais :</strong> Elle peut refléter les préjugés présents dans les textes du web.</li>
                </ul>
                <h3>Le Prompting</h3>
                <p>L'art de donner des instructions précises pour obtenir des résultats fiables.</p>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/Q4Np2tlq2vc" allowfullscreen></iframe>
                </div>
            </div>`;
    } 
    else if (type === 'enjeux') {
        contenu = `
            <div class="detail-text">
                <h1>III. Dangers et Avenir</h1>
                <h3>Cybercriminalité et Éthique</h3>
                <p>L'IA peut aider à la création de mails de <strong>phishing</strong> ou de fausses informations.</p>
                <h3>Utilisation intelligente au lycée</h3>
                <p>Au-delà de la triche, c'est un tuteur pour expliquer des concepts complexes.</p>
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b" class="modal-img">
            </div>`;
    }
    body.innerHTML = contenu;
}

document.addEventListener('click', function(e) {
    const modal = document.getElementById('modal-container');
    if (e.target.classList.contains('close-modal') || e.target === modal) {
        modal.style.display = "none";
        document.getElementById('modal-body').innerHTML = ""; 
    }
});

document.getElementById('theme-toggle').onclick = function() {
    document.body.classList.toggle('dark-theme');
    this.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
};

function lancerDemo() {
    const box = document.getElementById('demo-box');
    box.style.display = "block"; box.innerHTML = "> Analyse SNT en cours... ";
    const texte = "Prédiction statistique... Calcul des matrices... OK.";
    let i = 0;
    function type() {
        if (i < texte.length) { box.innerHTML += texte.charAt(i); i++; setTimeout(type, 30); }
    }
    type();
}
