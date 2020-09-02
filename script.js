"use strict"

const API= "VA54fQdIr8jFQF7ulG4JDMJOEpACIEKGf717vrRt";
let URL = "https://developer.nps.gov/api/v1/parks?stateCode=";

let searchState = "";
let maxResults = 0;
let resultsForDisplay= [];
let responseDisplay="";
let searchURL = "";

function submitRequest(searchURL) {
console.log(searchURL);
fetch(searchURL)
.then(response => response.json())
.then(responseJson => displayResults(responseJson))
.catch(error => alert (error));
}

function displayResults(responseJson){
$('.searchResults').empty();
let resultsForDisplay=[responseJson.data];
for(let i =0; i < resultsForDisplay[0].length; i++){
responseDisplay += `<div class ="panel"><h3><li>${resultsForDisplay[0][i].fullName}:</li></h3></div>
<div class = "panel"><h3><li>${resultsForDisplay[0][i].description}</li></h3></div>
<div class = "panel"><h3><li><a href=${resultsForDisplay[0][i].url}>${resultsForDisplay[0][i].url}</a>
</li>
</h3>
</div>`
}
$('.searchResults').html(responseDisplay);
$('#resultsDisplay').removeClass("hidden");
responseDisplay = "";
}

function watchForm(){
$("#js-form").submit(event => {
event.preventDefault();
searchState = $('#state-choice').val();
maxResults = $('#max-results').val();
searchURL = (URL + searchState + '&limit=' + maxResults + '&api_key=' + API);
submitRequest(searchURL);
});
}

$(watchForm)



