/* search bar */
document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.querySelector(".search-bar");
    const resultsContainer = document.createElement("div");
    resultsContainer.classList.add("search-results");

    // On place les résultats juste après la barre de recherche
    document.querySelector(".search-container").appendChild(resultsContainer);

    searchBar.addEventListener("input", () => {
        const query = searchBar.value.trim().toLowerCase();
        resultsContainer.innerHTML = ""; // On nettoie

        if (query.length >= 3) {
            // Utilisation de Object.entries pour garder l'id
            const filteredGames = Object.entries(games).filter(([id, game]) =>
                game.title.toLowerCase().includes(query) ||
                game.developpeur.toLowerCase().includes(query)
            );

            if (filteredGames.length > 0) {
                filteredGames.forEach(([id, game]) => {
                    const gameEl = document.createElement("a");
                    gameEl.href = `./game.html?id=${id}`; // redirection vers game.html?id=clé
                    // gameEl.target = "_blank"; // supprimé pour rester sur le même onglet
                    gameEl.classList.add("search-item");

                    gameEl.innerHTML = `
                        <img src="${game.image}" alt="${game.title}">
                        <div>
                            <span class="title">${game.title}</span>
                            <span class="developer">${game.developpeur}</span>
                        </div>
                    `;
                    resultsContainer.appendChild(gameEl);
                });
            } else {
                resultsContainer.innerHTML = `<p>Aucun jeu trouvé</p>`;
            }
        }
    });
});

const resultsContainer = document.querySelector(".search-results");

resultsContainer.addEventListener('touchstart', function(e) {
    this.startY = e.touches[0].pageY;
    this.scrollStart = this.scrollTop;
}, { passive: true });

resultsContainer.addEventListener('touchmove', function(e) {
    const touchY = e.touches[0].pageY;
    const deltaY = this.startY - touchY;

    // Si on est en haut et qu'on descend ou en bas et qu'on monte, empêcher le scroll de la page
    if ((this.scrollTop === 0 && deltaY < 0) || 
        (this.scrollTop + this.offsetHeight >= this.scrollHeight && deltaY > 0)) {
        e.preventDefault();
    }
}, { passive: false });

