// DARK MODE
document.getElementById("darkModeBtn").onclick = () => {
    document.body.classList.toggle("dark");
};

// SCROLL ANIMATION
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add("show");
    });
});
document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

// QUIZ BASÉ SUR TES INFOS
const quizData = [
    {
        question: "ChatGPT comprend-il vraiment ce qu'il dit ?",
        answers: ["Oui, parfaitement", "Non, c'est de la probabilité statistique"],
        correct: 1
    },
    {
        question: "Quelle société est à l'origine de ChatGPT ?",
        answers: ["Google", "OpenAI", "Microsoft"],
        correct: 1
    },
    {
        question: "Qu'est-ce qu'un 'prompt' ?",
        answers: ["Un virus", "L'art de donner une instruction à l'IA", "Un type de serveur"],
        correct: 1
    }
];

let current = 0, score = 0;

function loadQuestion() {
    const q = quizData[current];
    const answersDiv = document.getElementById("answers");
    document.getElementById("question").innerText = q.question;
    answersDiv.innerHTML = "";
    
    q.answers.forEach((ans, i) => {
        const btn = document.createElement("button");
        btn.innerText = ans;
        btn.onclick = () => {
            if(i === q.correct) score++;
            current++;
            if(current < quizData.length) loadQuestion();
            else {
                document.getElementById("question").innerText = "Terminé !";
                answersDiv.innerHTML = "";
                document.getElementById("score").innerText = "Score : " + score + "/" + quizData.length;
            }
        };
        answersDiv.appendChild(btn);
    });
}
loadQuestion();
