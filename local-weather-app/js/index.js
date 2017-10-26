$(document).ready(function() {
  getLocation();
});

function getLocation() {
  // Using the GEO IP API due to HTTP restrictions from OpenWeatherMap
  $.getJSON('https://freegeoip.net/json/?callback=?', function(loc) {
    $('#city').text(loc.city + ', ' + loc.region_name + ', ' + loc.country_name+ ', ' + loc.latitude+ ', ' + loc.longitude);
    getWeather(loc.latitude, loc.longitude, loc.country_code);
  }).fail(getWeather);
}

function getWeather(lat, lon, countryCode) {
  var weatherAPI = 'https://fcc-weather-api.glitch.me/api/current?lat=' +
    lat + '&lon=' + lon + '&units=imperial' + '&type=accurate' + callback;
  $.getJSON(weatherAPI, function(weatherData) {
      // Also used by convert();
      tempC = weatherData.main.temp.toFixed(0);
      tempF = (tempC * (9 / 5)+32).toFixed(0);

      var condition = weatherData.weather[0].description,
        id = weatherData.weather[0].id,
        // speed = Number((weatherData.wind.speed * 0.86897624190816).toFixed(1)),
        // deg = weatherData.wind.deg,
        // windDir = 'N',
        iconClass,
        bgIndex,
        backgroundId = [299, 499, 599, 699, 799, 800],
        backgroundIcon = [
          'thunderstorm',
          'rain',
          'snow',
          'cloudy',
        ],
        backgroundImg = [
          '',
          ''
        ];

      backgroundId.push(id);
      bgIndex = backgroundId.sort().indexOf(id);
      $('body').css('background-image', 'url(' + backgroundImg[bgIndex] + ')');
      iconClass = backgroundIcon[bgIndex];

      //Get wind compass direction. If API returns null, assume 0 degrees.
      // if (deg) {
      //   var index = Math.floor((deg / 22.5) + 0.5) % 16,
      //     compassDirections = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
      //       'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW',
      //     ],
      //     windDir = compassDirections[index];
      // }

      //determine F or C based on country and add temperature to the page.
      // var fahrenheit = ['US', 'BS', 'BZ', 'KY', 'PL'];
      // if (fahrenheit.indexOf(countryCode) > -1) {
        $('#temperature').text(tempF + '° F');
      // } else {
      //   $('#temperature').text(tempC + '° C');
      // }

      //write final weather conditions and wind information to the page
      $('#wind-speed').html(
        '<i class="wi wi-wind wi-from-' + windDir.toLowerCase() + '"></i><br>' +
        windDir + ' ' + speed + ' knots');
      $('#condition').html(
        '<i class="wi wi-' + iconClass + '"></i><br>' + condition);
    })
    .fail(function(err) {
      alert('There was an error retrieving your weather data. \n' +
        'Please try again later.');
    });
}

//toggle between celsius / fahrenheit
$('#convert-button').click(function() {
  if ($('#temperature').text().indexOf('F') > -1) {
    $('#temperature').text(tempC + '° C');
  } else {
    $('#temperature').text(tempF + '° F');
  }

  //this.blur(); // remove focus from the button
});





















































































































































































// get your own app ID at: https://home.openweathermap.org/api_keys
var callback = '&APPID=2c542b9bff6a7688e92ddecc613993c6';