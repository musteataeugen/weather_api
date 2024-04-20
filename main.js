const weather = document.getElementById('weather')

navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude
    let long = position.coords.longitude
    console.log(lat, long)

    let key = `30acbf9ee5ca45a7818153329241904`
    let url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${lat} ${long}&lang=en`



    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {            
            weather.innerHTML = `${json.location.name}:${json.current.temp_c}°C&nbsp;&nbsp;${json.current.condition.text}<img src="icons/Status-weather-clouds-icon.png"></img><br><br>`           
            console.log(json)
        })
    let key1 = `T6CVHFYGKP7B2LPVLAJBSR62C`
    let url1 = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${long}?unitGroup=uk&key=${key1}`
    fetch(url1)
        .then((response) => {
            return response.json()
        })
        .then((json) => {            
            const container = document.createElement('div')
            container.classList.add('container')
            for (let i = 0; i < 6; i++) {
                const div = document.createElement('div')                              
                div.innerHTML += `${json.days[i].datetime}<br><br>temp:&nbsp;&nbsp;${json.days[i].tempmax}°C<br>${json.days[i].conditions}<br><br>`
                container.appendChild(div)
            }          
            weather.appendChild(container)
            console.log(json)
        })

})