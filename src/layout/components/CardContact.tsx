import { useDispatch } from 'react-redux';
import CloseIcon from '../../icons/CloseIcon';
import HeartIcon from '../../icons/HeartIcon';
import { Contact } from '../../interfaces';
import '../styles/cardContact.css';
import AvatarLetter from './AvatarLetter';
import { AppDispatch, RootState } from '../../store/store';
import { setStatusAnimationCard, toggleLiked } from '../../store/contactSlice';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface CardContactProps {
    contact: Contact
}

const CardContact: React.FC<CardContactProps> = ({ contact }) => {

    const dispatch = useDispatch<AppDispatch>();
    const { statusAnimationCard } = useSelector((state:RootState)=> state.contact)
    const [typeAnimation,setTypeAnimation] = useState<string | null>(null)

    const handleLikedContact = ()=>{

        setTypeAnimation('out')
    
        setTimeout(()=>{
            dispatch(toggleLiked({contact}))
        },500)

    }

    useEffect(()=>{
        if(statusAnimationCard){
            if(contact.id === statusAnimationCard.contactId){
                setTypeAnimation(statusAnimationCard.status)
                dispatch(setStatusAnimationCard(null))
            }
        }
    },[]);


    return (

        <article 
            className={`card ${contact.liked ? 'card--liked' : ''} ${ typeAnimation  !== null ? typeAnimation === 'out' ? 'card--animation--out' : 'card--animation--in' : ''}`}>

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
                <button onClick={ ()=> handleLikedContact()} className={`card__footer__button ${contact.liked ? 'card__footer__button--liked' : ''}`}>

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
