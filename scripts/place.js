// Footer dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Static weather values
const temperature = 30; // °F
const windSpeed = 10; // mph

document.getElementById("temp").textContent = temperature;
document.getElementById("wind").textContent = windSpeed;

// Wind chill calculation
function calculateWindChill(temp, speed) {
  return (
    35.74 +
    0.6215 * temp -
    35.75 * Math.pow(speed, 0.16) +
    0.4275 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

let windChill = "N/A";

if (temperature <= 50 && windSpeed > 3) {
  windChill = `${calculateWindChill(temperature, windSpeed)} °F`;
}

document.getElementById("windchill").textContent = windChill;
