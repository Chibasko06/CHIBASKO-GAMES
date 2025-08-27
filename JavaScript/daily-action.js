/* daily-action.js : Sélection quotidienne des jeux Action */

/*----------------------------------------------
  Fonction pour mélanger un tableau aléatoirement
-----------------------------------------------*/
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

/*----------------------------------------------
  Fonction pour sélectionner 10 jeux Action au hasard
-----------------------------------------------*/
function selectDailyActionGames(games) {
    const actionGames = Object.keys(games)
        .filter(key => games[key].categorie === 'Action')
        .map(key => ({ id: key, ...games[key] }));

    return shuffleArray(actionGames).slice(0, 10);
}

/*----------------------------------------------
  Fonction pour récupérer la sélection quotidienne
-----------------------------------------------*/
function getDailyActionGames() {
    const today = new Date().toISOString().slice(0, 10);
    const saved = JSON.parse(localStorage.getItem('dailyActionGames') || '{}');

    if (saved.date === today && saved.games) {
        return saved.games;
    }

    const dailyGames = selectDailyActionGames(games);
    localStorage.setItem('dailyActionGames', JSON.stringify({ date: today, games: dailyGames }));
    return dailyGames;
}

/*----------------------------------------------
  Fonction pour afficher les jeux dans le carousel
-----------------------------------------------*/
function displayDailyActionGames() {
    const wrapper = document.querySelector('.games-wrapper.daily-action');
    if (!wrapper) return;

    const dailyGames = getDailyActionGames();
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
    console.log("Action games :", dailyGames);
}

/*----------------------------------------------
  Scroll automatique du carousel toutes les 10s
-----------------------------------------------*/
const wrapperAction = document.querySelector('.games-wrapper.daily-action');
if (wrapperAction) {
    setInterval(() => {
        const maxScrollLeft = wrapperAction.scrollWidth - wrapperAction.clientWidth;

        if (wrapperAction.scrollLeft >= maxScrollLeft) {
            wrapperAction.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            wrapperAction.scrollBy({ left: 1000, behavior: 'smooth' });
        }
    }, 10000);
}

/*----------------------------------------------
  Initialisation : afficher les jeux Action
-----------------------------------------------*/
displayDailyActionGames();
