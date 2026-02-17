body {
    background-color: #0a0a0a;
    color: #ffffff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
}

.hero {
    text-align: center;
    padding: 60px 20px;
    background: linear-gradient(135deg, #000000, #004d40);
    border-bottom: 1px solid #333;
}

h1 { color: #00ffd5; font-size: 2.5rem; margin: 0; }

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    padding: 50px 20px;
    max-width: 1200px;
    margin: 0 auto;
}

/* RECTANGLES */
.card {
    background: #181818;
    width: 280px;
    padding: 40px 20px;
    border-radius: 20px;
    border: 1px solid #333;
    text-align: center;
    cursor: pointer;
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
    transform: translateY(-10px);
    border-color: #00ffd5;
    box-shadow: 0 10px 30px rgba(0, 255, 213, 0.15);
}

.icon { font-size: 4rem; display: block; margin-bottom: 20px; }
h2 { color: #00ffd5; margin-bottom: 10px; }

/* MODALE PLEIN ÉCRAN */
.modal {
    display: none;
    position: fixed;
    z-index: 9999;
    left: 0; top: 0;
    width: 100%; height: 100%;
    background-color: #0a0a0a;
    overflow-y: auto;
}

.modal-header {
    padding: 20px 40px;
    display: flex;
    justify-content: flex-end;
    position: sticky;
    top: 0;
    background: #0a0a0a;
    z-index: 10;
}

.close-btn {
    background: #ff3e3e;
    color: white;
    border: none;
    padding: 12px 30px;
    font-size: 1.1rem;
    font-weight: bold;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.2s;
}

.close-btn:hover { background: #ff0000; transform: scale(1.05); }

.modal-content {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px 40px 100px 40px;
}

.modal-content h2 { font-size: 3rem; margin-bottom: 30px; border-bottom: 2px solid #00ffd5; padding-bottom: 10px; }
.modal-content p, .modal-content li { font-size: 1.2rem; line-height: 1.8; color: #ddd; }

/* MEDIAS */
.modal-media img { width: 100%; border-radius: 15px; margin: 30px 0; border: 1px solid #444; }
.video-box { position: relative; padding-bottom: 56.25%; height: 0; margin-top: 30px; }
.video-box iframe { position: absolute; top:0; left:0; width:100%; height:100%; border-radius: 15px; }

/* QUIZ */
.quiz-opt {
    display: block; width: 100%; padding: 18px; margin: 12px 0;
    background: #222; color: white; border: 1px solid #00ffd5; border-radius: 12px; cursor: pointer; text-align: left; font-size: 1.1rem;
}
.quiz-opt:hover { background: #00ffd5; color: #000; font-weight: bold; }
