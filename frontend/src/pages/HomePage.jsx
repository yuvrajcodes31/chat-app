import React, { useContext, useState } from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSidebar from '../components/RightSidebar'
import { AuthContext } from '../../context/AuthContext'
import { ChatContext } from '../../context/ChatContext'

function HomePage() {
  
  const {selectedUser} = useContext(ChatContext)


  return (
    <>
      <div className='w-full h-screen border sm:px-[15%] sm:py-[5%] grid'>
        <div className={`backdrop-blur-xl h-full border-2 border-gray-600 rounded-2xl overflow-hidden relative grid grid-cols-1 ${selectedUser ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]' : 'md:grid-cols-2'}`}>
          <Sidebar />
          <ChatContainer />
          <RightSidebar />
        </div>
      </div>
    </>
  )
}

export default HomePage