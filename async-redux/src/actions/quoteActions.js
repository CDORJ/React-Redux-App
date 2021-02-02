import axios from 'axios';

export const IS_LOADING = 'IS_LOADING';
export const DATA_LOADED = 'DATA_LOADED';
export const DATA_ERROR = 'DATA_ERROR';

export const loadQuote = (limit) => (dispatch) => {
    dispatch({ type: IS_LOADING });
    axios.get(
      `https://quote-garden.herokuapp.com/api/v3/quotes/?limit=${limit}`
    )
        .then((res) => {
        console.log("axios get request", res)
    })
}