import React from 'react'
import Sidebar from './Component/Sidebar/Sidebar'
import Player from './Component/Player'

function App() {
  return (
    <div className='h-screen bg-black'>
      <div className='flex h-[90%]'>
         <Sidebar/>
      </div>
      <Player/>
    </div>
  )
}

export default App