function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        if(modalId === 'quiz-modal') runQuiz();
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
        const iframes = modal.querySelectorAll('iframe');
        iframes.forEach(iframe => { iframe.src = iframe.src; });
    }
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(m => {
            m.style.display = "none";
            document.body.style.overflow = "auto";
        });
    }
};

// QUIZ LOGIQUE
const quizData = [
    { q: "Qui a créé ChatGPT ?", a: ["OpenAI", "Google"], c: 0 },
    { q: "L'IA peut-elle mentir ?", a: ["Oui (hallucinations)", "Non"], c: 0 }
];

let cur = 0;
let score = 0;

function runQuiz() {
    const qEl = document.getElementById("question");
    const oEl = document.getElementById("options");
    const sEl = document.getElementById("score-text");

    if (cur >= quizData.length) {
        qEl.innerText = "Quiz fini !";
        oEl.innerHTML = "";
        sEl.innerText = `Score : ${score} / ${quizData.length}`;
        return;
    }

    const d = quizData[cur];
    qEl.innerText = d.q;
    oEl.innerHTML = "";

    d.a.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.className = "quiz-btn";
        btn.onclick = () => {
            if (i === d.c) score++;
            cur++;
            runQuiz();
        };
        oEl.appendChild(btn);
    });
}
