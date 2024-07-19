import { FC } from "react"
import TitleHeader from "../../layout/components/TitleHeader"
import CardContact from "../../layout/components/CardContact"
import { Contact } from "../../interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";



const Favorites:FC = () => {

  const {favorites} = useSelector((state:RootState)=> state.contact );

  return (
    <section className="favorites">
      <TitleHeader title="Favorites"/>

        <div className="list-contact">
          {favorites.map((contact)=>(
              <CardContact key={contact.id} contact={contact}/>
          ))}
        </div>

    </section>
  )
}

export default Favorites
