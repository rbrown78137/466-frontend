import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./components/home/Home"
import HomePage from "./components/home/HomePage"
import GlobalMessageBoard from "./components/board/GlobalMessageBoard"
import Profile from "./components/profile/Profile"
import Login from "./components/login/Login"
import Conversation from './components/home/Conversation';
import Register from './components/login/Register'




//This creates the browser routes for the React outlet and is the general structure of our application.
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="Messages" element={<Home />}/>
        <Route path="Board" element={<GlobalMessageBoard />}/>
        <Route path="Login" element={<Home />}/>
        <Route path="Register" element={<Home />}/>
        <Route path="/Messages/:ConvoId/:name" element={<Conversation />} />
        <Route path="Profile" element={<Profile />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

