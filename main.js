const weather = document.getElementById('weather')

navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude
    let long = position.coords.longitude
    // console.log(lat, long)

    let key = `30acbf9ee5ca45a7818153329241904`
    let url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${lat} ${long}&lang=en`

    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            const header = document.createElement('div')
            header.classList.add('header')
            header.innerHTML = `${json.location.localtime.split(' ')[0]}<br><br>${json.location.name}<img src="icons/Status-weather-clouds-icon.png"></img><br>temp:&nbsp;&nbsp;${json.current.temp_c}°C<br>${json.current.condition.text}`
            weather.appendChild(header)
            // console.log(json)
        })
    let key1 = `T6CVHFYGKP7B2LPVLAJBSR62C`
    let url1 = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${long}?unitGroup=uk&key=${key1}`
    fetch(url1)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            for (let i = 1; i < 7; i++) {
                const div = document.createElement('div')
                div.innerHTML += `${json.days[i].datetime}<br><br>temp:&nbsp;&nbsp;${Math.round(json.days[i].tempmax)}°C<br>${json.days[i].conditions}<br><br>`
                weather.appendChild(div)
            }
            // console.log(json)
        })

})