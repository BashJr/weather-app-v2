const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3774cf967cd755824b1a438d9b032cae&query='+ latitude + ','+ longitude + '&units=f'
    
    request({ url, json: true}, (error, { body }) => {
        //const {describe: {body: current} = {current:weather_descriptions}} = response
        if(error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined,
                body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.' + ' Feels like: ' + body.current.feelslike
            )
        }
    })
}
module.exports = forecast