// Current Weather API Endpoint

// "http://api.weatherstack.com/current"
    // ? access_key = eb17e33984fe1a26da9b07f48293aed6
//     & query = New York

    const baseUrl= "http://api.weatherstack.com/"
    
// optional parameters: 

    // & units = m
    // & language = en
    // & callback = MY_CALLBACK

const url = "https://api.weatherstack.com/current?access_key=eb17e33984fe1a26da9b07f48293aed6&query=Brooklyn";
// const location = "New York"

const options = {
	method: 'GET'

};


async function fetchWeather() {
    try {
        const response = await fetch(url, options);
       
        const data = await response.json() // added
console.log(data) // added

    } catch (error) {
        console.error(error);
    }
}

fetchWeather();