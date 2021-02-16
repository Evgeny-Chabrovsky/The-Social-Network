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

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-wrapper">
          <Header />
          <Navbar />
          <div className="app-wrapper-content">
            <Route path="/dialogs">
              <Dialogs
                dialogs={this.props.profilePage.dialogsData}
                messages={this.props.profilePage.messagesData}
              />
            </Route>
            <Route path="/profile">
              <Profile
                posts={this.props.profilePage.postsData}
                newPostText={this.props.profilePage.newPostText}
                addPost={this.props.addPost}
                updateNewPostText={this.props.updateNewPostText}
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
  }
}

export default App;
