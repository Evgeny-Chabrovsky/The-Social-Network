import reportWebVitals from "./reportWebVitals";
import store from "./components/services/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

let getRerender = (state) => {
  debugger;
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} dispatch={store.dispatch.bind(store)} state={state} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
reportWebVitals();
getRerender(store.getState());
store.subscribe(() => {
  // если так ек сделать,
  let state = store.getState(); // то state в index.js
  getRerender(state); // вернет undefine
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
