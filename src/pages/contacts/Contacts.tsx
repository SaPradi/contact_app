import { FC, useEffect, useState } from "react"
import TitleHeader from "../../layout/components/TitleHeader"
import { RootState } from "../../store/store"
import { useSelector } from "react-redux"
import CardContact from "../../layout/components/CardContact"
import { useLocation } from "react-router-dom"
import ListSkeletonCardContact from "../../layout/components/ListSkeletonCardContact"

const Contacts: FC = () => {
    const location = useLocation();
    const { contacts, favorites, loadingContacts } = useSelector((state: RootState) => state.contact);
    const [contactWithFavorites, setContactWithFavorites] = useState<boolean>(false)

    useEffect(() => {
        if (location.pathname === '/contacts') {
            setContactWithFavorites(true)
        }
    }, [contacts, favorites])


    return (
        <section className="contact">
            <TitleHeader title="Contact List" />
            <div className="list-contact">
                {loadingContacts ? (
                    <ListSkeletonCardContact />
                ) : (
                    <>
                        {contactWithFavorites &&
                            favorites.map((contact) => (
                                <CardContact key={contact.id} contact={contact} />
                            ))}
                        {contacts.map((contact) => (
                            <CardContact key={contact.id} contact={contact} />
                        ))}
                    </>
                )}

            </div>
        </section>
    )
}

export default Contacts
