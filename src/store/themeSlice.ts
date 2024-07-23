import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface ThemeSlice{
    themePreference: 'dark' | 'light';
}

export const initialState:ThemeSlice = {
    themePreference:'light'
}

const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        setTheme:(state,action:PayloadAction<string | null>)=>{
            if(action.payload){
                state.themePreference = action.payload as 'dark' | 'light';
            }
        },
        setThemeSystem:(state)=>{
            const prefersthemePreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
            state.themePreference = prefersthemePreference ? 'dark' : 'light';
        },
        setThemeLocalStorage:(state)=>{
            localStorage.setItem('theme-preference',state.themePreference)
        }
    }

})

export const {setTheme,setThemeLocalStorage,setThemeSystem} = themeSlice.actions;
export default themeSlice.reducer;
