//poster, title, runtime, showtime, and available tickets

const apiURL = 'http://localhost:3000/films';

//function that fetch the first movie data from the JSON db
function getFilmsData(){
    fetch('http://localhost:3000/films/1')
    .then((response) => response.json())
    .then((movieData) => displayFirstMovie(movieData))
}
getFilmsData()

function displayFirstMovie(movieData){

    let movieCard = document.createElement('li');
    movieCard.className = 'movie-card'
    movieCard.innerHTML = `
        <img src="${movieData.poster}" alt="poster">
        <div class = "content">
            <h4>${movieData.title}</h4>
            <p><span>${movieData.runtime}</span>
            <p><span>${movieData.showtime}</span>
            <button>${movieData.tickets_sold}</button>
        </div>        
    `
    document.querySelector('#movie-list').appendChild(movieCard)
}

// function movieDetails(){
    
// }