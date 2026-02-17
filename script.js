const quizData = [
    {
        q: "Que signifie LLM ?",
        o: ["Large Language Model", "Long Logic Machine", "Low Level Mode"],
        a: 0
    },
    {
        q: "ChatGPT comprend-il réellement le sens des phrases ?",
        o: ["Oui, il est conscient", "Non, c'est de la probabilité statistique"],
        a: 1
    },
    {
        q: "Quelle entreprise a créé ChatGPT ?",
        a: 0,
        o: ["OpenAI", "Google", "Microsoft"]
    },
    {
        q: "Qu'est-ce qu'une hallucination d'IA ?",
        o: ["Un virus informatique", "Une réponse fausse inventée avec assurance"],
        a: 1
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
    const qEl = document.getElementById("question");
    const oEl = document.getElementById("options");
    const rEl = document.getElementById("result");

    if (currentQuestion >= quizData.length) {
        qEl.innerText = "Quiz Terminé !";
        oEl.innerHTML = "";
        rEl.innerText = `Votre score : ${score} / ${quizData.length}`;
        return;
    }

    const current = quizData[currentQuestion];
    qEl.innerText = current.q;
    oEl.innerHTML = "";

    current.o.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(index);
        oEl.appendChild(btn);
    });
}

function checkAnswer(idx) {
    if (idx === quizData[currentQuestion].a) {
        score++;
    }
    currentQuestion++;
    loadQuiz();
}

document.addEventListener("DOMContentLoaded", loadQuiz);
