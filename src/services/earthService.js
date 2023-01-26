import axios from "axios"

// Request the client's location
function getLocation() {
    return new Promise((resolve, _) => {
        navigator.geolocation.getCurrentPosition(
            pos => {
                // Resolve the lat and lon values of the client's location
                resolve({
                    lat: pos.coords.latitude.toFixed(2),
                    lon: pos.coords.longitude.toFixed(2)
                })
            },
            err => {
                // If the client declines the location access request, set the lat and lon values to the default ones
                const defaultLat = 42.72;
                const defaultLon = 23.29;

                // Log an informative message
                console.log(`Could not access user's location. Loading image using default location (lat: ${defaultLat}, lon: ${defaultLon})`)
                console.log(`Error description: ${err.message}`)

                // Resolve with the default values
                resolve({
                    lat: defaultLat,
                    lon: defaultLon
                })
            }
        )
    })
}

// Get an EARTH image by lon & lat coordinates
function getImageByLocation(lon, lat) {
    // Update the EARTH API URL accordingly
    const url = `https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=2021-02-01&dim=0.50&api_key=${process.env.REACT_APP_API_KEY}`

    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export { getImageByLocation, getLocation }