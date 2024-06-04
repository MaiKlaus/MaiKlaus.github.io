const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '53427e1197msh353b6cde7fd092ep1c7b16jsnac4d0725a9f4',
		'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
	}
};

fetch('https://opencritic-api.p.rapidapi.com/game/popular', options)
    .then(response => response.json())
    .then(response => {
        const juegosContainer = document.querySelector('.juegos-js');
        juegosContainer.innerHTML = '';

        response.forEach(juego => {
            const juegoCard = document.createElement('div');
            juegoCard.classList.add('card', 'mb-3');
            juegoCard.style.maxWidth = '540px';

            const juegoCardInner = `
                <div class="row g-0">
				<div class="col-md-4">
					<a href="tlou.html">
						<img src="${juego.images.box.og}" class="img-fluid rounded-start" alt="${juego.name}">
					</a>
				</div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title"><strong>${juego.name}</strong></h5>
                            <p class="card-text"><strong>Fecha de salida:</strong> ${new Date(juego.firstReleaseDate).toLocaleDateString()}</p>
                            <p class="card-text"><strong>Puntaje Top Critic:</strong> ${juego.topCriticScore}</p>
                            <p class="card-text"><strong>Tier:</strong> ${juego.tier}</p>
                        </div>
                    </div>
                </div>
            `;

            juegoCard.innerHTML = juegoCardInner;
            juegosContainer.appendChild(juegoCard);
        });
    })
    .catch(err => console.error(err));