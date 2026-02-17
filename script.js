function ouvrirModale(type) {
    const modal = document.getElementById('modal-container');
    const body = document.getElementById('modal-body');
    let contenu = "";
    
    modal.style.display = "block";
    document.body.style.overflow = "hidden";

    if (type === 'architecture') {
        contenu = `
            <div class="detail-text">
                <h1>I. ChatGPT : Une Révolution Technologique</h1>
                
                <h3>📌 Présentation Générale</h3>
                <p>ChatGPT est un agent conversationnel développé par l’entreprise américaine <strong>OpenAI</strong> et rendu accessible au grand public en novembre 2022.</p>
                <p>Il s’agit d’une intelligence artificielle capable de comprendre des questions en langage naturel et de générer des réponses cohérentes sous forme de texte.</p>
                <p>Contrairement à un moteur de recherche comme Google, ChatGPT ne cherche pas des pages web : <strong>il génère directement une réponse originale à partir de son entraînement.</strong></p>
                <p>Son lancement a marqué un tournant majeur dans l’histoire de l’intelligence artificielle, car pour la première fois, une IA avancée est devenue accessible gratuitement à des millions de personnes.</p>
                <p>En seulement deux mois, ChatGPT a dépassé les 100 millions d’utilisateurs, ce qui en fait l’application à la croissance la plus rapide de l’histoire du numérique.</p>

                <h3>🏢 Société à l’origine : OpenAI</h3>
                <p>OpenAI est une entreprise fondée en 2015 aux États-Unis.</p>
                <p><strong>Objectif :</strong> Développer une intelligence artificielle puissante mais bénéfique pour l’humanité.</p>
                <p><strong>Partenariats majeurs :</strong> Microsoft (investissements de plusieurs milliards de dollars) et une infrastructure basée sur les serveurs Microsoft Azure.</p>
                <p><strong>OpenAI développe également :</strong></p>
                <ul>
                    <li>DALL·E (génération d’images)</li>
                    <li>Sora (génération de vidéos)</li>
                    <li>GPT-4 et GPT-4o (versions avancées du modèle)</li>
                </ul>

                <h3>⚙️ Le Fonctionnement Technique (Sous le Capot)</h3>
                
                <h4>1️⃣ LLM – Large Language Model</h4>
                <p>ChatGPT repose sur un modèle de langage géant (LLM). Il a été entraîné sur des milliards de phrases, des livres, des articles, des pages web publiques et du code informatique. Il apprend les structures du langage, la grammaire, le style et les relations entre les mots.</p>

                <h4>2️⃣ Le Principe Fondamental : La Probabilité Statistique</h4>
                <p>ChatGPT ne comprend pas comme un humain. Il fonctionne par calcul de probabilités : à chaque mot généré, il prédit le mot suivant le plus probable en fonction du contexte, des mots précédents et des statistiques apprises.</p>
                <p><em>Exemple : Si on écrit "Paris est la capitale de la...", le mot le plus probable est "France".</em></p>

                <h4>3️⃣ Architecture Transformer</h4>
                <p>Le modèle GPT utilise une architecture appelée <strong>Transformer</strong>. Cette technologie permet d’analyser les relations entre les mots, de comprendre le contexte d’une phrase et de traiter de longs textes.</p>

                <h4>4️⃣ Entraînement Assisté par des Humains (RLHF)</h4>
                <p>Après l’entraînement automatique, des humains interviennent pour évaluer, classer et corriger les réponses. Ce processus s'appelle le <strong>RLHF (Reinforcement Learning with Human Feedback)</strong>, ce qui améliore la qualité, la sécurité et la pertinence.</p>

                <h4>5️⃣ Infrastructure Technique</h4>
                <p>Fonctionne sur des supercalculateurs Microsoft Azure avec des puces spécialisées <strong>NVIDIA H100</strong>. L’entraînement nécessite des milliers de GPU et une énorme consommation énergétique.</p>

                <h3>🧠 Fenêtre de Contexte</h3>
                <p>C’est sa capacité à se souvenir des messages précédents dans la conversation actuelle. Mais il ne se souvient pas de vous d’une conversation à l’autre (sauf si mémoire activée).</p>

                <h3>🎯 Pourquoi parle-t-on de Révolution ?</h3>
                <ul>
                    <li>Il démocratise l’IA avancée et transforme l’éducation.</li>
                    <li>Il modifie le monde du travail et accélère la production de contenu.</li>
                    <li>Pour la première fois, une machine peut rédiger un essai, écrire du code ou expliquer un cours.</li>
                </ul>

                <div class="stats-grid">
                    <div class="stat-item">Lancement : Nov 2022</div>
                    <div class="stat-item">100M d'utilisateurs (2 mois)</div>
                    <div class="stat-item">Investissement : 10 Mds $</div>
                </div>

                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/7ell8KEbhJo" allowfullscreen></iframe>
                </div>

                <p style="background: #fff3cd; padding: 15px; border-radius: 10px; color: #856404;">
                    <strong>🧩 Transition :</strong> Cependant, malgré ses performances, ChatGPT possède des limites importantes : hallucinations, biais, erreurs factuelles... ce qui nous amène à la partie suivante.
                </p>
            </div>`;
    } 
    else if (type === 'limites') {
        contenu = `
            <div class="detail-text">
                <h1>II. Analyse des Réponses & Limites</h1>
                <p>Contenu en cours de préparation basé sur vos documents INRIA...</p>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/Q4Np2tlq2vc" allowfullscreen></iframe>
                </div>
            </div>`;
    } 
    else if (type === 'enjeux') {
        contenu = `
            <div class="detail-text">
                <h1>III. Enjeux, Éthique et Dangers</h1>
                <p>Contenu en cours de préparation sur la cybercriminalité et l'usage scolaire...</p>
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
};

window.onclick = function(e) {
    if (e.target.id === 'modal-container') {
        document.getElementById('modal-container').style.display = "none";
        document.body.style.overflow = "auto";
    }
};

// MODE SOMBRE
document.getElementById('theme-toggle').onclick = function() {
    document.body.classList.toggle('dark-theme');
};

// DÉMO CONSOLE
function lancerDemo() {
    const box = document.getElementById('demo-box');
    box.style.display = "block";
    box.innerHTML = "> Simulation : Analyse des données d'entraînement... <br>> Résultat : Modèle prêt.";
}
