/*weekly*/
// Fonction pour mélanger un tableau
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Fonction pour sélectionner les jeux de la semaine
function selectWeeklyGames(games) {
    const categories = { Action: [], Aventure: [], Classique: [] };
    
    // Classer les jeux par catégorie
    for (const key in games) {
        const game = games[key];
        // Ici, on suppose que tu as ajouté un attribut "categorie" à chaque jeu
        if (game.categorie && categories[game.categorie]) {
            categories[game.categorie].push({ id: key, ...game });
        }
    }

    let selectedGames = [];

    // Prendre 5 jeux par catégorie si possible
    for (const cat in categories) {
        const shuffled = shuffleArray(categories[cat]);
        selectedGames.push(...shuffled.slice(0, Math.min(5, shuffled.length)));
    }

    // Ajouter 5 jeux supplémentaires au hasard
    const allGames = Object.keys(games).map(key => ({ id: key, ...games[key] }));
    const remaining = allGames.filter(g => !selectedGames.find(sg => sg.id === g.id));
    selectedGames.push(...shuffleArray(remaining).slice(0, 5));

    return selectedGames;
}

// Affichage des jeux dans le carousel
function displayWeeklyGames() {
    const carouselWrapper = document.querySelector('.games-wrapper.weekly');
    if (!carouselWrapper) return;

    const weeklyGames = selectWeeklyGames(games);

    carouselWrapper.innerHTML = '';
    weeklyGames.forEach(game => {
        const gameContainer = document.createElement('div');
        gameContainer.classList.add('game-container');

        const imageDiv = document.createElement('div');
        imageDiv.classList.add('Image');

        const link = document.createElement('a');
        link.href = `./game.html?id=${game.id}`; // lien vers la page du jeu

        const img = document.createElement('img');
        img.src = game.image;
        img.alt = game.title;

        link.appendChild(img);
        imageDiv.appendChild(link);
        gameContainer.appendChild(imageDiv);

        const title = document.createElement('p');
        title.classList.add('Titre');
        title.textContent = game.title;
        gameContainer.appendChild(title);

        carouselWrapper.appendChild(gameContainer);
    });
}

// Scroll automatique
document.querySelectorAll('.games-wrapper.weekly').forEach(wrapper => {
    setInterval(() => {
        const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;
        if (wrapper.scrollLeft >= maxScrollLeft) {
            wrapper.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            wrapper.scrollBy({ left: 1000, behavior: 'smooth' });
        }
    }, 10000); // toutes les 10 secondes
});

// Lancer l'affichage
displayWeeklyGames();
