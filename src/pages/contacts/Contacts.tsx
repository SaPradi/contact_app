import React from 'react';
import TitleHeader from "../../layout/components/TitleHeader";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import CardContact from "../../layout/components/CardContact";
import { useLocation } from "react-router-dom";
import ListSkeletonCardContact from "../../layout/components/ListSkeletonCardContact";
import './styles/contacts.css';
import HappyIcon from "../../icons/HappyIcon";

const Contacts: React.FC = () => {
    const location = useLocation();
    const { contacts, favorites, loadingContacts } = useSelector((state: RootState) => state.contact);

    return (
        <section className="contact">
            <TitleHeader title="Contact List" />
            {   
                loadingContacts
                ? <ListSkeletonCardContact />
                :
                //  
                location.pathname === '/'
                ? contacts.length > 0
                    ? (
                        <div className="list-contact">
                            {contacts.map((contact) => (
                                <CardContact key={contact.id} contact={contact} />
                            ))}
                        </div>
                    )
                    : (
                        <div className="contacts_empty">
                            <p className="contacts_empty__text">No contacts available</p>
                            <HappyIcon />
                        </div>
                    )
                : (
                    <div className="list-contact">
                        {favorites.map((contact) => (
                            <CardContact key={contact.id} contact={contact} />
                        ))}
                        {contacts.map((contact) => (
                            <CardContact key={contact.id} contact={contact} />
                        ))}
                    </div>
                )
            }
        </section>
    );
};

export default Contacts;