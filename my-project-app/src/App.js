import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import News from "./components/News/News.jsx";
import Music from "./components/Music/Music.jsx";
import Settings from "./components/Settings/Settings.jsx";
import Friends from "./components/NavBar/Friends/Friends";
import {BrowserRouter, Route} from "react-router-dom";
import {Redirect} from "react-router-dom";
import {Switch} from "react-router-dom";

import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <NavBar/>
        <div className="app-wrapper-content">
          <Switch>
            <Redirect exact from="/" to="/profile"/>

            <Route path="/profile"
                   render={() => <Profile />}/>
            <Route path="/dialogs"
                   render={() => <DialogsContainer />}/>
            <Route path="/friends"
                   render={() => <Friends />}/>
            <Route path="/news" render={() => <News/>}/>
            <Route path="/music" render={() => <Music/>}/>
            <Route path="/settings" render={() => <Settings/>}/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
