import { FC } from "react"
import TitleHeader from "../../layout/components/TitleHeader"
import CardContact from "../../layout/components/CardContact"
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ListSkeletonCardContact from "../../layout/components/ListSkeletonCardContact";

const Favorites:FC = () => {

  const {favorites,loadingContacts} = useSelector((state:RootState)=> state.contact );

  return (
    <section className="favorites">
      <TitleHeader title="Favorites"/>

        <div className="list-contact">
          {
          loadingContacts 
          ?
          <ListSkeletonCardContact/>
          :         
          favorites.map((contact)=>(
              <CardContact key={contact.id} contact={contact}/>
          ))}
        </div>

    </section>
  )
}

export default Favorites
