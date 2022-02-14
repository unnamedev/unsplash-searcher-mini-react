import axios from "axios";

export const API = {
    baseUrl: "https://api.unsplash.com",
    searchPhotos: "search/photos",
    searchPhotosUrl: `https://api.unsplash.com/search/photos?client_id=${process.env.VITE_API_KEY}`,
    randomPhotosUrl: `https://api.unsplash.com/photos/random?client_id=${process.env.VITE_API_KEY}&count=100`
}

/**
 * Fetch Photos
 * @param term
 * @param curPage
 * @param perPage
 * @returns {Promise<*>}
 */
export const fetchPhotos = async (term = "", curPage = 0, perPage = 24) => {
    try {
        const {data} = await axios.get(`${API.searchPhotosUrl}&page=${curPage}&per_page=${perPage}&query=${term}`, {
            method: "GET",
            headers: {
                "Authorization": `Client-ID ${process.env.VITE_API_KEY}`
            }
        })
        return data
    } catch (e) {
        console.log(e.message)
    }
}

/**
 * Fetch random photo
 * @returns {Promise<any>}
 */
export const fetchRandomPhotos = async () => {
    try {
        const {data} = await axios.get(`${API.randomPhotosUrl}`, {
            method: "GET",
            headers: {
                "Authorization": `Client-ID ${process.env.VITE_API_KEY}`
            }
        })
        return data
    } catch (e) {
        console.log(e.message)
    }
}