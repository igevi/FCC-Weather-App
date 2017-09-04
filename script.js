$(document).ready(function(){
  
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position) {
      // get coordinates
      var lon = position.coords.longitude;
      var lat = position.coords.latitude;
      
      // define API (FCC Weather)
      var api = 'https://fcc-weather-api.glitch.me/api/current?lat='+lat+'&lon='+lon;
  
      $.getJSON(api, function(data){
        // get info from FCC Weather API
        var weatherType = data.weather[0].description;
        var celsius = data.main.temp;
        var country = data.sys.country;
        var city = data.name;
        var weatherImage = data.weather[0].icon;

        // convert to farenheit
        var fahrenheit = ((celsius * (9/5)) + 32).toFixed(1);
        celsius = celsius.toFixed(1);
        
        // Adding info with jQuery
        $("#location").html(city + ', ' + country);
        $("#weatherType").html(weatherType);
        
        // using jQuery to update the weather image
        $('#weatherImage').attr('src',weatherImage);
        $('#weatherImage').attr('alt',weatherType);
        
        // temperature toggle button
        $("#temperature").html(fahrenheit);
        $("#tempUnit").html(' &#8457;');
        var isFahrenheit = false;
        $('#tempUnit').click(function(){
          if (isFahrenheit === false){
            $('#temperature').html(celsius);
            $('#tempUnit').html(' &#8451;');
            isFahrenheit = true;
          }
          else {
            $('#temperature').html(fahrenheit);
            $('#tempUnit').html(' &#8457;');
            isFahrenheit = false;
          }
        });
        // temperature toggle button end
      
      });                                          
    });
  }
});
