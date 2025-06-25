import React from 'react'
import "./App.css"
import Navbar from '../src/components/navbar/Navbar'
import Headr from './components/Header/Headr'
import JoinCommunity from './pages/joinCummunity/JoinCommunity'
import Footer from './components/Footer/Footer'
import AllPages from './pages/All-Pages/AllPages'

const App = () => {
  return (
    <div>
      <Navbar />
      <Headr />
      <AllPages/>
      <JoinCommunity />
      <Footer />
    </div>
  )
}

export default App