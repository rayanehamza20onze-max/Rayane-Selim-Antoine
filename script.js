function ouvrirModale(type) {
    const modal = document.getElementById('modal-container');
    const body = document.getElementById('modal-body');
    let contenu = "";
    
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Bloque le scroll arrière

    if (type === 'architecture') {
        contenu = `
            <div class="detail-text">
                <h1>I. Qu'est-ce que ChatGPT & Comment ça marche ?</h1>
                <p>ChatGPT est un agent conversationnel créé par <strong>OpenAI</strong>. Contrairement à un moteur de recherche, il ne cherche pas d'infos, il les <strong>génère</strong>.</p>
                <h3>Le secret technique :</h3>
                <ul>
                    <li><strong>LLM (Large Language Model) :</strong> Entraîné sur des milliards de phrases du web et de livres.</li>
                    <li><strong>Probabilité Statistique :</strong> Il ne comprend pas le sens, il prédit le mot suivant le plus probable.</li>
                    <li><strong>Infrastructure :</strong> Fonctionne sur des supercalculateurs Microsoft Azure avec des puces NVIDIA H100.</li>
                </ul>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/7ell8KEbhJo" allowfullscreen></iframe>
                </div>
                <p><em>Astuce SNT : Le modèle utilise le RLHF (Reinforcement Learning from Human Feedback) pour apprendre à ne pas être impoli.</em></p>
            </div>`;
    } 
    else if (type === 'limites') {
        contenu = `
            <div class="detail-text">
                <h1>II. Analyse des Réponses & Hallucinations</h1>
                <p>L'IA n'a pas de conscience. Elle peut être très convaincante tout en disant n'importe quoi.</p>
                <h3>Les 3 grandes limites :</h3>
                <ul>
                    <li><strong>Les Hallucinations :</strong> Invention de sources, de dates ou de faits historiques.</li>
                    <li><strong>Les Biais Algorithmiques :</strong> Reproduit les préjugés (sexistes, racistes) présents dans ses données.</li>
                    <li><strong>La Date de coupure :</strong> Ses connaissances s'arrêtent souvent à une certaine date (sauf s'il navigue sur le web).</li>
                </ul>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/Q4Np2tlq2vc" allowfullscreen></iframe>
                </div>
            </div>`;
    } 
    else if (type === 'enjeux') {
        contenu = `
            <div class="detail-text">
                <h1>III. Enjeux, Éthique et Futur</h1>
                <h3>Aller au-delà de la triche</h3>
                <p>Utilisé intelligemment, ChatGPT est un tuteur personnel. Il peut expliquer un concept de SNT de 10 façons différentes.</p>
                <h3>Les Dangers :</h3>
                <ul>
                    <li><strong>Cybercriminalité :</strong> Aide les hackers à rédiger des mails de phishing parfaits.</li>
                    <li><strong>Désinformation :</strong> Création massive de "Fake News" impossibles à distinguer du vrai.</li>
                    <li><strong>Impact Métiers :</strong> Bouleversement des secteurs du code, du journalisme et du graphisme.</li>
                </ul>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/8-9-7jOOn6U" allowfullscreen></iframe>
                </div>
            </div>`;
    }
    body.innerHTML = contenu;
}

// FERMETURE
document.querySelector('.close-modal').onclick = function() {
    document.getElementById('modal-container').style.display = "none";
    document.body.style.overflow = "auto";
    document.getElementById('modal-body').innerHTML = ""; // Coupe le son
};

// Fermer au clic extérieur
window.onclick = function(e) {
    const modal = document.getElementById('modal-container');
    if (e.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
        document.getElementById('modal-body').innerHTML = "";
    }
};

// DARK MODE
document.getElementById('theme-toggle').onclick = function() {
    document.body.classList.toggle('dark-theme');
    this.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
};

// DÉMO CONSOLE
function lancerDemo() {
    const box = document.getElementById('demo-box');
    box.style.display = "block";
    box.innerHTML = "> Analyse du prompt...<br>> Découpage en Tokens...<br>> Calcul des probabilités : ";
    const texte = "98.4% de chances que le mot suivant soit 'Révolution'.";
    let i = 0;
    function type() {
        if (i < texte.length) { box.innerHTML += texte.charAt(i); i++; setTimeout(type, 40); }
    }
    type();
}
