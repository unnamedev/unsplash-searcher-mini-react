/**
 * App Reducer
 * @param state
 * @param action
 * @returns {*}
 * @constructor
 */
export const AppReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_PHOTOS":
            return {
                ...state,
                photos: action.payload.results,
                totalPhotos: action.payload.total,
                totalPages: action.payload.total_pages,
                query: action.payload.term,
                type: "search"
            }
        case "FETCH_MORE":
            return {
                ...state,
                photos: action.payload.results,
                totalPhotos: action.payload.total,
                totalPages: action.payload.total_pages,
                currentPage: action.payload.selected,
                query: action.payload.query,
                type: action.payload.type
            }
        case "FETCH_RANDOM_PHOTOS":
            return {
                ...state,
                photos: [...action.payload.data],
            }
        case "LOADING":
            return {
                ...state,
                isLoading: action.payload,
            }
        default:
            return {
                ...state
            }
    }
}