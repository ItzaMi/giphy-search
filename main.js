const initialURL = "https://api.giphy.com/v1/gifs/search?";

let apiKey = credentials.API_KEY;
let limitGifs = 40;

function getTheGif() {
  document.getElementById("searchButton").addEventListener("click", function() {
    var searchTerm = document.getElementById("searchInputBox").value;
    fetch(initialURL + "api_key=" + apiKey + "&q=" + searchTerm + "&limit=" + limitGifs)
      .then(function(resp) {
        return resp.json();
      }) // Convert data to json
      .then(function(data) {
        console.log(data);
        let i = 0;
        while (i < limitGifs) {
            var thisDiv = document.createElement("div");
            var thisGif = document.createElement("img");
            thisGif.src = data.data[i].images.downsized_large.url;
            thisDiv.class = "imageDivHere"
            thisGif.class = "imageHere";
            document.getElementById("allTheInfo").appendChild(thisDiv);
            thisDiv.appendChild(thisGif);
            i++;
        }
        console.log(data.data["0"].url);
      })
      .catch(function() {
        // catch any errors
      });
  });
}

getTheGif();
