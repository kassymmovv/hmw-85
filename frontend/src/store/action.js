import axios from 'axios'

export const FETCH_AUTHORS_SUCCESS = 'FETCH_AUTHORS_SUCCESS';
export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';

export const getAuthorsSuccess = authors => ({type:FETCH_AUTHORS_SUCCESS,authors});
export const getAlbumsSuccess = album => ({type:FETCH_ALBUMS_SUCCESS,album});
export const getTracksSuccess = track => ({type:FETCH_TRACKS_SUCCESS,track});


export const getAuthors = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:8000/authors');
        dispatch(getAuthorsSuccess(response.data))
    }
};
export const getAlbums = id => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:8000/albums?artist=${id}`);

        dispatch(getAlbumsSuccess(response.data))
    }
};
export const getTracks = id => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:8000/tracks?album=${id}`);
        dispatch(getTracksSuccess(response.data))
    }
};