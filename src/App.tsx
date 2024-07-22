import Navbar from "./layout/components/Navbar"
import { Outlet } from 'react-router-dom';
import NewContactForm from "./layout/components/NewContactForm";
import './App.css'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./store/contactSlice";
import { AppDispatch, RootState } from "./store/store";
import { useSelector } from "react-redux";
import { setTheme, setThemeLocalStorage,setThemeSystem } from "./store/themeSlice";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { themePreference } = useSelector((state:RootState)=> state.theme);

  useEffect(()=>{
    dispatch(fetchContacts())
  },[dispatch]);

  useEffect(()=>{
    // verify if not theme exists in localstorage
    if(!localStorage.getItem('theme-preference')){
      // set theme
      dispatch(setThemeSystem())
      // set in localstorage
      dispatch(setThemeLocalStorage());
    }
    //  if already exists
    else{

      const theme: "dark" | "light" | null = localStorage.getItem('theme-preference') as "dark" | "light" | null;
      if(theme){
        dispatch(setTheme(theme));
      }
    }
  

  },[])

  return (
    <div className="app" data-theme={themePreference}>
      <Navbar/>
      <NewContactForm/>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
