import { backgrounds } from "../../static";
import "../styles/navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import MenuOptions from "./MenuOptions";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { toggleDropdownMenu, toggleFormMenu } from "../../store/menuSlice";
import AddIcon from "../../icons/AddIcon";
import ButtonTheme from "./ButtonTheme";
import ModalOptionTheme from "./ModalOptionTheme";

const Navbar: React.FC = () => {
    const navigate = useNavigate()

    const { dropdownMenuVisible, themeMenuVisible} = useSelector((state: RootState) => state.menu)
    const dispatch = useDispatch<AppDispatch>();


    return (
        <header className="navbar">

            <nav>
                <button className="navbar__brand-button" onClick={ ()=> { navigate('/') } }>
                    <img className="navbar__brand-button__image" src={backgrounds.brand} alt="brand_image" />
                </button>

                <div className="nav__menu__contain">
                    <ButtonTheme />
                    {/* Menu mobile */}
                    <button className="nav__menu" aria-controls="aria-controls" id='button_menu' onClick={() => dispatch(toggleDropdownMenu())} >
                        <svg xmlns="http://www.w3.org/2000/svg" className="nav__menu-icon" viewBox="0 0 24 24">
                            <path d="M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m0 6.032a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m1 5.033a1 1 0 1 0 0 2h18a1 1 0 0 0 0-2z" />
                        </svg>
                    </button>
                
                <div className={`nav__menu__drop-down ${dropdownMenuVisible === null ? '' : dropdownMenuVisible === true && 'open'} ${dropdownMenuVisible === false ? 'closed' : ''}`}>
                    <MenuOptions />
                </div>
                <div className={` modal-option-theme-container ${themeMenuVisible === null ? '' : themeMenuVisible === true && 'open'} ${themeMenuVisible === false ? 'closed' : ''}`} >
                    <ModalOptionTheme/>
                </div>

                {/* Menu Desktop */}
                <ul className="navbar__options">
                    <li className="navbar__options__option " id="optionOne" role="option">
                        <NavLink to='/' aria-label="Overview page">Overview</NavLink>
                    </li>

                    <li className='navbar__options__option' id="optionTwo" role="option">
                        <NavLink to='/contacts' aria-label="Contacts">Contacts</NavLink>
                    </li>

                    <li className="navbar__options__option" id="optionThree" role="option">
                        <NavLink to='/favorites' aria-label="Favorites">Favorites</NavLink>
                    </li>

                    <li className="navbar__options__option" id="optionFour" role="option">

                        <button onClick={() => dispatch(toggleFormMenu())} className="option__button" id="buttonOptionNew" role="optionBottom" aria-haspopup="true"
                            aria-expanded="false" aria-controls="new-menu">
                            <AddIcon />
                            <p>New</p>
                        </button>

                    </li>
                </ul>
                </div>


            </nav>

        </header>
    )

}

export default Navbar
