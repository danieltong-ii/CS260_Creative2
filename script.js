document.getElementById("citySubmit").addEventListener("click", function (event) {
    event.preventDefault();
    const value = document.getElementById("cityInput").value;
    if (value === "") {
        return;
    }
    console.log(value);
});

const url = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Provo&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyCOuwAU7sI04q7anmKBbGrIGSSRRKNxf9E"

fetch(url).then(function(response) {
    return response.json();
  }).then(function(json) {
    console.log(json);
});
