// MODE SOMBRE
document.getElementById("darkModeBtn").onclick = () => {
    document.body.classList.toggle("dark-theme");
};

// MENU MOBILE
document.getElementById("menuToggle").onclick = () => {
    document.getElementById("menu").classList.toggle("active");
};

// ANIMATIONS D'APPARITION
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add("show");
    });
});
document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

// GRAPHIQUE DES PARAMÈTRES (Puissance de l'IA)
const canvas = document.getElementById("chart");
if(canvas){
    const ctx = canvas.getContext("2d");
    const values = [10, 50, 175, 300]; // Représentation simplifiée
    const labels = ["GPT-1", "GPT-2", "GPT-3", "GPT-4"];
    let progress = 0;

    function animateChart() {
        ctx.clearRect(0, 0, 700, 400);
        values.forEach((v, i) => {
            ctx.fillStyle = "#00ffd5";
            let h = v * progress;
            ctx.fillRect(100 + i*150, 350 - h, 60, h);
            ctx.fillStyle = "white";
            ctx.fillText(labels[i], 110 + i*150, 370);
        });
        if(progress < 1) {
            progress += 0.02;
            requestAnimationFrame(animateChart);
        }
    }
    animateChart();
}

// QUIZ COMPLET
const quizData = [
    {
        q: "ChatGPT comprend-il réellement vos phrases ?",
        a: ["Oui, il est conscient", "Non, il prédit des probabilités"],
        c: 1
    },
    {
        q: "Quelle entreprise a créé ChatGPT ?",
        a: ["Google", "OpenAI", "Microsoft"],
        c: 1
    },
    {
        q: "Comment appelle-t-on l'art de donner des instructions à l'IA ?",
        a: ["Le Coding", "Le Prompting", "Le Phishing"],
        c: 1
    },
    {
        q: "Qu'est-ce qu'une 'hallucination' pour une IA ?",
        a: ["Un virus informatique", "Une réponse inventée fausse", "Une panne de serveur"],
        c: 1
    }
];

let cur = 0, score = 0;
function loadQuiz() {
    const qEl = document.getElementById("question");
    const aEl = document.getElementById("answers");
    if(cur >= quizData.length) {
        qEl.innerText = `Quiz terminé ! Votre score : ${score}/${quizData.length}`;
        aEl.innerHTML = "";
        return;
    }
    const data = quizData[cur];
    qEl.innerText = data.q;
    aEl.innerHTML = "";
    data.a.forEach((ans, i) => {
        const b = document.createElement("button");
        b.innerText = ans;
        b.onclick = () => {
            if(i === data.c) score++;
            cur++;
            loadQuiz();
        };
        aEl.appendChild(b);
    });
}
loadQuiz();
