import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { getMessages, getDialogs, getPosts } from "./components/services/data";

import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";

class App extends Component {
  state = {
    dialogs: getDialogs(),
    messages: getMessages(),
    posts: getPosts(),
  };

  render() {
    console.log(this.state);
    return (
      <Router>
        <div className="app-wrapper">
          <Header />
          <Navbar />
          <div class="app-wrapper-content">
            <Route path="/dialogs">
              <Dialogs
                dialogs={this.state.dialogs}
                messages={this.state.messages}
              />
            </Route>
            <Route path="/profile">
              <Profile posts={this.state.posts} />
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
  }
}

export default App;
