import { GETTING_ACTIVITIES, LIST_ACTIVITIES } from "../actions";

const initialState = {
  activity: "Select an Activity",
  key: 0,
};

export const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_ACTIVITIES:
      return {};
    case LIST_ACTIVITIES:
      return {};
    default:
      return state;
  }
};
