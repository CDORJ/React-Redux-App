import { IS_LOADING, DATA_LOADED, DATA_ERROR } from "../actions/quoteActions";

const initialState = {
  quote: [],
  isLoading: false,
  error: false,
};

export const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case DATA_LOADED:
      return {
        ...state,
        isLoading: false,
        quote: action.payload
      }
    case DATA_ERROR: 
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state;
  }
};
