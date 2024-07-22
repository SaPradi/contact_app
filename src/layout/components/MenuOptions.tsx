import { NavLink } from 'react-router-dom';
import  '../styles/menuOptions.css';
import ContactIcon from '../../icons/ContactIcon';
import HomeIcon from '../../icons/HomeIcon';
import HeartIcon from '../../icons/HeartIcon';
import AddIcon from '../../icons/AddIcon';
import CloseIcon from '../../icons/CloseIcon';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { toggleDropdownMenu, toggleFormMenu } from '../../store/menuSlice';



const MenuOptions:React.FC = () => {

  const dispath = useDispatch<AppDispatch>();
  const openForm = ():void =>{
    dispath(toggleFormMenu())
    dispath(toggleDropdownMenu())
  }

  return (
    <div className='menu'>

      <div className='menu__header' >
        <button onClick={()=> dispath(toggleDropdownMenu())} aria-label="close button menu">
          <CloseIcon />
        </button>
      </div>

      <ul className='menu-options'>

        <li className='menu-options__option' id="optionOne" role="option">
          <NavLink to='/' aria-label="Overview page" onClick={()=> dispath(toggleDropdownMenu())}>
            <HomeIcon/>
            <p>Overview</p>
          </NavLink>
        </li>

        <li className="menu-options__option" id="optionTwo" role="option">
          <NavLink  to='/contacts' aria-label="Contacts" onClick={()=> dispath(toggleDropdownMenu())}>
            <ContactIcon/>
            <p>Contacts</p>
          </NavLink>
        </li>

        <li className="menu-options__option" id="optionThree" role="option">
          <NavLink to='/favorites' aria-label="Favorites" onClick={()=> dispath(toggleDropdownMenu())}>
            <HeartIcon/>
            <p>Favorites</p>
          </NavLink>
        </li>

        <li className="menu-options__option" id="optionFour" role="option">
          <button onClick={openForm} className="option__button" id="buttonOptionNew" role="optionBottom" aria-haspopup="true"
              aria-expanded="false" aria-controls="new-menu" aria-label='new contact button'>
              <AddIcon/>
              <p>New</p>
          </button>
        </li>

      </ul>

    </div>
  )
}

export default MenuOptions
