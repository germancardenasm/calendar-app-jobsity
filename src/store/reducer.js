const initialState = {
  currentDay: new Date().getDate(),
  month: new Date().getMonth(),
  remainders: [],
  showModal: false
};

const reducer = (state = initialState, action) => {
  if (action === "SAVE_REMAINDER") {
    console.log("SAVE THE REMAINDER");
  }
  return state;
};

export default reducer;
