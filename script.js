// DARK MODE
document.getElementById("darkModeBtn").onclick = () => {
    document.body.classList.toggle("dark");
};

// MENU MOBILE
document.getElementById("menuToggle").onclick = () => {
    document.getElementById("menu").classList.toggle("active");
};

// SCROLL ANIMATION
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});
document.querySelectorAll(".hidden").forEach(el=>observer.observe(el));

// PARALLAX
window.addEventListener("scroll", ()=>{
    const scroll = window.scrollY;
    document.querySelector(".parallax").style.transform =
        `translateY(${scroll * 0.3}px)`;
});

// GRAPH ANIMÉ
const canvas = document.getElementById("chart");
if(canvas){
    const ctx = canvas.getContext("2d");
    const data = [1,10,100];
    let progress = 0;

    function animate(){
        ctx.clearRect(0,0,700,400);
        data.forEach((value,i)=>{
            let height = value * 2 * progress;
            ctx.fillStyle = "#00ffd5";
            ctx.fillRect(100 + i*150,350-height,80,height);
        });
        if(progress < 1){
            progress += 0.02;
            requestAnimationFrame(animate);
        }
    }
    animate();
}

// QUIZ MULTI QUESTIONS
const quizData = [
    {
        question:"ChatGPT comprend-il vraiment ?",
        answers:["Oui","Non"],
        correct:1
    },
    {
        question:"Sur quoi est basé ChatGPT ?",
        answers:["Transformer","GPS","Blockchain"],
        correct:0
    }
];

let current = 0;
let score = 0;

function loadQuestion(){
    if(current >= quizData.length){
        document.getElementById("question").innerText =
            "Quiz terminé ! Score : " + score + "/" + quizData.length;
        document.getElementById("answers").innerHTML = "";
        return;
    }

    const q = quizData[current];
    document.getElementById("question").innerText = q.question;

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    q.answers.forEach((answer,index)=>{
        const btn = document.createElement("button");
        btn.innerText = answer;
        btn.onclick = ()=>{
            if(index === q.correct) score++;
            current++;
            loadQuestion();
        };
        answersDiv.appendChild(btn);
    });
}

loadQuestion();
