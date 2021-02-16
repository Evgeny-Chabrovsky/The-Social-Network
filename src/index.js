import reportWebVitals from "./reportWebVitals";
import { state } from "./components/services/data";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import {
  addPost,
  updateNewPostText,
  subscribe,
} from "./components/services/data";

let getRerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        profilePage={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
getRerender(state);
subscribe(getRerender);
