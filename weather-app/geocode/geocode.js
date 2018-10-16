//cb549dfcde8d07510240f62ffc75e494 api key for forecast.io

const request = require('request');

var geocodeAddress = (address,callback) => {
   var encodedAddress = encodeURIComponent(address);
   request({
     url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyDXfU0DPlq5ps0LDwCjfjVyprHMBcw1Nu8`,
     json: true
   },(error,response,body)=>{
     if (error){
       callback('unable to connect to google servers.');
     }else if(body.status === 'ZERO_RESULTS'){
       callback('invalid address');
     }else if (body.status === 'OK'){
       callback(undefined,{
         address: body.results[0].formatted_address,
         latitude: body.results[0].geometry.location.lat,
         longitude: body.results[0].geometry.location.lng
       });
     }else{
       console.log('something went wrong');
     }
   });
}

module.exports.geocodeAddress = geocodeAddress;
