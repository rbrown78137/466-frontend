import React, { useEffect, useReducer } from "react";
import {
  Outlet,
  Link,
  useNavigate,
  useLocation,
  Navigate
} from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar/Sidebar"
import { DataFunctions } from "./DataFunctions";

//This is the main structure and runner of our application.  All ofther components run with App as the parent
function App(props) {

    //Set needed variables
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState(false);
    const [user, setUser] = React.useState(localStorage.getItem("user"));
    const [registerView, setRegisterView] = React.useState(false)
    let navigate = useNavigate();
    let location = useLocation();
    
    //Handles registration
    const goToRegister = () => {
      setRegisterView(true)
    }

    //Handles Login
    const goToLogin = () => {
      setRegisterView(false)
    }

    //Handles Logout functionality
    const logout = () => {
      localStorage.removeItem("user")
      window.location.reload(false);
    }

    //Updates and sets the current user
    useEffect(async() => {
      if(!DataFunctions.getUser()){
        await DataFunctions.setUser(user);
      }
    },[user]);


  

  return (
    <>
  <div className = {`flex flex-row ${user ? '' : 'hidden'}`}>
    {/*((location.pathname === "/Register" ) ? <Navigate to="/" state={{ from: location }} replace />: <></>)*/}
    <Navbar logout={logout}/>
    <div className="container">
      <Outlet />
    </div>
    {/* <Sidebar /> */}
  </div>
  {!user && <div>
    {registerView ? (<><Register handleHaveAccount={goToLogin}/></>) : (<><Login handleNeedAccount={goToRegister} errorMessage={errorMessage} setUser={setUser}/></>) }
  </div>}
  </>
  );
}

export default App;
