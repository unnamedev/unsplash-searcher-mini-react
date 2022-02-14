import {createContext, useEffect, useReducer} from "react"
import {AppReducer} from "./AppReducer"
import {fetchRandomPhotos} from "../config"

// ✨ Context
export const AppContext = createContext("")

// ✨ Provider
export const AppProvider = ({children}) => {
    // ✨ Initial State
    const initialState = {
        photos: [],
        totalPhotos: 0,
        perPage: 10,
        currentPage: 1,
        totalPages: 1,
        query: null,
        type: null,
        isLoading: false
    }

    // ✨ Reducer
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // ✨ Action
    useEffect(() => {
        (async () => {
            // ✨ Fetch data
            dispatch({type: "LOADING", payload: true})
            const data = await fetchRandomPhotos()
            dispatch({type: "FETCH_RANDOM_PHOTOS", payload: {data}})
            setTimeout(() => dispatch({type: "LOADING", payload: false}), 3000)
        })()
    }, [])

    // ✨ Provider
    return <AppContext.Provider value={{
        ...state,
        dispatch
    }}>{children}</AppContext.Provider>
}