import * as actType from "./actions";

const initialState = {
  currentDay: new Date().getDate(),
  month: new Date().getMonth(),
  remainders: [],
  currentRemainder: [],
  showModal: false
};

//Function used to organize reminders chronologically in the sort() method
const comparator = (a, b) => {
  if (a[0] < b[0]) return -1;
  if (a[0] > b[0]) return 1;
  return 0;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_REMAINDER":
      return {
        ...state,
        showModal: true,
        currentRemainder:
          state.remainders.find(remaninder => {
            return parseInt(action.target.id) === remaninder[0];
          }) || []
      };

    case "HIDE_MODAL":
      return { ...state, showModal: false };

    case "SAVE_REMAINDER":
      let newArray = state.remainders.slice();
      newArray.splice(state.remainders.length, 0, action.remainder);
      newArray = newArray.sort(comparator);
      return {
        ...state,
        showModal: false,
        remainders: newArray
      };

    case "DELETE_REMAINDER":
      const TIME_STAMP = 0;
      const newRemainderArray = state.remainder.filter(
        (remainder, index) =>
          remainder[TIME_STAMP] !== action.remainder[TIME_STAMP]
      );
      return { ...state, remainders: newRemainderArray };
    default:
      return state;
  }
};

export default reducer;
