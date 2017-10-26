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
    lat + '&lon=' + lon + '&units=imperial' + '&type=accurate' + callback;
  $.getJSON(weatherAPI, function(weatherData) {
      tempC = weatherData.main.temp.toFixed(0);
      tempF = (tempC * (9 / 5)+32).toFixed(0);

      var condition = weatherData.weather[0].description,
        id = weatherData.weather[0].id,
        deg = weatherData.wind.deg,
        iconClass,
        bgIndex,
        backgroundId = [ 299, 599, 699],
        backgroundIcon = [
          'Thunderstorm',
          'Rain',
          'Snow',
          'Clouds,Mist',
        ],
        backgroundImg = [
          'https://github.com/xy7313/FrontDemo/blob/master/local-weather-app/imgs/Thunderstorm-5best.jpg?raw=true',
          'https://github.com/xy7313/FrontDemo/blob/master/local-weather-app/imgs/rain2.jpg?raw=true',
          'https://github.com/xy7313/FrontDemo/blob/master/local-weather-app/imgs/Snow.jpg?raw=true',
          'https://github.com/xy7313/FrontDemo/blob/master/local-weather-app/imgs/cloudy-field-2.jpg?raw=true'
        ];

      backgroundId.push(id);
      bgIndex = backgroundId.sort().indexOf(id);
      $('body').css('background-image', 'url(' + backgroundImg[bgIndex] + ')');
      iconClass = backgroundIcon[bgIndex];

      // for(var i = 0; i<backgroundIcon.length; i++){
      //   console.log(weatherData.weather[0].main);  
      //   if(backgroundIcon[i].indexOf(weatherData.weather[0].main)>-1){
      //     $('body').css('background-image', 'url(' + backgroundImg[i] + ')');
      //     iconClass = backgroundIcon[i];
      //   } 
      // }
      
      
      $('#temperature').text(tempF + '° F');
      $('#condition').html(
        '<i class="wi wi-' + iconClass + '"></i><br>' + condition);
    })
    .fail(function(err) {
      alert('There was an error retrieving your weather data. \n' +
        'Please try again later.');
    });
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
var callback = '&APPID=2c542b9bff6a7688e92ddecc613993c6';