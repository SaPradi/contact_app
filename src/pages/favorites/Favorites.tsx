import { FC } from "react"
import TitleHeader from "../../layout/components/TitleHeader"
import CardContact from "../../layout/components/CardContact"
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ListSkeletonCardContact from "../../layout/components/ListSkeletonCardContact";

import './styles/favorites.css'
import HeartBroken from "../../icons/HeartBroken";

const Favorites: FC = () => {

    const { favorites, loadingContacts } = useSelector((state: RootState) => state.contact);

    return (
        <section className="favorites">
            <TitleHeader title="Favorites" />


            {
                loadingContacts
                    ?
                        <ListSkeletonCardContact />
                    :

                    // si no hay favoritos
                        favorites.length > 0
                        ?
                        <>
        

                            <div className="list-contact">
                                {
                                    favorites.map((contact) => (
                                        <CardContact key={contact.id} contact={contact} />
                                    ))
                                }
                            </div>
                        </>
                        :
                        <div className="favorites__empty">
                            <p className="favorites__empty__text"> You don't have a favorite contact </p>
                            <HeartBroken/>
                        </div>
            }
            


        </section>
    )
}

export default Favorites
