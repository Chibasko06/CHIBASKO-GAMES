/* weekly.js : Sélection quotidienne des jeux avec affichage carousel et scroll automatique */

/*----------------------------------------------
  Fonction pour mélanger un tableau de manière aléatoire
-----------------------------------------------*/
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

/*----------------------------------------------
  Fonction pour sélectionner les jeux de la semaine
  en respectant les catégories et en ajoutant des jeux bonus
-----------------------------------------------*/
function selectWeeklyGames(games) {
    const categories = { Action: [], Aventure: [], Classique: [] };
    
    // Classer les jeux par catégorie
    for (const key in games) {
        const game = games[key];
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

    // Ajouter 5 jeux supplémentaires au hasard parmi les restants
    const allGames = Object.keys(games).map(key => ({ id: key, ...games[key] }));
    const remaining = allGames.filter(g => !selectedGames.find(sg => sg.id === g.id));
    selectedGames.push(...shuffleArray(remaining).slice(0, 5));

    return selectedGames;
}

/*----------------------------------------------
  Fonction pour récupérer la sélection quotidienne
  La sélection change une seule fois par jour
-----------------------------------------------*/
function getDailyWeeklyGames() {
    const today = new Date().toISOString().slice(0, 10); // Format "YYYY-MM-DD"
    const saved = JSON.parse(localStorage.getItem('weeklyGames') || '{}');

    // Si une sélection existe pour aujourd'hui, on la réutilise
    if (saved.date === today && saved.games) {
        return saved.games;
    }

    // Sinon, on génère une nouvelle sélection et on la sauvegarde
    const weeklyGames = selectWeeklyGames(games);
    localStorage.setItem('weeklyGames', JSON.stringify({ date: today, games: weeklyGames }));
    return weeklyGames;
}

/*----------------------------------------------
  Fonction pour afficher les jeux dans le carousel
-----------------------------------------------*/
function displayWeeklyGames() {
    const carouselWrapper = document.querySelector('.games-wrapper.weekly');
    if (!carouselWrapper) return;

    const weeklyGames = getDailyWeeklyGames(); // sélection quotidienne

    // Vider le carousel avant ajout
    carouselWrapper.innerHTML = '';

    weeklyGames.forEach(game => {
        // Conteneur global du jeu
        const gameContainer = document.createElement('div');
        gameContainer.classList.add('game-container');

        // Div contenant l'image cliquable
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('Image');

        // Lien vers la page du jeu
        const link = document.createElement('a');
        link.href = `./game.html?id=${game.id}`;

        // Image du jeu
        const img = document.createElement('img');
        img.src = game.image;
        img.alt = game.title;

        link.appendChild(img);
        imageDiv.appendChild(link);
        gameContainer.appendChild(imageDiv);

        // Titre du jeu en dessous
        const title = document.createElement('p');
        title.classList.add('Titre');
        title.textContent = game.title;
        gameContainer.appendChild(title);

        // Ajouter le jeu au carousel
        carouselWrapper.appendChild(gameContainer);
    });
}

/*----------------------------------------------
  Scroll automatique du carousel toutes les 10s
-----------------------------------------------*/
document.querySelectorAll('.games-wrapper.weekly').forEach(wrapper => {
    setInterval(() => {
        const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;

        if (wrapper.scrollLeft >= maxScrollLeft) {
            // Retour au début
            wrapper.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            // Avancer de 1000px (ou ajuster selon la taille de ton carousel)
            wrapper.scrollBy({ left: 1000, behavior: 'smooth' });
        }
    }, 10000);
});

/*----------------------------------------------
  Initialisation : afficher les jeux
-----------------------------------------------*/
displayWeeklyGames();
