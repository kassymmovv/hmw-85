import {FETCH_ALBUMS_SUCCESS, FETCH_AUTHORS_SUCCESS, FETCH_TRACKS_SUCCESS} from "./action";

const initialState = {
    authors:[],
    albums:[],
    tracks:[]

};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_AUTHORS_SUCCESS:
            return {
                ...state,
                authors: action.authors
            };
        case FETCH_ALBUMS_SUCCESS:
            return {
                ...state,
                albums: action.album
            };
        case FETCH_TRACKS_SUCCESS:
            return {
                ...state,
                tracks: action.track
            };
        default:
            return state;
    }
};

export default Reducer;