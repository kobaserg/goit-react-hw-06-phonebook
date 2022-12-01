import { createSlice } from '@reduxjs/toolkit';

export const phonebookSlice = createSlice({
  name: 'book',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      const contactIs = state.contacts
        .map(cont => cont.name.includes(action.payload.name))
        .includes(true);
      !contactIs
        ? (state.contacts = [action.payload, ...state.contacts])
        : alert(`${action.payload.name} is already in contacns`);
    },
    removeContact(state, action) {
      state.contacts = state.contacts.filter(
        cont => cont.id !== action.payload
      );
    },
    isFilter(state, action) {
      state.filter = action.payload;
    },
  },
});
export const { addContact, removeContact, isFilter } = phonebookSlice.actions;
