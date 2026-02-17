function ouvrirModale(type) {
    const modal = document.getElementById('modal-container');
    const body = document.getElementById('modal-body');
    let contenu = "";
    
    modal.style.display = "block";
    modal.scrollTop = 0; 

    if (type === 'architecture') {
        contenu = `
            <div class="detail-text">
                <h1>ChatGPT : Qu'est-ce que c'est ?</h1>
                <p>Développé par la société <strong>OpenAI</strong>, ChatGPT est un modèle de langage révolutionnaire.</p>
                <h3>Comment fonctionne-t-il ?</h3>
                <ul>
                    <li><strong>Données d'entraînement :</strong> Il a analysé des milliards de phrases pour apprendre la structure du langage.</li>
                    <li><strong>Le modèle prédit des mots :</strong> Il ne "pense" pas, il calcule statistiquement le mot suivant le plus probable.</li>
                    <li><strong>Entraînement assisté par les humains :</strong> Utilise le RLHF (Reinforcement Learning from Human Feedback) pour affiner ses réponses.</li>
                </ul>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/SlMAz4nk07U" allowfullscreen></iframe>
                </div>
            </div>`;
    } 
    else if (type === 'limites') {
        contenu = `
            <div class="detail-text">
                <h1>Analyses, Limites et Biais</h1>
                <p>ChatGPT est impressionnant mais n'est pas infaillible.</p>
                <h3>Peut-il répondre à tout ?</h3>
                <ul>
                    <li><strong>Réponses fausses :</strong> Il peut inventer des sources ou des faits historiques (hallucinations).</li>
                    <li><strong>Limites :</strong> Sa connaissance s'arrête à la fin de son entraînement et il ne comprend pas le monde réel.</li>
                    <li><strong>Biais :</strong> Il peut reproduire des préjugés sexistes ou racistes présents dans ses données d'origine.</li>
                </ul>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/Q4Np2tlq2vc" allowfullscreen></iframe>
                </div>
            </div>`;
    } 
    else if (type === 'enjeux') {
        contenu = `
            <div class="detail-text">
                <h1>Possibilités, Dangers et Éthique</h1>
                <h3>Utilisations Intelligentes</h3>
                <p>Au lycée, il sert de tuteur pour expliquer des concepts ou aider à structurer un plan, allant bien au-delà de la simple triche.</p>
                <h3>Les Dangers Potentiels</h3>
                <ul>
                    <li><strong>Éthique :</strong> Risques de manipulation de l'opinion et de propagation de fake news.</li>
                    <li><strong>Cybercriminalité :</strong> Aide possible à la rédaction de mails de phishing ou de scripts malveillants.</li>
                    <li><strong>Métiers :</strong> Automatisation de tâches créatives et techniques, transformant le marché du travail.</li>
                </ul>
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
    box.style.display = "block";
    box.innerHTML = "> Analyse des ressources du Lycée Mounier... ";
    const texte = "Calcul des probabilités... Prédiction du mot suivant... OK.";
    let i = 0;
    function type() {
        if (i < texte.length) { box.innerHTML += texte.charAt(i); i++; setTimeout(type, 30); }
    }
    type();
}
