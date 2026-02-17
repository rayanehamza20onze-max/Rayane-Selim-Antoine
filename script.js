const contentData = {
    presentation: {
        title: "Présentation & Analyse",
        text: `
            <p>ChatGPT est un agent conversationnel qui marque un pas majeur dans l'IA depuis fin 2022. Créé par OpenAI, il semble avoir réponse à tout et pose énormément de questions.</p>
            <p><strong>Consignes :</strong> Présentation orale de 10 min en trinôme avec diaporama.</p>
            <h3>Analyse des réponses</h3>
            <p>Peut-il répondre à tout ? Attention aux hallucinations (faits inventés avec assurance). L'art du "Prompting" est central : il faut définir le Rôle, le Contexte et les Contraintes.</p>
            <h3>Dangers et Éthique</h3>
            <p>Confidentialité : ne jamais partager de données sensibles. Biais : le modèle reflète les préjugés de ses données. Risques : manipulations et cybercriminalité.</p>
            <p><small>Crédit : ChatGPT, Domaine public, via Wikimedia Commons.</small></p>`,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png",
        video: "https://www.youtube.com/embed/ORp_S62I5S8"
    },
    fonctionnement: {
        title: "Le Fonctionnement Technique",
        text: `
            <p>Contrairement à un moteur de recherche, il génère les infos au lieu de les chercher.</p>
            <ul>
                <li><strong>LLM (Large Language Model) :</strong> Entraîné sur des milliards de phrases.</li>
                <li><strong>Probabilité Statistique :</strong> Prédit le mot suivant le plus probable.</li>
                <li><strong>Infrastructure :</strong> Supercalculateurs Microsoft Azure et puces NVIDIA H100.</li>
                <li><strong>Fenêtre de Contexte :</strong> Capacité de mémoire de la conversation actuelle.</li>
            </ul>`,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Transformer_full.png/500px-Transformer_full.png",
        video: "https://www.youtube.com/embed/7ell8KEbhJo"
    },
    statistiques: {
        title: "Statistiques & Performances",
        text: `
            <p>Points forts et points faibles de l'IA en 2026 :</p>
            <ul>
                <li><strong>Rapidité de rédaction :</strong> 95%</li>
                <li><strong>Polyvalence :</strong> 90%</li>
                <li><strong>Fiabilité factuelle :</strong> 60% (Point faible)</li>
                <li><strong>Logique pure :</strong> 55%</li>
            </ul>`,
        img: "https://images.unsplash.com/photo-1551288049-bbda4833effb?auto=format&fit=crop&w=800",
        video: "https://www.youtube.com/embed/S_8qM9vL7iQ"
    },
    ressources: {
        title: "Ressources Principales",
        text: `
            <p><strong>Ressources en ligne :</strong> Article lebigdata.fr, Article lemonde.fr (Pixels), eductive.ca.</p>
            <p><strong>Presse papier :</strong> Dossier Epsiloon n°25, Télérama n°3816.</p>
            <p><strong>Podcast :</strong> Le Meilleur des mondes (Radio France).</p>`,
        img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800",
        video: "https://www.youtube.com/embed/NnS8V2m_6P0"
    },
    quiz: {
        title: "Quiz Interactif",
        text: "<p>Répondez aux questions pour tester vos connaissances.</p><div id='quiz-zone'></div>",
        img: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&w=800",
        video: ""
    }
};

function openModal(id) {
    const data = contentData[id];
    const modal = document.getElementById("fullScreenModal");
    const body = document.getElementById("modal-body");

    let mediaHTML = data.img ? `<div class='modal-media'><img src='${data.img}'></div>` : "";
    let videoHTML = data.video ? `<div class='video-wrapper'><iframe src='${data.video}' frameborder='0' allowfullscreen></iframe></div>` : "";

    body.innerHTML = `
        <h2>${data.title}</h2>
        ${mediaHTML}
        <div class='text-content'>${data.text}</div>
        ${videoHTML}
    `;

    modal.style.display = "block";
    document.body.style.overflow = "hidden"; 
}

function closeModal() {
    document.getElementById("fullScreenModal").style.display = "none";
    document.body.style.overflow = "auto";
    document.getElementById("modal-body").innerHTML = ""; 
}

window.onclick = function(event) {
    if (event.target == document.getElementById("fullScreenModal")) closeModal();
};
