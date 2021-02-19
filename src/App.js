import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs">
            <Dialogs
              dialogs={props.state.dialogsPage.dialogsData}
              messages={props.state.dialogsPage.messagesData}
              newMessageText={props.state.dialogsPage.newMessageText}
              dispatch={props.dispatch}
            />
          </Route>
          <Route path="/profile">
            <Profile
              posts={props.state.profilePage.postsData}
              newPostText={props.state.profilePage.newPostText}
              dispatch={props.dispatch}
            />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/music">
            <Music />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </div>
      </div>
    </Router>
  );
};

export default App;
