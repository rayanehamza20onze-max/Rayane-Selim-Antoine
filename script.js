// GESTION DU MODE SOMBRE
document.getElementById("darkModeBtn").onclick = () => {
    document.body.classList.toggle("dark-mode");
};

// ANIMATION D'APPARITION AU SCROLL
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add("show");
    });
}, { threshold: 0.1 });

document.querySelectorAll(".hidden").forEach(section => observer.observe(section));

// QUIZ INTERACTIF
const quizData = [
    {
        q: "ChatGPT comprend-il réellement le sens des phrases ?",
        a: ["Oui, il est intelligent", "Non, c'est de la probabilité statistique"],
        c: 1
    },
    {
        q: "Qu'est-ce qu'une hallucination dans le contexte de l'IA ?",
        a: ["Une panne de courant", "Une réponse fausse donnée avec assurance"],
        c: 1
    },
    {
        q: "Quel est l'élément central pour bien utiliser ChatGPT ?",
        a: ["Le Prompting", "La triche", "Le matériel"],
        c: 0
    }
];

let currentQ = 0;
let score = 0;

function loadQuiz() {
    const qEl = document.getElementById("question");
    const aEl = document.getElementById("answers");
    
    if(currentQ >= quizData.length) {
        qEl.innerText = "Quiz terminé !";
        aEl.innerHTML = "";
        document.getElementById("score-display").innerText = `Votre score final : ${score}/${quizData.length}`;
        return;
    }

    const data = quizData[currentQ];
    qEl.innerText = data.q;
    aEl.innerHTML = "";

    data.a.forEach((ans, i) => {
        const btn = document.createElement("button");
        btn.innerText = ans;
        btn.style.display = "block";
        btn.style.width = "100%";
        btn.onclick = () => {
            if(i === data.c) score++;
            currentQ++;
            loadQuiz();
        };
        aEl.appendChild(btn);
    });
}

loadQuiz();
