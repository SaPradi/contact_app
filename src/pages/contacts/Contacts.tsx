import { FC } from "react"
import TitleHeader from "../../layout/components/TitleHeader"
import { RootState } from "../../store/store"
import { useSelector } from "react-redux"
import CardContact from "../../layout/components/CardContact"

const Contacts:FC = () => {
  
  const {contacts} = useSelector((state:RootState)=> state.contact );

  return (
    <section className="contact">
      <TitleHeader title="Contact List"/>
      <div className="list-contact">
        
          {contacts.map((contact)=>(
              <CardContact key={contact.id} contact={contact}/>
          ))}
          
        </div>
    </section>
  )
}

export default Contacts
