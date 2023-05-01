import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./components/home/Home"
import LeaderBoard from "./components/leaderboard/Leaderboard"
import Profile from "./components/profile/Profile"
import Store from "./components/store/Store"
import Login from "./components/login/Login"
import Conversation from './components/home/Conversation';
import Register from './components/login/Register'




//This creates the browser routes for the React outlet and is the general structure of our application.
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="Login" element={<Home />}/>
        <Route path="Register" element={<Home />}/>
        <Route path="/Messages/:ConvoId" element={<Conversation />} />
        <Route path="Leaderboard" element={<LeaderBoard />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Store" element={<Store />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

