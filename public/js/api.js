export async function weatherForecast(){
    try{
    const response = await fetch("https://geocoding-api.open-meteo.com/v1/search?name=Osasco&count=1&language=pt&format=json");
    const data = await response.json()   
    return data.results
    }
    catch(error){
        console.error(error)
    }
    
}
export async function tempAPI(lat, long) {
    const apiTemperature = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,weather_code`
    const responseTemp = await fetch(apiTemperature)
    const dataTemp = await responseTemp.json()
    return dataTemp
}