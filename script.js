function ouvrirModale(type) {
    const modal = document.getElementById('modal-container');
    const body = document.getElementById('modal-body');
    let contenu = "";
    modal.style.display = "block"; // Ouvre la fenêtre
    modal.scrollTop = 0; 

    if (type === 'architecture') {
        contenu = `
            <div class="detail-text">
                <h1>L'IA et OpenAI</h1>
                <p>ChatGPT est un agent conversationnel créé par <strong>OpenAI</strong> (San Francisco).</p>
                <h3>Le fonctionnement technique</h3>
                <ul>
                    <li><strong>Données d'entraînement :</strong> Le modèle a ingéré des milliards de textes pour apprendre à prédire le mot suivant.</li>
                    <li><strong>Entraînement assisté :</strong> Des humains ont aidé à affiner les réponses pour les rendre plus naturelles.</li>
                    <li><strong>Infrastructure :</strong> Utilise des milliers de puces <strong>NVIDIA H100</strong> et les Data Centers de Microsoft Azure.</li>
                </ul>
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995" class="modal-img" style="width:100%; border-radius:10px;">
                <h3>Vidéo : Comprendre le fonctionnement</h3>
                <div class="video-container" style="margin-top:20px;">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/SlMAz4nk07U" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>`;
    } 
    else if (type === 'limites') {
        contenu = `
            <div class="detail-text">
                <h1>Analyses et Limites</h1>
                <p>L'IA peut produire des réponses impressionnantes, mais elle a des failles majeures.</p>
                <h3>Limites et Biais</h3>
                <ul>
                    <li><strong>Hallucinations :</strong> ChatGPT peut inventer des faits de manière très convaincante (réponses fausses).</li>
                    <li><strong>Biais :</strong> Les réponses peuvent refléter des préjugés présents dans les données du web.</li>
                </ul>
                <h3>Prompting</h3>
                <p>L'art du "prompt" consiste à donner un rôle et un contexte précis pour limiter ces erreurs.</p>
                <div class="video-container">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/Q4Np2tlq2vc" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>`;
    } 
    else if (type === 'enjeux') {
        contenu = `
            <div class="detail-text">
                <h1>Dangers et Avenir</h1>
                <h3>Éthique et Cybercriminalité</h3>
                <p>L'IA pose des questions sur la manipulation et la création massive de fausses informations. Elle peut aussi aider à la <strong>cybercriminalité</strong> (phishing).</p>
                <h3>Utilisation intelligente au lycée</h3>
                <p>Au-delà de la triche, c'est un tuteur pour expliquer des concepts complexes.</p>
                <h3>Impact sur les métiers</h3>
                <p>De nombreux secteurs (créatifs, techniques) voient leurs métiers transformés par l'IA.</p>
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b" class="modal-img" style="width:100%; border-radius:10px;">
            </div>`;
    }

    body.innerHTML = contenu;
}

// GESTION DE LA FERMETURE (LA CROIX)
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('close-modal')) {
        document.getElementById('modal-container').style.display = "none";
    }
    // Ferme aussi si on clique en dehors de la fenêtre blanche
    if (e.target.id === 'modal-container') {
        e.target.style.display = "none";
    }
});

// SIMULATION IA
function lancerDemo() {
    const box = document.getElementById('demo-box');
    box.style.display = "block";
    box.innerHTML = "> Analyse SNT en cours... ";
    const texte = "Prédiction du mot suivant... Chargement des serveurs... OK. ChatGPT est prêt.";
    let i = 0;
    function type() {
        if (i < texte.length) {
            box.innerHTML += texte.charAt(i);
            i++;
            setTimeout(type, 30);
        }
    }
    type();
}
