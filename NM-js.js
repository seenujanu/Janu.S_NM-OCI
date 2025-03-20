document.getElementById('search-btn').addEventListener('click', getWeather);

function getWeather() {
  const city = document.getElementById('city-input').value.trim().toLowerCase();

  // Hardcoded weather data for cities
  const weatherData = {
    "london": {
      temperature: 15,
      humidity: 80,
      description: "Cloudy",
      icon: "https://www.google.com/imgres?q=london%20cloudy%20weather&imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F532467067%2Fphoto%2Flondon-the-houses-of-parliament-and-the-big-ben.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3D1PcR3kmWWqww5yYa_PuQ7ZHVsbVwksZkvf2mf5zn8hw%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fcloudy-london&docid=bmhZGruzvY0wTM&tbnid=CsM7HrMh4ZViaM&vet=12ahUKEwiL5taMlJiMAxXOqFYBHe_zO_sQM3oECBYQAA..i&w=612&h=408&hcb=2&ved=2ahUKEwiL5taMlJiMAxXOqFYBHe_zO_sQM3oECBYQAA"
    },
    "paris": {
      temperature: 20,
      humidity: 70,
      description: "Sunny",
      icon: "https://www.google.com/imgres?q=paris%20sunny%20weather&imgurl=https%3A%2F%2Ffullsuitcase.com%2Fwp-content%2Fuploads%2F2022%2F10%2FTourist-guide-to-visiting-Paris-in-October.jpg&imgrefurl=https%3A%2F%2Ffullsuitcase.com%2Fparis-in-october%2F&docid=chh0ljlMBQE7wM&tbnid=7vksOH15LOCSWM&vet=12ahUKEwiMicellJiMAxWyT2cHHQYyDHEQM3oECGYQAA..i&w=1200&h=800&hcb=2&ved=2ahUKEwiMicellJiMAxWyT2cHHQYyDHEQM3oECGYQAA"
    },
    "new york": {
      temperature: 10,
      humidity: 60,
      description: "Rainy",
      icon: "https://www.google.com/imgres?q=new%20york%20rainy%20weather&imgurl=https%3A%2F%2Fmedia.timeout.com%2Fimages%2F106000005%2Fimage.jpg&imgrefurl=https%3A%2F%2Fwww.timeout.com%2Fnewyork%2Fthings-to-do%2Fbest-things-to-do-on-a-rainy-day&docid=pyl7A1ofSW3OWM&tbnid=pegfM57lKcwM8M&vet=12ahUKEwiRjKHLlJiMAxVGTmwGHeDzDgoQM3oECFQQAA..i&w=2302&h=1536&hcb=2&ved=2ahUKEwiRjKHLlJiMAxVGTmwGHeDzDgoQM3oECFQQAA"
    },
    "tokyo": {
      temperature: 18,
      humidity: 75,
      description: "Clear sky",
      icon: "https://www.google.com/imgres?q=tokyo%20clear%20sky%20weather&imgurl=https%3A%2F%2Fyouimg1.tripcdn.com%2Ftarget%2F100a0p000000g1ge2B812_C_760_506_R5.jpg%3Fproc%3Dsource%2Ftrip&imgrefurl=https%3A%2F%2Fsg.trip.com%2Fguide%2Finfo%2Fweather-in-tokyo.html&docid=GtSW5LDZ-1DGuM&tbnid=GRiboFX-3HYKMM&vet=12ahUKEwjY7LXZlJiMAxVkTGwGHctjD4MQM3oFCIEBEAA..i&w=760&h=506&hcb=2&ved=2ahUKEwjY7LXZlJiMAxVkTGwGHctjD4MQM3oFCIEBEAA"
    },
    "mumbai": {
      temperature: 30,
      humidity: 85,
      description: "Humid",
      icon: "https://www.google.com/imgres?q=mumbai%20humid%20weather&imgurl=https%3A%2F%2Fimages.indianexpress.com%2F2020%2F01%2Fweather-1200-2.jpg%3Fw%3D414&imgrefurl=https%3A%2F%2Findianexpress.com%2Farticle%2Fcities%2Fmumbai%2Fhot-humid-conditions-continue-in-mumbai-6720132%2F&docid=N5JwH8wKOvewcM&tbnid=aaHHaFWWcbSL6M&vet=12ahUKEwi-wLDrlJiMAxVeR2wGHc6PCNgQM3oECBgQAA..i&w=414&h=230&hcb=2&ved=2ahUKEwi-wLDrlJiMAxVeR2wGHc6PCNgQM3oECBgQAA"
    },
    
    "chennai":{
      temperature:27,
      humidity:84,
      description:"pleasant",
      icon:"https://www.google.com/imgres?q=chennai%20pleasant%20weather&imgurl=https%3A%2F%2Fimgeng.jagran.com%2Fimages%2F2025%2F02%2F12%2Farticle%2Fimage%2Fchennai-weather-1739339453446_v.webp&imgrefurl=https%3A%2F%2Fenglish.jagran.com%2Findia%2Fchennai-weather-city-see-pleasant-days-ahead-dry-weather-to-prevail-in-tamil-nadu-puducherry-karaikal-from-feb-1317-10218137&docid=B9a36BLf9aFWQM&tbnid=m051ZrWOgmDYxM&vet=12ahUKEwicybTJlZiMAxV7T2wGHWGRE-gQM3oECGgQAA..i&w=640&h=360&hcb=2&ved=2ahUKEwicybTJlZiMAxV7T2wGHWGRE-gQM3oECGgQAA"
    }
    
  };

  // Check if the city exists in our hardcoded data
  if (weatherData[city]) {
    displayWeather(weatherData[city], city);
  } else {
    alert("City not found in the database. Try another city.");
  }
}

function displayWeather(data, city) {
  document.getElementById('city-name').textContent = `Weather in ${city.charAt(0).toUpperCase() + city.slice(1)}`;
  document.getElementById('temperature').textContent = `Temperature: ${data.temperature}°C`;
  document.getElementById('humidity').textContent = `Humidity: ${data.humidity}%`;
  document.getElementById('description').textContent = `Conditions: ${data.description}`;

  // Update weather icon
  document.getElementById('weather-icon').src = data.icon;
}

      
