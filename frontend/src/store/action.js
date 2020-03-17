import axiosApi from "../axiosApi";

export const POST_TRACKHIS_REQUEST = 'POST_TRACKHIS_REQUEST';
export const POST_TRACKHIS_SUCCESS = 'POST_TRACKHIS_SUCCESS';
export const POST_TRACKHIS_FAILURE = 'POST_TRACKHIS_FAILURE';

export const FETCH_TRACKS_REQUEST = 'FETCH_TRACKS_REQUEST';
export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';
export const FETCH_TRACKS_FAILURE = 'FETCH_TRACKS_FAILURE';

export const TrackHisRequest = () => ({type:POST_TRACKHIS_REQUEST});
export const TrackHisSuccess = trackhis => ({type:POST_TRACKHIS_SUCCESS, trackhis});
export const TrackHisFailure = error => ({type:POST_TRACKHIS_FAILURE,error});

export const getTracksRequest = () => ({type:FETCH_TRACKS_REQUEST});
export const getTracksSuccess = track => ({type:FETCH_TRACKS_SUCCESS,track});
export const getTracksFAILURE = error => ({type:FETCH_TRACKS_FAILURE,error});



export const getTracks = () => {
    return async (dispatch) => {
        try{
            dispatch(getTracksRequest());
            const response = await axiosApi.get('/tracks');
            dispatch(getTracksSuccess(response.data))
        }catch (error) {
            dispatch(getTracksFAILURE(error.response.data))
        }
    }
};

export const postTrackHis = tracks => {
  return async(dispatch,getState) => {
      try{
          const track = getState().users.user;
          dispatch(TrackHisRequest());
         await axiosApi.post('/track_history',tracks,{headers:{'Token':track.token}});
      }catch (e) {
          dispatch(TrackHisFailure(e.response.data))
      }
  }
};

export const getTrackHis = () => {
    return async (dispatch,getState) =>{
        try {
            const track = getState().users.user;
            dispatch(TrackHisRequest());
            const response = await axiosApi.get('/track_history',{headers:{'Token':track.token}});
            dispatch(TrackHisSuccess(response.data));

        }catch (e) {
            dispatch(TrackHisFailure(e.response.data))
        }
    }
};