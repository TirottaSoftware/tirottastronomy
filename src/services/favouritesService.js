import { supabase } from "../utils/supabaseClient";

// Complete process of adding an image to a user's favourites
async function favourite(image, user) {
    // Check if the image is already in there and remove it 
    return checkExisting(image, user)
        .then(exists => {
            if (exists) {
                return removeFromFavourites(image, user)
            }
            else {
                // Alternatively, add it to his list
                return addToFavourites(image, user)
            }
        })
        .then(res => {
            return res
        })
        .catch(err => {
            console.log(err)
            return err
        })
}

// Adding an image to the user's favourites 
async function addToFavourites(image, user) {
    return new Promise(async (resolve, reject) => {
        const { data, error } = await supabase
            .from('favourites')
            .insert([
                {
                    title: image.title,
                    imageUrl: image.url,
                    userId: user.id
                },
            ])
        if (error) {
            reject(error)
        }
        resolve(data)
    })

}

// Removing and image from the user's favourites
async function removeFromFavourites(image, user) {
    return new Promise(async (resolve, reject) => {
        const { data, error } = await supabase
            .from('favourites')
            .delete()
            .eq('imageUrl', image.url)
            .eq('userId', user.id)
        if (error) {
            reject(error)
        }
        resolve(data)
    })
}

// Boolean function for checking the existence of an image in a user's favourites
async function checkExisting(image, user) {
    return new Promise(async (resolve, reject) => {
        // Select an image from the favourites table that matches the imageUrl and the user's uuid
        let { data: favourites, error } = await supabase
            .from('favourites')
            .select("*")
            .eq('imageUrl', image.url)
            .eq('userId', user.id)

        if (error) reject(error);

        // Return true if the list is not empty
        resolve(favourites.length > 0);
    })
}

// Retrieve a user's list of favourite images
async function getFavourites(user) {
    return new Promise(async (resolve, reject) => {
        // Select all images from the favourites table that match the user's uuid
        let { data, error } = await supabase
            .from('favourites')
            .select("*")
            .eq('userId', user.id)

        if (error) reject(error);
        else resolve(data)
    })
}

export { favourite, checkExisting, getFavourites, removeFromFavourites }