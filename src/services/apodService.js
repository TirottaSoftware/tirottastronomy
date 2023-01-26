import axios from "axios"

// Get the APOD for a specific date
function getImageByDate(date) {
    return new Promise((resolve, reject) => {
        //  If there's no date, set the default value to today's date
        if (!date) {
            date = new Date()
        }

        // Destructure the date 
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()

        // Update the API URL accordingly
        const apodUrl = `https://api.nasa.gov/planetary/apod?date=${year}-${month}-${day}&api_key=${process.env.REACT_APP_API_KEY}`

        // Call the APOD API
        axios.get(apodUrl)
            .then(res => {
                resolve(res.data)
            })
            .catch(_ => {
                reject("No Image found for this day. Please try another one");
            })
    })
}

export { getImageByDate }