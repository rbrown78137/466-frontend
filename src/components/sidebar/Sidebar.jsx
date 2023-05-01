import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { DataFunctions } from '../../DataFunctions'
import MostPopular from './MostPopular'
import PointsBlock from './PointsBlock'
import SideProfile from './SideProfile'


/**
 * The Right sidebar with relavent content for a user
 * @returns 
 */
const Sidebar = () => {
  
  

  /*This is the format that the HTTP response will be in, so this can simply be swapped out with a call to the backend! */
  let exampleUser = {
        "id": 0,
        "name": "",
        "password": "",
        "email": "",
        "avatarId": 0,
        "privacySetting": true,
        "spendablePoints": 0,
        "giftablePoints": 0,
        "totalPoints": 0,
        "lastLoginTime": "2022-03-02T20:57:01.805Z"
      }

  const [sideUser, setSideUser] = React.useState(exampleUser)

  useEffect(() => {
    if(DataFunctions.getUser()){
      setSideUser(DataFunctions.getUser())
      
    }
    
  });


  useEffect(async() => {
    DataFunctions.setUser(DataFunctions.user.id)
  }, [sideUser]);
    



  let location = useLocation()

  /**
   * Function to generate sidebar content pased on where the user is in the application
   * @param {*} location the current location in the URL of the application
   * @returns Array of elements to be included in the sidebar
   */
  const content = (location) => {
    let content;

    /* STORE generates a profile block and most popular, PROFILE generates blocks for how many points a user has, other tabs only generate profile block*/
    if (location.pathname === "/Store"){
      content = [<SideProfile user = {sideUser} key={10}/>, <MostPopular key={20}/>]
    } else if (location.pathname === "/Profile"){
      content = [<PointsBlock type="total points" points = {sideUser.totalPoints} key={11}/>, <PointsBlock type="spendable points" points = {sideUser.spendablePoints} key={21}/>,<PointsBlock type="giftable points" points = {sideUser.giftablePoints} key={31}/>]
    } else{
      content = [<SideProfile user = {sideUser} key={13}/>]
    }
    return content
  }

  
  /* returns the general sidebar block with a function call content() to get the array of content that will fill the sidebar*/ 
  return (
    <div className="w-2/6 h-screen bg-blockNavy md:p-10 p-3 flex flex-col absolute right-0 top-0 overflow-y-auto gap-10">
      {content(location)}
    </div>
  )
}

export default Sidebar