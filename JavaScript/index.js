document.querySelectorAll('.games-carousel').forEach(carousel => {
                const wrapper = carousel.querySelector('.games-wrapper');
                const btnLeft = carousel.querySelector('.carousel-btn.left');
                const btnRight = carousel.querySelector('.carousel-btn.right');

                btnLeft.addEventListener('click', () => {
                    wrapper.scrollBy({ left: -300, behavior: 'smooth' });
                });

                btnRight.addEventListener('click', () => {
                    wrapper.scrollBy({ left: 300, behavior: 'smooth' });
                });
            });

            // Code existant pour charger les jeux dans un iframe
            document.querySelectorAll('.game-container').forEach(container => {
                container.addEventListener('click', () => {
                    const gameURL = container.getAttribute('data-game');
                    container.innerHTML = `<iframe src="${gameURL}" allowfullscreen></iframe>`;
                });
            });