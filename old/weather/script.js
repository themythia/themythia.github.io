//variables
const body = document.querySelector('body');
const dayP = document.getElementById('day');
const dateP = document.getElementById('date');
const locationP = document.querySelector('span');
const tempP = document.getElementById('temp');
const weatherP = document.getElementById('weather');
const humidityP = document.getElementById('humidity');
const windP = document.getElementById('wind');
const weatherIcon = document.getElementById('weather-icon');
const day1Icon = document.getElementById('day1-icon');
const day1Day = document.getElementById('day1-day');
const day2Day = document.getElementById('day2-day');
const day3Day = document.getElementById('day3-day');
const day4Day = document.getElementById('day4-day');
const day1Temp = document.getElementById('day1-temp');
const infoTop = document.getElementById('info-top');
const infoBottom = document.getElementById('info-bottom');
const rightDays = document.getElementById('right-days');
// console.log(infoTop.children);
//Geolocation API
//options are optional
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

const success = (pos) => {
  const coords = {
    lon: pos.coords.longitude,
    lat: pos.coords.latitude
  };
  getData(coords);
}

const error = (err) => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

//axios
const getData = async (coords) => {
  try {
    const config = {params: {lon: coords.lon, lat: coords.lat}};
    const url = 'https://weather-proxy.freecodecamp.rocks/api/current';
    const response = await axios.get(url,config);
    // console.log(response);
    apiData(response);
  }
  catch (error) {
    console.error(error);
  }
}
const date = new Date();

//info object
const apiData = (response) => {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const weekdays3 = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'October', 'Nov', 'Dec'];

  const data = {
    city: response.data.name,
    country: response.data.sys.country,
    feels: response.data.main.feels_like,
    humidity: response.data.main.humidity,
    temp: response.data.main.temp,
    wind: response.data.wind.speed,
    weather: response.data.weather[0].main,
    weekdayShort: weekdays3[date.getDay()],
    weekday: weekdays[date.getDay()],
    date: {
      year: date.getFullYear(),
      month: months[date.getMonth()],
      day: date.getDate()
    }
  }
  modifyDOM(data,weekdays3);
  // console.log(data);
}

const modifyDOM = (data,week3) => {
  dayP.innerText = data.weekday;
  dateP.innerText = `${data.date.day} ${data.date.month} ${data.date.year}`;
  locationP.innerText = `${data.city}, ${data.country}`;
  tempP.innerText = `${Math.round(data.temp)}°C`;
  switch (data.weather) {
    case 'Thunderstorm':
      weatherIcon.classList.add('bi-cloud-lightning-rain');
      day1Icon.classList.add('bi-cloud-lightning-rain');
      weatherP.innerText = data.weather;
      break;
    case 'Drizzle':
      weatherIcon.classList.add('bi-cloud-drizzle');
      day1Icon.classList.add('bi-cloud-drizzle');
      weatherP.innerText = data.weather;
      break;
    case 'Rain':
      weatherIcon.classList.add('bi-cloud-rain');
      day1Icon.classList.add('bi-cloud-rain');
      weatherP.innerText = data.weather;
      break;
    case 'Snow':
      weatherIcon.classList.add('bi-snow');
      day1Icon.classList.add('bi-snow');
      weatherP.innerText = data.weather;
      break;
    case 'Atmosphere':
      weatherIcon.classList.add('bi-cloud-fog');
      day1Icon.classList.add('bi-cloud-fog');
      weatherP.innerText = data.weather;
      break;
    case 'Clear':
      weatherIcon.classList.add('bi-sun');
      day1Icon.classList.add('bi-sun');
      weatherP.innerText = data.weather;
      break;
    case 'Clouds':
      weatherIcon.classList.add('bi-cloud');
      day1Icon.classList.add('bi-cloud');
      weatherP.innerText = data.weather;
      break;
  }
  humidityP.innerText = `${data.humidity}%`;
  windP.innerText = `${data.wind} km/h`;
  day1Day.innerText = data.weekdayShort;
  day1Temp.innerText = `${Math.round(data.temp)}°C`;
  const rightDayArr = [];
  for (let i = 0; i < 3; i++) {
    let day = date.getDay() + i + 1;
    if (day > 6) {
      day -= 7;
    }
    rightDayArr.push(day);
  }
  day2Day.innerText = week3[rightDayArr[0]];
  day3Day.innerText = week3[rightDayArr[1]];
  day4Day.innerText = week3[rightDayArr[2]];

}

