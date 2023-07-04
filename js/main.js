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
                <p><span>Duration:</span> ${movieData.runtime} min
                <p><span>Showtimes:</span> ${movieData.showtime}
                <p>Tickets availables: ${movieData.tickets_sold}
            </div>
    `
    document.querySelector('#first-movie').appendChild(movieCard)
    })
}

function printMovieMenu(movieMenu){

    let menu = document.createElement('li');
    menu.className = 'movie-menu'
    menu.innerHTML = `
        <img src="${movieMenu.poster}" alt="poster" class='pst'>
        <div class = "movie-content">
            <h3>${movieMenu.title}</h3>
            <p>${movieMenu.description}</p>
            <p><span>Duration:</span> ${movieMenu.runtime} min</p>
            <p><span>Showtimes:</span> ${movieMenu.showtime} </p>
        </div>
        <div class="button">
            <button id="buy-btn">Buy Ticket</button>
            <button id="delete-btn">Delete Movie</button>
        </div>
        `
        menu.querySelector('#delete-btn').addEventListener('click', () => {
        menu.remove()
        deleteMovie(movieMenu.id)
    })
    document.querySelector('#menu-list').appendChild(menu)
}

function getAllMovies(){
    fetch(apiURL)
    .then(res => res.json())
    .then(data => data.forEach(movieMenu => printMovieMenu(movieMenu)))
}
//function to delete from the db.json
function deleteMovie(id){
    console.log(id);
    fetch(`http://localhost:3000/films/${id}`,{
        method:'DELETE',
        headers: {
            'Content-Type':'application/json'
        },
    })
    .then(res => res.json())
    .then(movieMenu => console.log(movieMenu))
} 

function initialize(){
    getFirstMovie()
    getAllMovies()
}
initialize()