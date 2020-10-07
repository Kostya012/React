import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import News from "./components/News/News.jsx";
import Music from "./components/Music/Music.jsx";
import Settings from "./components/Settings/Settings.jsx";
import Friends from "./components/NavBar/Friends/Friends";
import {BrowserRouter, Route} from "react-router-dom";
import Redirect from "react-router-dom/es/Redirect";
import Switch from "react-router-dom/es/Switch";
import {addPost} from "./redux/state";



const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <NavBar/>
        <div className="app-wrapper-content">
          <Switch>
            <Redirect exact from="/" to="/profile" />

            <Route path="/profile"
                   render={ () => <Profile
                     profilePage={props.state.profilePage}
                     dispatch={props.dispatch} />} />
            <Route path="/dialogs"
                   render={ () => <Dialogs
                     store={props.store}/>} />
            <Route path="/friends"
                   render={ () => <Friends
                     dialogs={props.state.dialogsPage.dialogs}
                     messages={props.state.dialogsPage.messages}/>} />
            <Route path="/news" render={ () => <News />} />
            <Route path="/music" render={ () => <Music />} />
            <Route path="/settings" render={ () => <Settings />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>

  );
};

export default App;
