const searchButton = document.querySelector("#button-addon2");
const inputKeyword = document.querySelector(".input-keyword");
const result = document.querySelector(".result");

document.body.style.backgroundImage =
  "url(img/wil-stewart-T26KCgCPsCI-unsplash.jpg)";

searchButton.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputKeyword.value +
      "&appid=0094db69d068570fba81278d21720815&units=metric"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((response) => {
      result.innerHTML = `<h2 style="margin-bottom: 15px; color: white;">${response.name}, ${response.sys.country}</h2>
                                <h5><span class="temp">${response.main.temp}°С</span> <span class="temp">${response.weather[0].description}</span></h5>
                                <p style="margin-bottom: 17px;color: white;">Temperature from ${response.main.temp_min}°С to ${response.main.temp_max}°С</p>
                                <h5 style="color: white;">Wind Speed : ${response.wind.speed} m/s</h5>
                                <h5 style="margin-bottom: 17px; color: white;">Clouds : ${response.clouds.all}%</h5>
                                <h4 style="color: white;">Geo Coordinates : [${response.coord.lat}, ${response.coord.lon}]</h4>`;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      result.innerHTML = `<p style="color: white;">Failed to fetch weather data. Please try again later.</p>`;
    });

  inputKeyword.value = null;
});
