//scroll bar
document.querySelectorAll('.games-carousel').forEach(carousel => {
    const wrapper = carousel.querySelector('.games-wrapper');
    const btnLeft = carousel.querySelector('.carousel-btn.left');
    const btnRight = carousel.querySelector('.carousel-btn.right');

// Fonction pour vérifier si on est au début ou à la fin
    function updateButtons() {
        const scrollLeft = wrapper.scrollLeft;
        const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;

        // Tout à gauche
        if (scrollLeft <= 0) {
            btnLeft.style.display = "none";
        } else {
            btnLeft.style.display = "flex";
        }

        // Tout à droite
        if (scrollLeft >= maxScrollLeft) {
            btnRight.style.display = "none";
        } else {
            btnRight.style.display = "flex";
        }
    }

   // Écouter le clic sur les boutons
    btnLeft.addEventListener('click', () => {
        wrapper.scrollBy({ left: -400, behavior: 'smooth' });
    });

    btnRight.addEventListener('click', () => {
        wrapper.scrollBy({ left: 400, behavior: 'smooth' });
    });

     // Vérifier au chargement et quand on scroll
    wrapper.addEventListener('scroll', updateButtons);
    window.addEventListener('resize', updateButtons);

    // Premier appel
    updateButtons();
});

// Code existant pour charger les jeux dans un iframe
document.querySelectorAll('.Image').forEach(container => {
    container.addEventListener('click', () => {
        const gameURL = container.getAttribute('data-game');
        container.innerHTML = `<iframe src="${gameURL}" allowfullscreen></iframe>`;
    });
});


/*parti jeux */

// Récupère l'ID depuis l'URL
        const params = new URLSearchParams(window.location.search);
        const gameId = params.get('id');

        // Vérifie si le jeu existe dans notre liste
        if (games[gameId]) {
            document.getElementById("game-head").textContent = games[gameId].title;
            document.getElementById("game-title").textContent = games[gameId].title;
            document.getElementById("game-frame").src = games[gameId].url;
            document.getElementById("game-developpeur").textContent = games[gameId].developpeur;
            document.getElementById("game-date_sortie").textContent = games[gameId].date_sortie;
            document.getElementById("game-technologie").textContent = games[gameId].technologie;
            document.getElementById("game-description").textContent = games[gameId].description;
        } else {
            document.getElementById("game-title").textContent = "Jeu introuvable";
            document.getElementById("game-description").textContent = "Désolé, ce jeu n'existe pas.";
        }