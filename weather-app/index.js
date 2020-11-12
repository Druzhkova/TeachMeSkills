const form = document.querySelector(`#form`);
const tableBody = document.querySelector(`#tbody`);
const input = document.querySelector(`#input`);
const clearButton = document.querySelector(`#clear`);

const map = new Map();

const getTemperatureFahrenheit = (temperatureCelsius) =>
  temperatureCelsius * 1.8 + 32;

function renderTableRow() {
  let tBody = ``;

  map.forEach((value) => {
    const [city, country, temperatureCelsius] = value;

    tBody += `
        <tr>
          <td>${city}</td>
          <td>${country}</td>
          <td>${temperatureCelsius}, &#8451</td>
          <td>${getTemperatureFahrenheit(temperatureCelsius)}, &#8457</td>
        <tr>
        `;
  });

  tableBody.innerHTML = tBody;
}

// weather data request
function getWeather(city) {
  return fetch(
    `http://api.weatherstack.com/current?access_key=d3c9db7d18c51251107107975b016547&query=${city}`
  ).then((res) => res.json());
}

form.addEventListener(`submit`, (evt) => {
  evt.preventDefault();
  getWeather(input.value).then((response) => {
    const {
      current: { temperature },
      location: { country, name },
    } = response;

    map.set(name, [name, country, temperature]);

    renderTableRow();
  });
});

clearButton.addEventListener(`click`, () => {
  map.clear();
  renderTableRow();
});
