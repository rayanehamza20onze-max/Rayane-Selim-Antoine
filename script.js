function ouvrirModale(type) {
    const modal = document.getElementById('modal-container');
    const body = document.getElementById('modal-body');
    let contenu = "";
    modal.scrollTop = 0; 

    if (type === 'architecture') {
        contenu = `
            <div class="detail-text">
                <h1>I. Infrastructure & Puissance de Calcul</h1>
                <p>Pour faire fonctionner une IA comme ChatGPT, il ne suffit pas d'un simple serveur. Il faut une infrastructure physique colossale qui redéfinit l'informatique moderne.</p>
                
                <h3>1. Les Data Centers : Des usines à données</h3>
                <p>ChatGPT réside dans les serveurs de <strong>Microsoft Azure</strong>. Ces centres de données sont des bâtiments de plusieurs milliers de mètres carrés remplis de serveurs. L'entraînement de GPT-4 a nécessité une puissance de calcul si grande qu'elle a consommé autant d'énergie qu'une ville moyenne pendant plusieurs mois.</p>
                
                <h3>2. Le hardware : L'hégémonie de NVIDIA</h3>
                <p>Le moteur de cette machine est le GPU (processeur graphique). OpenAI utilise des clusters de <strong>25 000 puces NVIDIA H100</strong>. Ces puces sont spécialisées dans le calcul parallèle massif, indispensable pour traiter les milliards de paramètres du modèle simultanément.</p>
                
                <h3>3. La stratégie d'autonomie (Puces "Maison")</h3>
                <p>Sam Altman (CEO d'OpenAI) a pour projet de lever des milliards de dollars pour créer ses propres usines de semi-conducteurs. L'objectif ? Ne plus dépendre de NVIDIA et réduire la consommation électrique des puces pour rendre l'IA plus durable.</p>
                
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc48" class="modal-img">

                <h3>4. La Fondation Mathématique : Algèbre Linéaire</h3>
                <p>L'IA ne comprend pas le français. Elle transforme les mots en <strong>Vecteurs (Embeddings)</strong> dans un espace à 1536 dimensions. Chaque interaction est en réalité une série de <strong>multiplications de matrices</strong> géantes. C'est grâce à ces probabilités mathématiques que l'IA prédit le token (morceau de mot) suivant le plus logique.</p>
            </div>`;
    } 
    else if (type === 'limites') {
        contenu = `
            <div class="detail-text">
                <h1>II. L'Art du Prompting & Éthique</h1>
                <p>Interagir avec une IA est devenu une compétence à part entière : le <strong>Prompt Engineering</strong>.</p>
                
                <h3>1. Les 3 Piliers d'une instruction réussie</h3>
                <ul>
                    <li><strong>Le Rôle :</strong> Donner une identité à l'IA ("Agis en tant qu'expert en SNT") pour orienter son vocabulaire.</li>
                    <li><strong>Le Contexte :</strong> Lui fournir les détails du problème ("Je prépare un exposé pour des élèves de seconde").</li>
                    <li><strong>Les Contraintes :</strong> Préciser le format de sortie ("Réponds sous forme de tableau comparatif de 5 lignes").</li>
                </ul>

                <h3>2. Vigilance et Hallucinations</h3>
                <p>Le modèle est "génératif", ce qui signifie qu'il invente. S'il ne connaît pas une réponse, sa logique statistique peut le pousser à créer une <strong>hallucination</strong> : une fausse information présentée avec une assurance totale. Il est donc vital de toujours vérifier les sources.</p>

                <h3>3. Confidentialité et Biais</h3>
                <p>Chaque donnée envoyée peut être utilisée pour ré-entraîner les futurs modèles. Il existe aussi un risque de <strong>biais algorithmiques</strong> : l'IA peut refléter les préjugés (racisme, sexisme, clichés) présents dans les textes du web qu'elle a ingérés.</p>
            </div>`;
    } 
    else if (type === 'enjeux') {
        contenu = `
            <div class="detail-text">
                <h1>III. Fonctionnalités Avancées & Futur</h1>
                <p>ChatGPT évolue pour devenir une "IA multimodale", capable de traiter bien plus que du simple texte.</p>
                
                <h3>1. Vision et Analyse de Données</h3>
                <p>Grâce à l'analyse de données avancée, l'IA peut lire des fichiers <strong>Excel ou PDF</strong>, créer des graphiques en temps réel et même "voir" et décrire des images ou des photos grâce à des modèles comme DALL-E 3.</p>

                <h3>2. Les GPTs Personnalisés : L'avenir de l'IA</h3>
                <p>La grande révolution actuelle est la possibilité de créer des <strong>GPTs personnalisés</strong>. Ce sont des versions de ChatGPT spécialisées dans une tâche unique (ex: un correcteur de code, un assistant juridique, ou un créateur de logos) qui possèdent leurs propres bases de connaissances privées.</p>

                <h3>3. Impact sur les Métiers et Cybercriminalité</h3>
                <p>L'IA va transformer le marché du travail, automatisant les tâches répétitives mais créant aussi de nouveaux risques. En <strong>cybercriminalité</strong>, elle peut être détournée pour générer des codes malveillants ou des campagnes de phishing (hameçonnage) impossibles à distinguer d'un vrai mail.</p>
                <img src="https://images.unsplash.com/photo-1675557009875-436f5954a608" class="modal-img">
            </div>`;
    }

    body.innerHTML = contenu;
    modal.style.display = "block";
}

// ... (Garde le reste du code pour la démo et le mode sombre)
