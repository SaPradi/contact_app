import Navbar from "./layout/components/Navbar"
import { Outlet } from 'react-router-dom';
import NewContactForm from "./layout/components/NewContactForm";
import './App.css'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./store/contactSlice";
import { AppDispatch } from "./store/store";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(()=>{
    dispatch(fetchContacts())
  },[dispatch]);

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
