import CloseIcon from '../../icons/CloseIcon';
import HeartIcon from '../../icons/HeartIcon';
import { Contact } from '../../interfaces';
import '../styles/cardContact.css';
import AvatarLetter from './AvatarLetter';

interface CardContactProps {
    contact: Contact
}

const CardContact: React.FC<CardContactProps> = ({ contact }) => {
    return (

        <article className="card">

            <div className={`card__container-avatar ${contact.liked ? 'card__container-avatar--liked' : ''}`}>

                {
                    contact.avatar
                    ?
                    <img src={contact.avatar} alt={`Contact ${contact.first_name} Avatar `} />
                    :
                    <AvatarLetter first_name={contact.first_name} last_name={contact.last_name} />
                }   

            </div>

            <div className="card__content">
                <strong> {contact.first_name} {contact.last_name} </strong>
                <small> {contact.email} </small>
            </div>


            <footer className='card__footer'>
                <hr />
                <button className={`card__footer__button ${contact.liked ? 'card__footer__button--liked' : ''}`}>

                    {
                        contact.liked
                            ? (
                                <>
                                    <CloseIcon />
                                    <p>REMOVE</p>
                                </>
                            )
                            : <HeartIcon />
                    }

                </button>

            </footer>
        </article>
    )
}

export default CardContact
