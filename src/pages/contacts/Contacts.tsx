import { FC, useEffect, useState } from "react"
import TitleHeader from "../../layout/components/TitleHeader"
import { RootState } from "../../store/store"
import { useSelector } from "react-redux"
import CardContact from "../../layout/components/CardContact"
import { useLocation } from "react-router-dom"
import { Contact } from "../../interfaces"

const Contacts:FC = () => {
  const location = useLocation();
  const { contacts,favorites} = useSelector((state:RootState)=> state.contact );
  const [ contactWithFavorites , setContactWithFavorites ] = useState<Contact[] | null>(null)


  useEffect(()=>{
    if(location.pathname === '/contacts'){
      setContactWithFavorites( [...contacts,...favorites])
    }
  },[contacts,favorites])

  return (
    <section className="contact">
      <TitleHeader title="Contact List"/>
      <div className="list-contact">
          
          {
            contactWithFavorites 
            ?
            contactWithFavorites.map((contact)=>(
              <CardContact key={contact.id} contact={contact}/>
            ))
            :
            contacts.map((contact)=>(
              <CardContact key={contact.id} contact={contact}/>
            ))
          }
          
        </div>
    </section>
  )
}

export default Contacts
