//https://maps.googleapis.com/maps/api/geocode/json?address=37%20maywood%20street%20boston&key=AIzaSyC2V-hAiOXAhFMqIsOQEan36I2kxS3nheA
const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
})
.help()
.alias('help','h')
.argv;

geocode.geocodeAddress(argv.address,(errorMessage,results)=>{
  if (errorMessage){
    console.log(errorMessage);
  }else{
    console.log(results.address);
    weather.getWeather(results.latitude,results.longitude,(errorMessage,weatherResults)=>{
      if (errorMessage){
        console.log(errorMessage);
      }else{
        console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
      }
    });
  }
});
