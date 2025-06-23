const cityInput = document.getElementById('city');
const getWeatherBtn = document.getElementById('getWeather');
const weatherDisplay = document.getElementById('weather');
const locationDisplay = document.getElementById('location');
const temperatureDisplay = document.getElementById('temperature');
const descriptionDisplay = document.getElementById('description');
const iconDisplay = document.getElementById('icon');

// Ganti API_KEY dengan Key yang ada di akun web Open
const API_KEY = "3840e1d09d57ae7f93b2617b6cc60744"; // Replace with your actual API key

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Kota tidak ditemukan!");
    }

    const data = await response.json();

    // Update UI
    locationDisplay.textContent = data.name + ", " + data.sys.country;
    temperatureDisplay.textContent = data.main.temp + "°C";
    descriptionDisplay.textContent = data.weather[0].description;
    iconDisplay.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherDisplay.classList.remove("hidden");
  } catch (error) {
    alert("Error: " + error.message);
  }
}

getWeatherBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  } else {
    alert("Harap masukkan nama kota!");
  }
});