import { weatherForecast, tempAPI } from "./api.js";

const idTemp = document.getElementById('temperature');
const idCityName = document.getElementById('cityName');
const idCurrentTime = document.getElementById('currentTime')
const idWeatherCode = document.getElementById('weatherCode')
const btnUpdate = document.getElementById('btnUpdate')

function caseWeather(code){
    
            let description = ""

            switch (code){
                case 0:
                    description = "Céu limpo ☀️"
                    break
                case 1:
                    description = "Parcialmente limpo 🌤️"
                    break
                case 2:
                    description = "Parcialmente nublado ⛅"
                    break
                case 3:
                    description = "Encoberto ☁️"
                    break
                case 45:
                case 48:
                    description = "Nevoeiro 🌫️"
                    break
                case 51:
                case 53:
                case 55:
                    description = "Chuvisco 🌦️"
                    break
                case 61:
                case 63:
                case 65:
                    description = "Chuva 🌧️"
                    break
                case 95:
                    description = "Tempestade ⛈️"
                    break
            }
            return description
        }

async function init(){
    try {
        idCityName.textContent = "Carregando.."
        idTemp.textContent = "Carregando.."
        idCurrentTime.textContent = "Carregando.."
        idWeatherCode.textContent = "Carregando.."

        const data = await weatherForecast()
        idCityName.textContent = data[0].admin2

        const latO = data[0].latitude
        const longO = data[0].longitude
        const forecastTemp = await tempAPI(latO, longO)

        idTemp.textContent = `${forecastTemp.current.temperature_2m} ºC`   

        const weatherCode = forecastTemp.current.weather_code
        idWeatherCode.textContent = caseWeather(weatherCode)

      }catch(error){
            console.error(error)
            idCityName.textContent = "Erro.."
            idTemp.textContent = "Erro.."
            idCurrentTime.textContent = "Erro.."
    }

idCurrentTime.textContent = new Date().toLocaleString('pt-BR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
    
}

init()

btnUpdate.addEventListener('click', init)