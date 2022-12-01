import { configureStore } from '@reduxjs/toolkit';
import { phonebookSlice } from './phonebookSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, phonebookSlice.reducer);

export const store = configureStore({
  reducer: {
    book: persistedReducer,
  },
});

export const persistor = persistStore(store);
