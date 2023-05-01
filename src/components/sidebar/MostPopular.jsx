import React, { useEffect, useState } from 'react'
import DataFunctions from '../../DataFunctions';

/**
 * The Element for the store that has the most popular "block" items
 * @returns 
 */
const MostPopular = () => {

  const [popular, setPopular] = useState([])

  useEffect(async() => {
    if(DataFunctions.getUser()){
      setPopular(await DataFunctions.getMostPopular())
    }
  });

  
  return (
  <div className=' h-min w-full rounded-xl bg-blockBlue flex flex-col p-5 gap-5 overflow-hidden'>

    <h1 className='self-center text-center text-xl underline'>most popular</h1>

    {/* Each of the following blocks (seperated by whitespace) is a product that is most popular */}
    <div className='flex flex-row'>
      <div className=' bg-blockSky h-10 w-10 rounded-full'>
        <p className='text-center h-min text-3xl'>1</p>
      </div>
        <h1 className=' text-xl self-center ml-5'>{DataFunctions.blockIDToName(popular.shift())}</h1>
    </div>

    <div className='flex flex-row'>
      <div className=' bg-blockSky h-10 w-10 rounded-full'>
        <p className='text-center h-min text-3xl'>2</p>
      </div>
        <h1 className=' text-xl self-center ml-5'>{DataFunctions.blockIDToName(popular.shift())}</h1>
    </div>

    <div className='flex flex-row'>
      <div className=' bg-blockSky h-10 w-10 rounded-full'>
        <p className='text-center h-min text-3xl'>3</p>
      </div>
        <h1 className=' text-xl self-center ml-5'>{DataFunctions.blockIDToName(popular.shift())}</h1>
    </div>

  </div>
  )
}

export default MostPopular