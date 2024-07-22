import { useDispatch } from 'react-redux';
import '../styles/buttonTheme.css';
import { AppDispatch, RootState } from '../../store/store';
import { toggleThemeMenu } from '../../store/menuSlice';
import DarkThemeIcon from '../../icons/DarkThemeIcon';
import LightThemeIcon from '../../icons/LightThemeIcon';
import { useSelector } from 'react-redux';

const ButtonTheme:React.FC = () => {

  const dispatch = useDispatch<AppDispatch>()
  
  const {  themePreference } = useSelector((state:RootState)=> state.theme)

  return (

    <button className='button_theme' onClick={()=> dispatch(toggleThemeMenu())}>
        {
          themePreference === 'dark'
          ? <DarkThemeIcon/>
          :<LightThemeIcon/>
        }
    </button>

  )
}

export default ButtonTheme
