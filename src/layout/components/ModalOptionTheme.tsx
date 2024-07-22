import { useDispatch } from 'react-redux';
import DarkThemeIcon from '../../icons/DarkThemeIcon';
import LightThemeIcon from '../../icons/LightThemeIcon';
import SystemThemeIcon from '../../icons/SystemThemeIcon';
import '../styles/modalOptionTheme.css';
import { AppDispatch } from '../../store/store';
import { setTheme, setThemeLocalStorage, setThemeSystem } from '../../store/themeSlice';
import { toggleThemeMenu } from '../../store/menuSlice';

const ModalOptionTheme: React.FC = () => {


    const dispatch = useDispatch<AppDispatch>()

    const handleTheme = (theme: string) => {
        dispatch(setTheme(theme))
        dispatch(setThemeLocalStorage())
        dispatch(toggleThemeMenu())
    }
    const handleSystemTheme = () => {
        dispatch(setThemeSystem())
        dispatch(setThemeLocalStorage())
        dispatch(toggleThemeMenu())
    }

    return (
        <ul className='modal-option-theme'>

            <li 
                onClick={() => handleSystemTheme()} 
                className='modal-option-theme__option' 
                id='systemOption' role='option_theme' 
                aria-label='system theme'
            >
                <SystemThemeIcon />
                <p>System</p>
            </li>

            <li 
                onClick={() => handleTheme('dark')} 
                className='modal-option-theme__option' 
                id='darkOption' 
                role='option_theme' 
                aria-label='dark theme'
            >
                <DarkThemeIcon />
                <p>Dark</p>
            </li>

            <li 
                onClick={() => handleTheme('light')} 
                className='modal-option-theme__option' 
                id='lightOption' 
                role='option_theme' 
                aria-label='light theme'
            >
                <LightThemeIcon />
                <p>Light</p>
            </li>

        </ul>
    )
}

export default ModalOptionTheme
