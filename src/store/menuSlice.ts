import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MenuState {
  dropdownMenuVisible: boolean | null;
  formMenuVisible: boolean | null;
}

const initialState: MenuState = {
  dropdownMenuVisible: null,
  formMenuVisible: null,
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
    setDropdownMenuVisibility: (state, action: PayloadAction<boolean>) => {
      state.dropdownMenuVisible = action.payload;
    },
    setFormMenuVisibility: (state, action: PayloadAction<boolean>) => {
      state.formMenuVisible = action.payload;
    },
  },
});

export const { toggleDropdownMenu, toggleFormMenu, setDropdownMenuVisibility, setFormMenuVisibility } = menuSlice.actions;

export default menuSlice.reducer;
