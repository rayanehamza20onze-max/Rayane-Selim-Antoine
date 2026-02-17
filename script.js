// Fonction pour ouvrir/fermer les rectangles
function toggleCard(card) {
    card.classList.toggle('active');
}

// Système de Quiz
const questions = [
    { q: "Quelle entreprise a créé ChatGPT ?", a: ["Google", "OpenAI", "Microsoft"], c: 1 },
    { q: "Sur quel modèle technique repose-t-il ?", a: ["Blockchain", "Transformer", "GPS"], c: 1 },
    { q: "Qu'est-ce qu'une hallucination ?", a: ["Une erreur de serveur", "Une fausse info inventée"], c: 1 }
];

let cur = 0;
let score = 0;

function loadQuiz() {
    const qEl = document.getElementById("quiz-question");
    const oEl = document.getElementById("quiz-options");
    const rEl = document.getElementById("quiz-result");

    if (cur >= questions.length) {
        qEl.innerText = "Quiz terminé !";
        oEl.innerHTML = "";
        rEl.innerText = `Score : ${score} / ${questions.length}`;
        return;
    }

    const q = questions[cur];
    qEl.innerText = q.q;
    oEl.innerHTML = "";

    q.a.forEach((choice, i) => {
        const b = document.createElement("button");
        b.innerText = choice;
        b.className = "quiz-btn";
        b.onclick = (e) => {
            e.stopPropagation(); // Empêche de fermer le rectangle en cliquant
            if (i === q.c) score++;
            cur++;
            loadQuiz();
        };
        oEl.appendChild(b);
    });
}

document.addEventListener("DOMContentLoaded", loadQuiz);
