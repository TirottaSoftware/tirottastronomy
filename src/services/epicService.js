import axios from "axios";

// Set the EPIC API for available dates 
const availableDatesUrl = `https://api.nasa.gov/EPIC/api/enhanced/all?api_key=${process.env.REACT_APP_API_KEY}`

// Self-explanatory
function getAvailableDates() {
    return new Promise((resolve, reject) => {
        // Call the EPIC API
        axios.get(availableDatesUrl)
            .then(res => {
                // Return a new array of date objects
                const dates = res.data.map(date => {
                    return new Date(date.date);
                })
                resolve(dates)
            })
            .catch(err => {
                reject(err)
            })
    })
}

// Get EPIC object by date
function getEpicObject(date) {
    // Update the API URL accordingly
    const epicUrl = `https://api.nasa.gov/EPIC/api/enhanced/date/${date.toISOString().split('T')[0]}?api_key=${process.env.REACT_APP_API_KEY}`

    return new Promise((resolve, reject) => {
        // Call the EPIC API
        axios.get(epicUrl)
            .then(res => {
                // EPIC API returns an array of images for a specific date, ordered by date, so we resolve with the most recent one
                const e = res.data[res.data.length - 1]

                // Formatting the date string so it fits the URL
                const formattedDate = `${e.date.toString().slice(0, 4)}/${e.date.toString().slice(5, 7)}/${e.date.toString().slice(8, 10)}`

                resolve({
                    data: e,
                    imageUrl: `https://api.nasa.gov/EPIC/archive/enhanced/${formattedDate}/png/${e.image}.png?api_key=${process.env.REACT_APP_API_KEY}`
                })
            })
            .catch(err => {
                reject(err)
            })
    })
}

export { getEpicObject, getAvailableDates }