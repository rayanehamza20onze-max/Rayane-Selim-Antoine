// Fonction pour ouvrir/fermer les rectangles
function toggleCard(element) {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(c => {
        if(c !== element) c.classList.remove('active');
    });
    element.classList.toggle('active');
}

// Système de Quiz
const quizData = [
    { q: "Qui a créé ChatGPT ?", a: ["OpenAI", "Google"], c: 0 },
    { q: "L'IA peut-elle mentir ?", a: ["Oui (hallucinations)", "Non jamais"], c: 0 }
];

let cur = 0;
let score = 0;

function runQuiz() {
    const qEl = document.getElementById("question");
    const oEl = document.getElementById("options");

    if(!qEl || !oEl) return;

    if(cur >= quizData.length) {
        qEl.innerText = "Quiz fini !";
        oEl.innerHTML = "";
        document.getElementById("score-text").innerText = `Score : ${score}/${quizData.length}`;
        return;
    }

    const d = quizData[cur];
    qEl.innerText = d.q;
    oEl.innerHTML = "";

    d.a.forEach((opt, i) => {
        const b = document.createElement("button");
        b.innerText = opt;
        b.className = "quiz-btn";
        b.onclick = (e) => {
            e.stopPropagation(); // Empêche de fermer la carte au clic
            if(i === d.c) score++;
            cur++;
            runQuiz();
        };
        oEl.appendChild(b);
    });
}

document.addEventListener("DOMContentLoaded", runQuiz);
