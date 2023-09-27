import React from 'react'
import Breadcrumbs from "../components/Breadcrumbs";

const MainContent = () => {
  return (
    <div className='bg-zinc-50 p-4 w-screen min-h-screen' >
        <Breadcrumbs />
       <main>MainContent</main> 
    </div>
  )
}

export default MainContent