import React from "react";
import "./App.css";
import Calendar from "./components/Calendar/Calendar";
import { createStore } from "redux";
import reducer from "./store/reducer";
import { Provider } from "react-redux";

//Store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Calendar />
      </div>
    </Provider>
  );
}

export default App;
