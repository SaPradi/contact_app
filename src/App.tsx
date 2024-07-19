import Navbar from "./layout/components/Navbar"
import { Outlet } from 'react-router-dom';
import NewContactForm from "./layout/components/NewContactForm";
import './App.css'

function App() {


  return (
    <>
      <Navbar/>
      <NewContactForm/>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
