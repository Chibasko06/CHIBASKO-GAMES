/* daily-classique.js : Sélection quotidienne des jeux Classique */

/*----------------------------------------------
  Fonction pour mélanger un tableau aléatoirement
-----------------------------------------------*/
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

/*----------------------------------------------
  Fonction pour sélectionner 10 jeux Classique au hasard
-----------------------------------------------*/
function selectDailyClassiqueGames(games) {
    const classiqueGames = Object.keys(games)
        .filter(key => games[key].categorie === 'Classique')
        .map(key => ({ id: key, ...games[key] }));

    return shuffleArray(classiqueGames).slice(0, 10);
}

/*----------------------------------------------
  Fonction pour récupérer la sélection quotidienne
-----------------------------------------------*/
function getDailyClassiqueGames() {
    const today = new Date().toISOString().slice(0, 10);
    const saved = JSON.parse(localStorage.getItem('dailyClassiqueGames') || '{}');

    if (saved.date === today && saved.games) {
        return saved.games;
    }

    const dailyGames = selectDailyClassiqueGames(games);
    localStorage.setItem('dailyClassiqueGames', JSON.stringify({ date: today, games: dailyGames }));
    return dailyGames;
}

/*----------------------------------------------
  Fonction pour afficher les jeux dans le carousel
-----------------------------------------------*/
function displayDailyClassiqueGames() {
    const wrapper = document.querySelector('.games-wrapper.daily-classique');
    if (!wrapper) return;

    const dailyGames = getDailyClassiqueGames();
    wrapper.innerHTML = '';

    dailyGames.forEach(game => {
        const gameContainer = document.createElement('div');
        gameContainer.classList.add('game-container');

        const imageDiv = document.createElement('div');
        imageDiv.classList.add('Image');

        const link = document.createElement('a');
        link.href = `./game.html?id=${game.id}`;

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

        wrapper.appendChild(gameContainer);
    });
    console.log("Classique games :", dailyGames);
}

/*----------------------------------------------
  Scroll automatique du carousel toutes les 10s
-----------------------------------------------*/
const wrapperClassique = document.querySelector('.games-wrapper.daily-classique');
if (wrapperClassique) {
    setInterval(() => {
        const maxScrollLeft = wrapperClassique.scrollWidth - wrapperClassique.clientWidth;

        if (wrapperClassique.scrollLeft >= maxScrollLeft) {
            wrapperClassique.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            wrapperClassique.scrollBy({ left: 1000, behavior: 'smooth' });
        }
    }, 10000);
}

/*----------------------------------------------
  Initialisation : afficher les jeux Classique
-----------------------------------------------*/
displayDailyClassiqueGames();
