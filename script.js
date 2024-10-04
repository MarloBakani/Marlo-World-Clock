function showtime(event) {
  if (event.target.value === "Paris") {
    // Get current time in Paris timezone
    let parisTime = moment().tz("Europe/Paris");
    // Format and alert the time
    alert(`It is currently ${parisTime.format("dddd, M D, YYYY h:mm A")}`);
  } else if (event.target.value === "Tokyo") {
    let tokyoTime = moment().tz("Asia/Tokyo");
    alert(`It is currently ${tokyoTime.format("dddd, M D, YYYY h:mm A")}`);
  } else if (event.target.value === "Sydney") {
    let sydneyTime = moment().tz("Australia/Sydney");
    alert(`It is currently ${sydneyTime.format("dddd, M D, YYYY h:mm A")}`);
  }
}

let citySelect = document.querySelector("#countries");
citySelect.addEventListener("change", showtime);
