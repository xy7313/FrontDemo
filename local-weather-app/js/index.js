$(document).ready(function() {
  getLocation();
});

function getLocation() {
  $.getJSON('https://freegeoip.net/json/?callback=?', function(loc) {
    $('#city').text(loc.city + ', ' + loc.region_name + ', ' + loc.country_name+ ', ' + loc.latitude+ ', ' + loc.longitude);
    getWeather(loc.latitude, loc.longitude, loc.country_code);
  }).fail(getWeather);
}

function getWeather(lat, lon, countryCode) {
  var weatherAPI = 'https://fcc-weather-api.glitch.me/api/current?lat=' +
    lat + '&lon=' + lon + '&units=imperial' + '&type=accurate' ;
  $.getJSON(weatherAPI, success)
    .fail(function(err) {
      alert('Error');
    });
}
var success = function(weatherData) {
  var tempC = weatherData.main.temp.toFixed(0),
      tempF = (tempC * (9 / 5)+32).toFixed(0),
      condition = weatherData.weather[0].description,
      id = weatherData.weather[0].id,
      backgroundIds = [ 299, 599, 699],
      weathers = [
        'thunderstorm',
        'rain',
        'snow',
        'cloudy',
      ],
      backgroundImg = [
        'https://github.com/xy7313/FrontDemo/blob/master/local-weather-app/imgs/Thunderstorm-5best.jpg?raw=true',
        'https://github.com/xy7313/FrontDemo/blob/master/local-weather-app/imgs/rain2.jpg?raw=true',
        'https://github.com/xy7313/FrontDemo/blob/master/local-weather-app/imgs/Snow.jpg?raw=true',
        'https://github.com/xy7313/FrontDemo/blob/master/local-weather-app/imgs/cloudy-field-2.jpg?raw=true'
      ];

  backgroundIds.push(id);
  var bgIndex = backgroundIds.sort().indexOf(id);
  var weatherIcon = weathers[bgIndex];      
  $('body').css('background-image', 'url(' + backgroundImg[bgIndex] + ')');      
  $('#temperature').text(tempF + '° F');
  $('#condition').html(
    '<i class="wi wi-' + weatherIcon + '"></i><br>' + condition);
}
//toggle between c/f
$('#convert-button').click(function() {
  if ($('#temperature').text().indexOf('F') > -1) {
    $('#temperature').text(tempC + '° C');
  } else {
    $('#temperature').text(tempF + '° F');
  }
  this.blur(); 
});





















































































































































































// get your own app ID at: https://home.openweathermap.org/api_keys
// var callback = '&APPID=2c542b9bff6a7688e92ddecc613993c6';