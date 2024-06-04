const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '53427e1197msh353b6cde7fd092ep1c7b16jsnac4d0725a9f4',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
};

fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
    .then(response => response.json())
    .then(response => {
        const peliculasContainer = document.querySelector('.peliculas-js');
        peliculasContainer.innerHTML = '';

        response.forEach(pelicula => {
            const peliculaCard = document.createElement('div');
            peliculaCard.classList.add('card', 'mb-3');
            peliculaCard.style.maxWidth = '540px';

            const peliculaCardInner = `
                <div class="row g-0">
                    <div class="col-md-4 center-img">
                        <a href="tlou.html">
                            <img src="${pelicula.image}" class="img-fluid rounded" alt="${pelicula.title}">
                        </a>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title"><strong>${pelicula.title}</strong></h5>
                            <p class="card-text"><strong>Descripción:</strong> ${pelicula.description}</p>
                            <p class="card-text"><strong>Género:</strong> ${pelicula.genre}</p>
                            <p class="card-text"><strong>Año de salida:</strong> ${pelicula.year}</p>
                            <p class="card-text"><strong>Rating:</strong> ${pelicula.rating}</p>
                        </div>
                    </div>
                </div>
            `;

            peliculaCard.innerHTML = peliculaCardInner;
            peliculasContainer.appendChild(peliculaCard);
        });
    })
    .catch(err => console.error(err));
