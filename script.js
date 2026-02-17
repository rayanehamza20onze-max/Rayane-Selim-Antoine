const details = {
    architecture: {
        title: "La Création d'OpenAI et l'Histoire de ChatGPT",
        content: `
            <div class="detail-text">
                <h3>Le Commencement : Qui a créé ChatGPT ?</h3>
                <p>ChatGPT a été créé par <strong>OpenAI</strong>, une entreprise fondée en décembre 2015 à San Francisco. Au départ, c'était une organisation à but non lucratif dont l'objectif était de s'assurer que l'IA profite à toute l'humanité.</p>
                
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995" class="modal-img">

                <h3>Les 4 Figures Clés derrière le projet :</h3>
                <ul>
                    <li><span class="highlight">Sam Altman :</span> Le PDG et visage public d'OpenAI. C'est lui qui a dirigé la stratégie pour rendre l'IA accessible au grand public.</li>
                    <li><span class="highlight">Greg Brockman :</span> Le président et ingénieur en chef. Il est le "cerveau" technique qui a rendu possible l'entraînement de modèles aussi gigantesques.</li>
                    <li><span class="highlight">Ilya Sutskever :</span> Scientifique en chef. Ancien de Google, il est l'un des plus grands experts mondiaux en réseaux de neurones.</li>
                    <li><span class="highlight">Elon Musk :</span> Co-fondateur initial en 2015. Bien qu'il ait quitté le projet en 2018, il a fourni une grande partie du financement de départ.</li>
                </ul>

                <h3>L'évolution technique (De GPT-1 à GPT-4) :</h3>
                <p>En 2018, GPT-1 ne savait que prédire des mots simples. Le monde a basculé le <strong>30 novembre 2022</strong> avec la sortie de ChatGPT. En 5 jours, il avait déjà 1 million d'utilisateurs, un record historique dans la tech.</p>
                
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/SlMAz4nk07U" allowfullscreen></iframe>
                </div>
            </div>`
    },
    limites: {
        title: "Limites, Éthique et Avenir",
        content: `
            <div class="detail-text">
                <p>L'IA n'est pas infaillible. Rayane, Selim et Antoine ont identifié trois défis majeurs pour le futur.</p>
                
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b" class="modal-img">
                
                <h3>1. La Vérité vs La Statistique</h3>
                <p>ChatGPT ne possède pas de "conscience". Il ne sait pas si ce qu'il dit est vrai ou faux ; il sait juste que dans sa base de données, ces mots apparaissent souvent ensemble. C'est ce qui crée les <strong>hallucinations</strong>.</p>

                <h3>2. Le coût de l'intelligence</h3>
                <p>Une seule requête sur ChatGPT consomme environ 10 fois plus d'électricité qu'une recherche Google. L'enjeu environnemental est énorme pour OpenAI.</p>

                <h3>3. L'IA à l'école</h3>
                <p>Le débat sur l'utilisation de ChatGPT en classe est crucial. Doit-on l'interdire ou apprendre aux élèves à s'en servir comme d'un assistant ?</p>
                
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/Q4Np2tlq2vc" allowfullscreen></iframe>
                </div>
            </div>`
    }
};

// --- GESTION DES FENÊTRES (MODALES) ---
const cards = document.querySelectorAll('.card');
const modal = document.getElementById('modal-container');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-modal');

cards.forEach((card, index) => {
    card.style.cursor = "pointer";
    card.addEventListener('click', () => {
        if(index === 0) showModal(details.architecture);
        if(index === 1) showModal(details.limites);
    });
});

function showModal(data) {
    modalBody.innerHTML = `<h1>${data.title}</h1>${data.content}`;
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; 
}

closeBtn.onclick = () => { modal.style.display = "none"; document.body.style.overflow = "auto"; };
window.onclick = (e) => { if (e.target == modal) { modal.style.display = "none"; document.body.style.overflow = "auto"; } };

// --- GESTION DU MODE SOMBRE ---
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeBtn.innerHTML = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
});

// --- SIMULATION IA ---
let isTyping = false;
function lancerDemo() {
    if (isTyping) return;
    isTyping = true;
    const box = document.getElementById('demo-box');
    box.style.display = 'block';
    box.innerHTML = 'AI_ENGINE > ';
    const texte = "Analyse des fondateurs... Sam Altman, Greg Brockman, Ilya Sutskever... Chargement terminé. Système prêt pour la présentation de SNT.";
    let i = 0;
    function type() {
        if (i < texte.length) {
            box.innerHTML += texte.charAt(i);
            i++;
            setTimeout(type, 40);
        } else { isTyping = false; }
    }
    type();
}
