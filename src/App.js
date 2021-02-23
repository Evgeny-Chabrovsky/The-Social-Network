import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/DialogsPage/DialogsContainer/DialogsContainer";
import Header from "./components/Header/Header";
// import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
// import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import UsersContainer from "./components/Users/UsersContainer";
// import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs">
            <DialogsContainer store={props.store} />
          </Route>
          <Route path="/profile">
            <Profile store={props.store} />
          </Route>
          <Route path="/users">
            <UsersContainer />
          </Route>
          {/* <Route path="/news">
            <News />
          </Route>
          <Route path="/music">
            <Music />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route> */}
        </div>
      </div>
    </Router>
  );
};

export default App;
