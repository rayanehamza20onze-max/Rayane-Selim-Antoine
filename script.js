:root {
    --primary: #10a37f;
    --bg: #f0f2f5;
    --dark: #202123;
}

body {
    font-family: 'Segoe UI', sans-serif;
    background-color: var(--bg);
    margin: 0;
}

.main-header {
    background: var(--primary);
    color: white;
    text-align: center;
    padding: 3rem 1rem;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}

.header-logo { width: 60px; filter: brightness(0) invert(1); }

.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    max-width: 1100px;
    margin: -50px auto 50px;
    padding: 0 20px;
}

.card {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    text-align: center;
    transition: 0.3s;
    /* IMPORTANT POUR LE CLIC */
    cursor: pointer;
    pointer-events: auto;
}

.card:hover { transform: translateY(-10px); }

.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0; top: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.7);
}

.modal-content {
    background: white;
    margin: 5% auto;
    padding: 30px;
    width: 80%;
    max-width: 800px;
    border-radius: 20px;
}

.close { float: right; font-size: 2rem; cursor: pointer; }

.video-container {
    position: relative; padding-bottom: 56.25%; height: 0;
}

.video-container iframe {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
}
