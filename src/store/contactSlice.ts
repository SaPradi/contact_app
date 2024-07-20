import { AsyncThunk, createAsyncThunk, createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { Contact, ContactResponse, ContactsResponse, ContactData } from '../interfaces';
import { createConctact, getContacts } from '../services/contact.service';
import { AppDispatch, RootState } from './store';

export interface ContactsState {
    contacts: Contact[];
    favorites: Contact[];
    loadingContacts: boolean;
    loadingCreatedContact: boolean;
    error: string | null
}
type AsyncThunkConfig = {
    state: RootState;
    dispatch: AppDispatch;
    extra: unknown;
    rejectValue: SerializedError;
};

const mappingContact = (contact: Contact, index: number, totalContacts: number) => {
    // assign liked the latest 3 contacts
    const liked = index >= totalContacts - 4;
    return { ...contact, liked };
};

const initialState: ContactsState = {
    contacts: [],
    favorites: [],
    loadingContacts: false,
    loadingCreatedContact: false,
    error: null,
}


export const fetchContacts: AsyncThunk<ContactsResponse, void, AsyncThunkConfig> = createAsyncThunk<ContactsResponse, void, AsyncThunkConfig>(
    'contacts/fetchContacts',
    async () => {
        const response = await getContacts();
        return response.data;
    }
);


export const fetchCreateContact: AsyncThunk<ContactResponse, ContactData, AsyncThunkConfig> = createAsyncThunk<ContactResponse, ContactData, AsyncThunkConfig>(
    'contacts/fetchCreateContact',
    async (data: ContactData) => {
        const response = await createConctact(data);
        return response;
    }
);

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // get all contacts
            .addCase(fetchContacts.pending, (state) => {
                state.loadingContacts = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                // mapping contact and add field "liked"
                const updatedContacts = action.payload.data.map((contact, index) =>
                    mappingContact(contact, index, action.payload.data.length)
                );
                state.contacts = updatedContacts.filter(contact => !contact.liked)
                state.favorites = updatedContacts.filter(contact => contact.liked);
                state.loadingContacts = false;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.error = action.error.message || 'Failed to fetch contacts';
            })
            // Create new contact
            .addCase(fetchCreateContact.pending, (state) => {
                state.loadingCreatedContact = true;
            })
            .addCase(fetchCreateContact.fulfilled,(state,action:PayloadAction<ContactResponse>)=>{
                const newContact:Contact = action.payload.data;

                if(action.payload.data.liked){
                    state.favorites.unshift(newContact)
                }else{
                    state.contacts.unshift(newContact)
                }



                state.loadingCreatedContact = false;
            })
            .addCase(fetchCreateContact.rejected,(state,action)=>{
                state.error = action.error.message || 'Failed to create new contact';
            })

    }
})

export const { } = contactSlice.actions;

export default contactSlice.reducer;