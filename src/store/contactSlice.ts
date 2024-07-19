import { createSlice } from '@reduxjs/toolkit';
import { Contact } from '../interfaces';
import { Contacts } from '../mocks/contacts.mock';

export interface ContactState{
    contacts:Contact[] | [];
    favorites: Contact[] | [];
}

const favoritesContact:Contact[] = Contacts.filter((contact)=> contact.liked)
const contact:Contact[] = Contacts.filter((contact)=> !contact.liked)


const initialState:ContactState = {
    contacts:contact,
    favorites:favoritesContact
}

const contactSlice = createSlice({
    name:'contact',
    initialState,
    reducers:{}
    
})

export const {} = contactSlice.actions;

export default contactSlice.reducer;