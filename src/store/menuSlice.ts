import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MenuState {
  dropdownMenuVisible: boolean | null;
  formMenuVisible: boolean | null;
  themeMenuVisible: boolean | null;
}

const initialState: MenuState = {
  dropdownMenuVisible: null,
  formMenuVisible: null,
  themeMenuVisible:null,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleDropdownMenu: (state) => {
      if(state.dropdownMenuVisible === null){
        setDropdownMenuVisibility(true);
      }
      state.dropdownMenuVisible = !state.dropdownMenuVisible;
    },
    toggleFormMenu: (state) => {
      if(state.formMenuVisible === null){
        setFormMenuVisibility(true);
      }
      state.formMenuVisible = !state.formMenuVisible;
    },
    toggleThemeMenu: (state) => {
      if(state.themeMenuVisible === null){
        setThemeMenu(true);
      }
      state.themeMenuVisible = !state.themeMenuVisible;
    },
    setThemeMenu: (state, action: PayloadAction<boolean>) => {
      state.themeMenuVisible = action.payload;
    },
    setDropdownMenuVisibility: (state, action: PayloadAction<boolean>) => {
      state.dropdownMenuVisible = action.payload;
    },
    setFormMenuVisibility: (state, action: PayloadAction<boolean>) => {
      state.formMenuVisible = action.payload;
    },
  },
});

export const { toggleThemeMenu,toggleDropdownMenu, toggleFormMenu, setDropdownMenuVisibility, setFormMenuVisibility,setThemeMenu } = menuSlice.actions;

export default menuSlice.reducer;
