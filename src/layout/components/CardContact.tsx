import { useDispatch } from 'react-redux';
import HeartIcon from '../../icons/HeartIcon';
import { Contact } from '../../interfaces';
import '../styles/cardContact.css';
import AvatarLetter from './AvatarLetter';
import { AppDispatch, RootState } from '../../store/store';
import { setContactDelete, setStatusAnimationCard, toggleLiked } from '../../store/contactSlice';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import HeartBroken from '../../icons/HeartBroken';
import DeleteIcon from '../../icons/DeleteIcon';
import { useLocation } from 'react-router-dom';
import { openModal } from '../../store/modalSlice';

interface CardContactProps {
    contact: Contact
}

const CardContact: React.FC<CardContactProps> = ({ contact }) => {

    const dispatch = useDispatch<AppDispatch>();
    const location = useLocation();
    const { statusAnimationCard } = useSelector((state: RootState) => state.contact)
    const [typeAnimation, setTypeAnimation] = useState<string | null>(null)

    const handleLikedContact = () => {

        setTypeAnimation('out')

        setTimeout(() => {
            dispatch(toggleLiked({ contact }))
        }, 500)

    }

    useEffect(() => {
        if (statusAnimationCard) {
            if (contact.id === statusAnimationCard.contactId) {
                setTypeAnimation(statusAnimationCard.status)
                dispatch(setStatusAnimationCard(null))
            }
        }
    }, []);

    const deleteContact = ()=>{
        dispatch(setContactDelete(contact));
        dispatch(openModal())
    }

    return (

        <article
            className={`card ${contact.liked ? 'card--liked' : ''} ${typeAnimation !== null ? typeAnimation === 'out' ? 'card--animation--out' : 'card--animation--in' : ''}`}
            role='article-card'
            aria-label={`Contact ${contact.first_name} ${contact.last_name}`}
        >

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

                <div className="card__footer__buttons">


                    <button
                        onClick={() => handleLikedContact()}
                        className={`card__footer__button ${contact.liked ? 'card__footer__button--liked' : ''}`}
                        aria-label={contact.liked ? 'Remove from favorites' : 'Add to favorites'}
                    >
                        {contact.liked ? (
                            <>
                                <HeartBroken aria-hidden="true" />
                                {/* <span className="sr-only">Remove</span> */}
                            </>
                        ) : (
                            <>
                                <HeartIcon aria-hidden="true" />
                            </>
                        )}
                    </button>
                    {

                        location.pathname === '/contacts'
                        &&
                        <button className='card__footer__button__delete' onClick={()=> deleteContact()} >
                            <DeleteIcon/>

                        </button>

                    }
                </div>


                    
                    
            </footer>
        </article>
    )
}

export default CardContact
