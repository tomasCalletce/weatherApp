


function getWeather(location,callback){

    const fetch = require('node-fetch');
    const url = `http://api.weatherstack.com/current&?access_key=eb5ebd4a5e0d7909c74f39ebb1b2e3fd&query=${location}`

    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((info)=>{


        if (info.success === false){

            callback('Sorry this location is not supported',undefined)
            
        }else{

            let information = {

                location : location,
                temp : info.current.temperature,
                icon : info.current.weather_icons[0],
                feelsLike : info.current.feelslike,
                description : info.current.weather_descriptions[0]
            }


            callback(undefined,information)
        }


    })

}



 module.exports = {
    getweatherData : getWeather
 }


