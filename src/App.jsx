import React from 'react'
import Header from "./components/header/Header"
import AppPlayer from "./components/music/AppPlayer"
import Instrumentals from "./components/instrumentals/Instrumentals"
import Footer from "./components/footer/Footer"

const App = () => {
  return (
    <div>
      <Header />
      <div className='general_container'>
      <AppPlayer />
      <Instrumentals />
      </div>
      <Footer />
    </div>
  )
}

export default App;
