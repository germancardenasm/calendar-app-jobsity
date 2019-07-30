const initialState = {
  month: new Date().getMonth(),
  remainders: [],
  currentRemainder: [],
  showModal: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_REMAINDER":
      return {
        ...state,
        showModal: true,
        currentRemainder:
          state.remainders.find(remaninder => {
            return parseInt(action.target.id) === remaninder.id;
          }) || {}
      };

    case "HIDE_MODAL":
      return { ...state, showModal: false };

    case "SAVE_REMAINDER":
      let newArray = [...state.remainders, action.remainder];
      return {
        ...state,
        showModal: false,
        remainders: newArray
      };

    case "EDIT_REMAINDER":
      const remindersEdited = state.remainders.map((item, index) => {
        if (item.id !== action.remainder.id) {
          // This isn't the item we care about - keep it as-is
          return item;
        }
        // Otherwise, this is the one we want - return an updated value
        return {
          ...item,
          ...action.remainder
        };
      });
      return {
        ...state,
        showModal: false,
        remainders: remindersEdited
      };

    case "DELETE_REMINDER":
      console.log("DELETE");
      const remindersAfterDelete = state.remainders.filter(
        (item, index) => item.id !== state.currentRemainder.id
      );

      return {
        ...state,
        showModal: false,
        remainders: remindersAfterDelete
      };

    default:
      return state;
  }
};

export default reducer;
