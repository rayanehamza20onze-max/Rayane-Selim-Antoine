function ouvrirModale(type) {
    const modal = document.getElementById('modal-container');
    const body = document.getElementById('modal-body');
    let contenu = "";
    
    modal.style.display = "block";
    
    if (type === 'architecture') {
        contenu = `
            <div class="detail-text">
                <h1>I. ChatGPT : Une Révolution Technologique</h1>
                <p><strong>ChatGPT</strong> est un agent conversationnel développé par <strong>OpenAI</strong> (San Francisco) et lancé en novembre 2022.</p>
                
                <h3>⚙️ Le Fonctionnement Technique</h3>
                <ul>
                    <li><strong>LLM (Large Language Model) :</strong> Entraîné sur des milliards de phrases, livres et codes informatiques.</li>
                    <li><strong>Probabilité Statistique :</strong> Il prédit le mot suivant le plus probable en fonction du contexte.</li>
                    <li><strong>Architecture Transformer :</strong> Une technologie permettant d'analyser les relations complexes entre les mots.</li>
                    <li><strong>RLHF :</strong> Entraînement assisté par des humains pour améliorer la pertinence et la sécurité.</li>
                </ul>

                <h3>📊 Chiffres Clés</h3>
                <div class="stats-grid">
                    <div class="stat-item">100M d'utilisateurs en 2 mois</div>
                    <div class="stat-item">25 000 puces NVIDIA H100</div>
                    <div class="stat-item">Investissement : 10 Mds $ (Microsoft)</div>
                    <div class="stat-item">Modèle : GPT-4o / Sora / DALL-E</div>
                </div>

                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/7ell8KEbhJo" allowfullscreen></iframe>
                </div>
                <p><em>👉 Transition : Malgré ces prouesses, l'IA possède des limites majeures que nous allons analyser.</em></p>
            </div>`;
    } 
    else if (type === 'limites') {
        contenu = `<div class="detail-text"><h1>II. Analyses & Limites</h1><p>Focus sur les <strong>hallucinations</strong> : l'IA invente des faits avec certitude.</p><div class="video-container"><iframe src="https://www.youtube.com/embed/Q4Np2tlq2vc" allowfullscreen></iframe></div></div>`;
    } 
    else if (type === 'enjeux') {
        contenu = `<div class="detail-text"><h1>III. Éthique & Dangers</h1><p>Analyse des risques de <strong>cybercriminalité</strong> et de désinformation.</p><div class="video-container"><iframe src="https://www.youtube.com/embed/8-9-7jOOn6U" allowfullscreen></iframe></div></div>`;
    }
    body.innerHTML = contenu;
}

// Fermeture
document.querySelector('.close-modal').onclick = function() {
    document.getElementById('modal-container').style.display = "none";
};

window.onclick = function(e) {
    if (e.target.id === 'modal-container') {
        document.getElementById('modal-container').style.display = "none";
    }
};

// Mode Sombre
document.getElementById('theme-toggle').onclick = function() {
    document.body.classList.toggle('dark-theme');
};

// Démo Console
function lancerDemo() {
    const box = document.getElementById('demo-box');
    box.style.display = "block";
    box.innerHTML = "> Calcul des probabilités statistiques... <br>> Prochain token prédit : 'France' (99.2%)";
}
