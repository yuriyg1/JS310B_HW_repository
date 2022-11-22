// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const seaWeath = document.querySelector('#weather-head');
seaWeath.innerText = 'February 10 Weather Forecast, Seattle';
// Change the styling of every element with class "sun" to set the color to "orange"
const sun = document.querySelectorAll('.sun');
sun.forEach(i => i.style.color = 'orange');
// Change the class of the second <li> from to "sun" to "cloudy"
const cloud = document.querySelector('.sun'); // will use querySelector since 2nd li is the first of class sun
cloud.classList.replace('sun', 'cloudy')
