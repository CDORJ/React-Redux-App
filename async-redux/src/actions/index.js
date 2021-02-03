// import axios from "axios";

export const GETTING_ACTIVITIES = "GETTING_ACTIVITIES";
export const LIST_ACTIVITIES = "LIST_ACTIVITIES";

export const getActivities = (/* params */) => (/* dispatch */) => {
  return {
    type: GETTING_ACTIVITIES,
    payload: "something",
  };
};
