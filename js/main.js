const apiURL = 'http://localhost:3000/films';

//function that fetch the data from the JSON db
function getFilmsData(){
    fetch(apiURL)
    .then((response) => response.json())
    .then((data) => console.log(data))
}
getFilmsData()