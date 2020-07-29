var request = new XMLHttpRequest();
request.open("GET", "https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=2ac5c732748d99d9ca1762dd3d6fe909f6479d9d" );

request.onreadystatechange = function () {
    if(request.readyState === 4 && request.status === 200) {
        var response = JSON.parse(request.responseText);
        response.forEach(function(element){

            L.marker([element.position.lat, element.position.lng]).addTo(mymap);

        });
     // console.log(request.responseText, response);
    }
  };

request.send();
