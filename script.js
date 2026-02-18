function toggleCard(element) {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(c => {
        if(c !== element) c.classList.remove('active');
    });
    element.classList.toggle('active');
}

const quizData = [
    { q: "Qui a créé ChatGPT ?", a: ["OpenAI", "Google"], c: 0 },
    { q: "L'IA comprend-elle le sens ?", a: ["Oui", "Non, c'est de la probabilité"], c: 1 },
    { q: "L'IA peut-elle inventer des faits ?", a: ["Oui (hallucinations)", "Non jamais"], c: 0 }
];

let cur = 0;
let score = 0;

function runQuiz() {
    const qEl = document.getElementById("question");
    const oEl = document.getElementById("options");

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
            e.stopPropagation();
            if(i === d.c) score++;
            cur++;
            runQuiz();
        };
        oEl.appendChild(b);
    });
}

document.addEventListener("DOMContentLoaded", runQuiz);
