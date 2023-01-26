import { supabase } from "../utils/supabaseClient";

// Register a new user
async function signup(email, password) {
    return new Promise(async (resolve, reject) => {
        const { data, error } = await supabase.auth.signUp({ email, password })
        if (error) {
            reject(error)
        }
        resolve(data)
    })
}

// Sign the user in
async function login(email, password) {
    return new Promise(async (resolve, reject) => {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) {
            reject(error)
        }
        resolve(data)
    })
}

// Sign the user out
async function logout() {
    return new Promise(async (resolve, reject) => {
        const { error } = await supabase.auth.signOut()
        if (error) {
            reject(error)
        }
        resolve()
    })
}

// Request email change
async function changeEmail(user, newEmail) {
    return new Promise(async (resolve, reject) => {
        const { data, error } = await supabase.auth.updateUser({ email: newEmail })
        if (error) {
            reject(error)
        }
        resolve(data)
    })
}

export { login, logout, signup, changeEmail }