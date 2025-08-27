/* daily-aventure.js : Sélection quotidienne des jeux Aventure */

/*----------------------------------------------
  Fonction pour mélanger un tableau aléatoirement
-----------------------------------------------*/
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

/*----------------------------------------------
  Fonction pour sélectionner 10 jeux Aventure au hasard
-----------------------------------------------*/
function selectDailyAventureGames(games) {
    const aventureGames = Object.keys(games)
        .filter(key => games[key].categorie === 'Aventure')
        .map(key => ({ id: key, ...games[key] }));

    return shuffleArray(aventureGames).slice(0, 10);
}

/*----------------------------------------------
  Fonction pour récupérer la sélection quotidienne
-----------------------------------------------*/
function getDailyAventureGames() {
    const today = new Date().toISOString().slice(0, 10);
    const saved = JSON.parse(localStorage.getItem('dailyAventureGames') || '{}');

    if (saved.date === today && saved.games) {
        return saved.games;
    }

    const dailyGames = selectDailyAventureGames(games);
    localStorage.setItem('dailyAventureGames', JSON.stringify({ date: today, games: dailyGames }));
    return dailyGames;
}

/*----------------------------------------------
  Fonction pour afficher les jeux dans le carousel
-----------------------------------------------*/
function displayDailyAventureGames() {
    const wrapper = document.querySelector('.games-wrapper.daily-aventure');
    if (!wrapper) return;

    const dailyGames = getDailyAventureGames();
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
    console.log("Aventure games :", dailyGames);
}

/*----------------------------------------------
  Scroll automatique du carousel toutes les 10s
-----------------------------------------------*/
const wrapperAventure = document.querySelector('.games-wrapper.daily-aventure');
if (wrapperAventure) {
    setInterval(() => {
        const maxScrollLeft = wrapperAventure.scrollWidth - wrapperAventure.clientWidth;

        if (wrapperAventure.scrollLeft >= maxScrollLeft) {
            wrapperAventure.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            wrapperAventure.scrollBy({ left: 1000, behavior: 'smooth' });
        }
    }, 10000);
}

/*----------------------------------------------
  Initialisation : afficher les jeux Aventure
-----------------------------------------------*/
displayDailyAventureGames();
