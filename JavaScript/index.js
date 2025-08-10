document.querySelectorAll('.games-carousel').forEach(carousel => {
                const wrapper = carousel.querySelector('.games-wrapper');
                const btnLeft = carousel.querySelector('.carousel-btn.left');
                const btnRight = carousel.querySelector('.carousel-btn.right');

                btnLeft.addEventListener('click', () => {
                    wrapper.scrollBy({ left: -400, behavior: 'smooth' });
                });

                btnRight.addEventListener('click', () => {
                    wrapper.scrollBy({ left: 400, behavior: 'smooth' });
                });
            });

            // Code existant pour charger les jeux dans un iframe
            document.querySelectorAll('.game-container').forEach(container => {
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
            document.getElementById("game-title").textContent = games[gameId].title;
            document.getElementById("game-frame").src = games[gameId].url;
            document.getElementById("game-description").textContent = games[gameId].description;
        } else {
            document.getElementById("game-title").textContent = "Jeu introuvable";
            document.getElementById("game-description").textContent = "Désolé, ce jeu n'existe pas.";
        }