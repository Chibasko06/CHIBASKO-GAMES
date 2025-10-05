// ===============================
// SCROLL BAR (compatible iOS)
// ===============================
document.querySelectorAll('.games-carousel').forEach(carousel => {
    const wrapper = carousel.querySelector('.games-wrapper');
    const btnLeft = carousel.querySelector('.carousel-btn.left');
    const btnRight = carousel.querySelector('.carousel-btn.right');

    // Fonction pour vérifier si on est au début ou à la fin
    function updateButtons() {
        const scrollLeft = wrapper.scrollLeft;
        const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;

        // Tout à gauche
        btnLeft.style.display = scrollLeft <= 1 ? "none" : "flex";
        // Tout à droite
        btnRight.style.display = scrollLeft >= maxScrollLeft - 1 ? "none" : "flex";
    }

    // Fonction de scroll compatible iOS (sans behavior si non supporté)
    function safeScrollBy(delta) {
        try {
            wrapper.scrollBy({ left: delta, behavior: 'smooth' });
        } catch {
            // fallback pour iOS anciens
            wrapper.scrollLeft += delta;
        }
    }

    // Écouter le clic sur les boutons
    btnLeft.addEventListener('click', () => safeScrollBy(-500));
    btnRight.addEventListener('click', () => safeScrollBy(500));

    // Vérifier au chargement et quand on scroll
    wrapper.addEventListener('scroll', updateButtons, { passive: true });
    window.addEventListener('resize', updateButtons);

    // Premier appel
    updateButtons();
});

// ===============================
// CHARGEMENT D'UN JEU DANS UN IFRAME
// ===============================
document.querySelectorAll('.Image').forEach(container => {
    let lastTouch = 0;
    const loadIframe = () => {
        const gameURL = container.getAttribute('data-game');
        container.innerHTML = `<iframe src="${gameURL}" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>`;
    };

    // Gestion du tactile + clic sans double déclenchement
    container.addEventListener('touchend', e => {
        const now = Date.now();
        if (now - lastTouch < 600) return; // éviter double tap
        lastTouch = now;
        loadIframe();
    }, { passive: true });

    container.addEventListener('click', loadIframe);
});

// ===============================
// PARTIE JEU (chargement depuis URL)
// ===============================
const params = new URLSearchParams(window.location.search);
const gameId = params.get('id');

if (typeof games !== "undefined" && games[gameId]) {
    const g = games[gameId];
    document.getElementById("game-head").textContent = g.title;
    document.getElementById("game-title").textContent = g.title;

    const frame = document.getElementById("game-frame");
    frame.setAttribute('allowfullscreen', '');
    frame.setAttribute('webkitallowfullscreen', '');
    frame.setAttribute('mozallowfullscreen', '');
    frame.src = g.url;

    document.getElementById("game-developpeur").textContent = g.developpeur;
    document.getElementById("game-date_sortie").textContent = g.date_sortie;
    document.getElementById("game-mobile_compatible").textContent = g.mobile_compatible;
    document.getElementById("game-technologie").textContent = g.technologie;
    document.getElementById("game-description").textContent = g.description;
} else {
    document.getElementById("game-title").textContent = "Jeu introuvable";
    document.getElementById("game-description").textContent = "Désolé, ce jeu n'existe pas.";
}

// ===============================
// OPTIONS IFRAME (plein écran + reload)
// ===============================
document.addEventListener("DOMContentLoaded", () => {
    const iframe = document.getElementById("game-frame");
    const fullscreenBtn = document.getElementById("fullscreen-btn");
    const reloadBtn = document.getElementById("reload-btn");

    // Détection iOS
    function isIOS() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    }

    // Plein écran (compatible iOS)
    fullscreenBtn.addEventListener("click", () => {
        const gameURL = iframe?.src;

        if (!gameURL) {
            alert("Aucun jeu chargé.");
            return;
        }

        if (isIOS()) {
            // Sur iOS, le plein écran iframe est bloqué => ouvrir le jeu dans un nouvel onglet
            window.open(gameURL, '_blank', 'noopener');
            return;
        }

        // Autres navigateurs → essayer le plein écran natif
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen().catch(() => {
                window.open(gameURL, '_blank', 'noopener');
            });
        } else if (iframe.webkitRequestFullscreen) {
            try {
                iframe.webkitRequestFullscreen();
            } catch {
                window.open(gameURL, '_blank', 'noopener');
            }
        } else if (iframe.mozRequestFullScreen) {
            iframe.mozRequestFullScreen();
        } else if (iframe.msRequestFullscreen) {
            iframe.msRequestFullscreen();
        } else {
            // Si rien n’est supporté, dernier recours
            window.open(gameURL, '_blank', 'noopener');
        }
    });

    // Recharger le jeu
    reloadBtn.addEventListener("click", () => {
        iframe.src = iframe.src;
    });
});
