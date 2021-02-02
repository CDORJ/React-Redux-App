import axios from 'axios';

export const IS_LOADING = 'IS_LOADING';
export const DATA_LOADED = 'DATA_LOADED';
export const DATA_ERROR = 'DATA_ERROR';

export const loadQuote = ({limit, genre}) => (dispatch) => {
    dispatch({ type: IS_LOADING });
    axios.get(
      `https://quote-garden.herokuapp.com/api/v3/quotes/?genre=${genre}&limit=${limit}`
    )
        .then((res) => {
          console.log("axios get request", res.data.data)
          dispatch({type: DATA_LOADED, payload: res.data.data})
    })
}