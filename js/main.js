//db.json api URL
const apiURL = 'http://localhost:3000/films';

//function that fetch the first movie data from the JSON db
function getFirstMovie(){

    fetch(`${apiURL}/1`)
    .then((response) => response.json())
    .then(movieData => {

        let movieCard = document.createElement('li');
        movieCard.className = 'movie-card'
        movieCard.innerHTML = `
            <img src="${movieData.poster}" alt="poster">
            <div class = "content">
                <h3>${movieData.title}</h3>
                <p><span>Duration: ${movieData.runtime} min</span>
                <p><span>Showtimes: ${movieData.showtime}</span>
            </div>
            <div>
                <button>Available Tickets: ${movieData.tickets_sold}</button>
            </div>
    `
    document.querySelector('#first-movie').appendChild(movieCard)
    })
}

//function that fetch all the movies from db.json
function movieMenu(){
    
    fetch(apiURL)
    .then((res) => res.json())
    .then(data => {
        
        data.forEach(movieMenu => {
            let menu = document.createElement('li');
            menu.className = 'movie-menu'
            menu.innerHTML = `
            <img src="${movieMenu.poster}" alt="poster">
            <div class = "movie-content">
                <h3>${movieMenu.title}</h3>
                <p><span>Duration: ${movieMenu.runtime} min</span>
                <p><span>Showtimes: ${movieMenu.showtime}</span>
            </div>
            <div>
                <button>Available Tickets: ${movieMenu.tickets_sold}</button>
            </div>
    `
            document.querySelector('#all-movie-list').appendChild(menu)
        })
    })
}

function initialize(){
    getFirstMovie()
    movieMenu()
}
initialize()