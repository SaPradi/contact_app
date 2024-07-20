import { useSelector } from 'react-redux';
import '../styles/newContactForm.css';
import { AppDispatch, RootState } from '../../store/store';
import useForm from '../../hook/useForm';
import LoadingIcon from '../../icons/LoadingIcon';
import { useDispatch } from 'react-redux';
import { fetchCreateContact } from '../../store/contactSlice';
import { toggleFormMenu } from '../../store/menuSlice';


const initialForm = {
    email:'',
    first_name: '',
    last_name: '',
    liked:false
}

const NewContactForm: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();

    const { formMenuVisible } = useSelector((state:RootState)=> state.menu);
    const {  } = useSelector((state:RootState)=> state.contact);
    const {changeHandler,errors,formValid,formValues,blurHandler,isTouched,clear} = useForm({initialForm})

    const submitHandler = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(formValid){
            console.log(formValues)
            dispatch(fetchCreateContact(formValues));
            dispatch(toggleFormMenu())
            clear();
        }
    }



    return (

        <section className="new-contact-form" aria-labelledby="form-section">

            <div className={`new-contact-form__container ${ formMenuVisible === null ? '' : formMenuVisible ? 'open' : 'closed'}`}>

                

                <form noValidate onSubmit={submitHandler} className="new-contact-form__container__form" aria-describedby="form-description">
                    <div className="new-contact-form__container__form__input__error-container">
                        { isTouched.first_name && errors.first_name && <p> {errors.first_name}* </p>}
                    </div>
                    <input
                        className={`new-contact-form__container__form__input ${ isTouched.first_name && errors.first_name ? 'new-contact-form__container__form__input--error' : ''}`}
                        type="text"
                        name="first_name"
                        id="fist-name"
                        value={formValues.first_name}
                        onChange={changeHandler}
                        aria-required="true"
                        placeholder="First name"
                        onBlur={blurHandler}
                    />

                    <div className='new-contact-form__container__form__input__error-container'>
                        {  isTouched.last_name && errors.last_name && <p> {errors.last_name}* </p>}
                    </div>
                    <input
                      className={`new-contact-form__container__form__input ${ isTouched.last_name && errors.last_name ? 'new-contact-form__container__form__input--error' : ''}`}
                        type="text"
                        name="last_name"
                        id="last_name"
                        aria-required="true"
                        placeholder="Last name"
                        value={formValues.last_name}
                        onChange={changeHandler}
                        onBlur={blurHandler}
                    />
                    
                    <div className="new-contact-form__container__form__input__error-container">
                        { isTouched.email &&   errors.email && <p> {errors.email}* </p>}
                    </div>
                    <input
                        className={`new-contact-form__container__form__input ${ isTouched.email && errors.email ? 'new-contact-form__container__form__input--error' : ''}`}
                        type="email"
                        name="email"
                        id="email"
                        aria-required="true"
                        placeholder="Email"
                        value={formValues.email}
                        onChange={changeHandler}
                        onBlur={blurHandler}
                    />
                   
                    <div className="new-contact-form__content-favorites">
                        <label htmlFor="liked">Enable like favorite</label>
                        <input
                            className="new-contact-form__container__form__input"
                            type="checkbox"
                            name="liked"
                            id="liked"
                            checked={formValues.liked}
                            onChange={changeHandler}
                        />

                    </div>
                    

                    <button 
                        className="new-contact-form__container__form__botton" 
                        type="submit"
                        disabled={!formValid}
                    >
                        {
                            false
                            ?<LoadingIcon/>
                            : 'Save'
                        }

                    </button>
                </form>

            </div>


        </section>
    )
}

export default NewContactForm;
