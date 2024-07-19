import { useSelector } from 'react-redux';
import '../styles/newContactForm.css';
import { RootState } from '../../store/store';

const NewContactForm: React.FC = () => {

    const { formMenuVisible } = useSelector((state:RootState)=> state.menu)

    return (

        <section className="new-contact-form" aria-labelledby="form-section">

            <div className={`new-contact-form__container ${ formMenuVisible === null ? '' : formMenuVisible ? 'open' : 'closed'}`}>

                <form className="new-contact-form__container__form" aria-describedby="form-description">
                    <input
                        className="new-contact-form__container__form__input"
                        type="text"
                        name="first-name"
                        id="fist-name"
                        aria-required="true"
                        placeholder="First name"
                    />
                    <input
                        className="new-contact-form__container__form__input"
                        type="text"
                        name="last-name"
                        id="last-name"
                        aria-required="true"
                        placeholder="Last name"
                    />
                    <input
                        className="new-contact-form__container__form__input"
                        type="email"
                        name="email"
                        id="email"
                        aria-required="true"
                        placeholder="Email"
                    />
                    <div className="new-contact-form__content-favorites">
                        <p>Enable like favorite</p>
                        <input
                            className="new-contact-form__container__form__input"
                            type="checkbox"
                            name="enable_favorite"
                            id="enable_favorite"
                        />

                    </div>

                    <button className="new-contact-form__container__form__botton" type="submit">Save</button>
                </form>

            </div>


        </section>
    )
}

export default NewContactForm;
