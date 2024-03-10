
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Courses from './components/Courses'


function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Courses/>
      <Footer />
    </>
  )
}

export default App
