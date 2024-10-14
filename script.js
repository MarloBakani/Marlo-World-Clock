function updateTime() {
  let city1Element = document.querySelector("#city1");
  let city1DateElement = city1Element.querySelector(".date");
  let city1TimeElement = city1Element.querySelector(".time");
  let city1Time = moment().tz("America/Los_Angeles");

  city1DateElement.innerHTML = city1Time.format("MMMM do YYYY");
  city1TimeElement.innerHTML = city1Time.format("LTS");

  let city2Element = document.querySelector("#city2");
  let city2DateElement = city2Element.querySelector(".date");
  let city2TimeElement = city2Element.querySelector(".time");
  let city2Time = moment().tz("America/Chicago");

  city2DateElement.innerHTML = city2Time.format("MMMM do YYYY");
  city2TimeElement.innerHTML = city2Time.format("LTS");

  let city3Element = document.querySelector("#city3");
  let city3DateElement = city3Element.querySelector(".date");
  let city3TimeElement = city3Element.querySelector(".time");
  let city3Time = moment().tz("America/New_York");

  city3DateElement.innerHTML = city3Time.format("MMMM do YYYY");
  city3TimeElement.innerHTML = city3Time.format("LTS");
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let cityName = event.target.options[event.target.selectedIndex].text;

  let city0Element = document.querySelector("#city0");
  let city0DateElement = city0Element.querySelector(".date");
  let city0TimeElement = city0Element.querySelector(".time");
  let city0NameElement = city0Element.querySelector(".name");

  city0DateElement.innerHTML = cityTime.format("MMMM do YYYY");
  city0TimeElement.innerHTML = cityTime.format("LTS");
  city0NameElement.innerHTML = cityName;
}

let citiesSelect = document.querySelector("#pickCity");
citiesSelect.addEventListener("change", updateCity);

updateCity();
setInterval(updateCity, 1000);
