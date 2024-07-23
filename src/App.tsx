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
import { setDropdownMenuVisibility, setThemeMenu } from "./store/menuSlice";
import Modal from "./layout/components/Modal";
import ModalConfirmDelete from "./layout/components/ModalConfirmDelete";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { themePreference } = useSelector((state:RootState)=> state.theme);
  const { themeMenuVisible,dropdownMenuVisible } = useSelector((state:RootState)=>state.menu)
  const { isOpen } = useSelector((state:RootState)=>state.modal)
  
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

  const closeMenus = ()=>{
    if(themeMenuVisible){
      dispatch(setThemeMenu(false))
    }
    if(dropdownMenuVisible){
      dispatch(setDropdownMenuVisibility(false))
    }
  }

  return (
    <div className="app" data-theme={themePreference}>
      {isOpen && <Modal renderContent={() => <ModalConfirmDelete />} />}

      <Navbar/>
      <NewContactForm/>
      <main onClick={()=>{closeMenus()}}>
        <Outlet />
      </main>
    </div>
  )
}

export default App
