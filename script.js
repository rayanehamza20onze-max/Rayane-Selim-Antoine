function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    document.body.style.overflow = "hidden";
    if(modalId === 'quiz-modal') runQuiz();
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.style.overflow = "auto";
}

// Quiz simple
const quizData = [
    { q: "Qui a créé ChatGPT ?", a: ["OpenAI", "Google"], c: 0 },
    { q: "L'IA a-t-elle des hallucinations ?", a: ["Oui", "Non"], c: 0 }
];
let cur = 0; let score = 0;

function runQuiz() {
    const qEl = document.getElementById("question");
    const oEl = document.getElementById("options");
    if (cur >= quizData.length) {
        qEl.innerText = "Quiz fini !";
        oEl.innerHTML = "";
        document.getElementById("score-text").innerText = `Score : ${score}/${quizData.length}`;
        return;
    }
    const d = quizData[cur];
    qEl.innerText = d.q;
    oEl.innerHTML = "";
    d.a.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.className = "quiz-btn";
        btn.onclick = () => { if(i===d.c) score++; cur++; runQuiz(); };
        oEl.appendChild(btn);
    });
}
