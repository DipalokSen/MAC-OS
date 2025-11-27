import React from 'react'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'
import Docker from '../components/Docker'

const App = () => {
  return (
     <main>
      <Navbar/>
      <Welcome/>
      <Docker/>
     </main>
  )
}

export default App
