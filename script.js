function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    document.body.style.overflow = "hidden";
    if(modalId === 'quiz-modal') runQuiz();
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    const iframes = modal.querySelectorAll('iframe');
    iframes.forEach(i => i.src = i.src);
}

window.onclick = function(event) {
    if (event.target.className === 'modal') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(m => {
            m.style.display = "none";
            document.body.style.overflow = "auto";
        });
    }
};

const quizData = [
    { q: "Quand OpenAI a-t-il été créé ?", a: ["2015", "2022"], c: 0 },
    { q: "En combien de temps ChatGPT a atteint 100M d'utilisateurs ?", a: ["2 mois", "1 an"], c: 0 }
];
let cur = 0; let score = 0;

function runQuiz() {
    const qEl = document.getElementById("question");
    const oEl = document.getElementById("options");
    if (cur >= quizData.length) {
        qEl.innerText = "Terminé !";
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
