import React from 'react'

/**
 * Points block is a reusable object that will take in the type of point and the number of points to be used in the SIDEBAR for the Profile tab
 * @returns 
 */
const PointsBlock = ({type,points}) => {
  return (
  <div className=' h-min w-full rounded-xl bg-blockBlue flex flex-col p-5 gap-5'>
    <p className='h-min p-2 rounded-md bg-blockSky text-center'>{type}</p>
    <h1 className='self-center text-blockGold text-4xl font-bold'>{points}</h1>
  </div>
  )
}

export default PointsBlock