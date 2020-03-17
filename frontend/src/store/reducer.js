import {
    FETCH_TRACKS_FAILURE,
    FETCH_TRACKS_REQUEST,
    FETCH_TRACKS_SUCCESS,
    POST_TRACKHIS_SUCCESS,

} from "./action";


const initialState = {
    loading:false,
    error:null,
    tracks:[],
    trackHistory:[]

};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TRACKS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_TRACKS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                tracks: action.track
            };
        case FETCH_TRACKS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case POST_TRACKHIS_SUCCESS:
            return {
                ...state,
                trackHistory: action.trackhis
            };
        default:
            return state;
    }
};

export default Reducer;