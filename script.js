// 1. GESTION DES FENÊTRES (MODALES) - CONTENU ULTRA-DÉVELOPPÉ
function ouvrirModale(type) {
    const modal = document.getElementById('modal-container');
    const body = document.getElementById('modal-body');
    let contenu = "";
    modal.scrollTop = 0; 

    if (type === 'architecture') {
        contenu = `
            <div class="detail-text">
                <h1>L'Infrastructure : Le cerveau de métal</h1>
                
                <h3>Data Centers et Puissance de Calcul</h3>
                <p>ChatGPT repose sur des <strong>Data Centers</strong> massifs gérés par Microsoft Azure. Pour GPT-4, OpenAI utilise des grappes de plus de 25 000 processeurs <strong>NVIDIA H100</strong>. Chaque puce est spécialisée dans le calcul intensif.</p>
                
                <h3>La partie Mathématique : Vecteurs et Matrices</h3>
                <p>Sous le capot, l'IA transforme chaque mot en un <strong>Embedding</strong> (un vecteur numérique à 1536 dimensions). Pour générer une réponse, elle effectue des milliards de <strong>multiplications de matrices</strong> par seconde. C'est de l'algèbre linéaire à l'échelle industrielle.</p>
                
                <h3>Le Futur : Puces et Souveraineté</h3>
                <p>Face au coût colossal (plusieurs centimes par requête), Sam Altman travaille sur des projets de <strong>puces personnalisées</strong> pour ne plus dépendre de NVIDIA et optimiser la consommation électrique qui égale celle de villes entières.</p>
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc48" class="modal-img">
            </div>`;
    } 
    else if (type === 'limites') {
        contenu = `
            <div class="detail-text">
                <h1>L'Art du Prompting & Précautions</h1>
                
                <h3>Maîtriser le Prompt (L'Instruction)</h3>
                <p>Pour obtenir le meilleur de l'IA, on utilise trois piliers :
                    <ul>
                        <li><strong>Le Rôle :</strong> "Agis en tant qu'expert".</li>
                        <li><strong>Le Contexte :</strong> Expliquer le but de la demande.</li>
                        <li><strong>Les Contraintes :</strong> Définir le ton, la longueur ou le format (tableau, code).</li>
                    </ul>
                </p>

                <h3>Limites et Vigilance</h3>
                <p><strong>Hallucinations :</strong> L'IA peut inventer des faits avec une assurance totale car elle ne fait que prédire le mot suivant statistiquement. 
                <strong>Confidentialité :</strong> Vos données peuvent être utilisées pour l'entraînement. Ne jamais partager de secrets.</p>
            </div>`;
    } 
    else if (type === 'enjeux') {
        contenu = `
            <div class="detail-text">
                <h1>Fonctionnalités Avancées & Futur</h1>
                
                <h3>Multimodalité : Vision et Image</h3>
                <p>Avec <strong>DALL-E</strong> et la vision par ordinateur, ChatGPT peut "voir" des photos, analyser des graphiques complexes ou générer des images à partir d'un simple texte.</p>
                
                <h3>Analyse de Données et Web</h3>
                <p>L'IA peut désormais lire des fichiers (Excel, PDF) et naviguer sur internet en temps réel pour citer des sources actuelles, dépassant sa limite de connaissances initiale.</p>
                
                <h3>Les GPTs Personnalisés</h3>
                <p>La grande nouveauté est la création d'assistants sur-mesure spécialisés (ex: un tuteur SNT qui connaît votre programme par cœur). C'est l'avenir de l'IA personnalisée.</p>
                <img src="https://images.unsplash.com/photo-1675557009875-436f5954a608" class="modal-img">
            </div>`;
    }

    body.innerHTML = contenu;
    modal.style.display = "block";
}

// 2. FERMETURE ET MODE SOMBRE (Inchangés mais indispensables)
document.querySelector('.close-modal').onclick = function() {
    document.getElementById('modal-container').style.display = "none";
}
window.onclick = function(e) { if (e.target == document.getElementById('modal-container')) e.target.style.display = "none"; }

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeToggle.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
});

// 3. DÉMO TECHNIQUE DÉTAILLÉE
function lancerDemo() {
    const box = document.getElementById('demo-box');
    box.style.display = "block"; box.innerHTML = "";
    const texteIA = `> INITIALISATION CLUSTER NVIDIA H100...
> CHARGEMENT DES MATRICES DE POIDS... OK.
> ANALYSE VECTORIELLE EN 1536 DIMENSIONS...
--------------------------------------------------
L'IA convertit votre texte en nombres (Tokens).
Elle calcule la probabilité statistique du mot suivant.
Chaque réponse est une prédiction mathématique basée sur 175 milliards de paramètres.

> TRAITEMENT TERMINÉ.`;
    let i = 0;
    function taper() {
        if (i < texteIA.length) { box.innerHTML += texteIA.charAt(i); i++; setTimeout(taper, 30); }
    }
    taper();
}
