import * as actType from "./actions";

console.log("actType", actType);

const remaindersTest = [
  [
    1562097600000,
    {
      title: "Remainder Title",
      city: "Medellin"
    }
  ],
  [
    1562097700000,
    {
      title: "2 Remainder Title",
      city: "Medellin"
    }
  ],
  [
    1563220800000,
    {
      title: "Remainder Title",
      city: "Medellin"
    }
  ],

  [
    1565449200000,
    {
      title: "Remainder Title",
      city: "Medellin"
    }
  ],

  [
    1565895600000,
    {
      title: "Remainder Title",
      city: "Medellin"
    }
  ],

  [
    1565899200000,
    {
      title: "Remainder Title",
      city: "Medellin"
    }
  ]
];

const initialState = {
  currentDay: new Date().getDate(),
  month: new Date().getMonth(),
  remainders: remaindersTest,
  showModal: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return { ...state, showModal: true };

    case "HIDE_MODAL":
      return { ...state, showModal: false };

    case "SAVE_REMAINDER":
      let newArray = state.remainders.slice();
      newArray.splice(state.remainders.length, 0, action.remainder);
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
