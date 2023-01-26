import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth.slice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage
}

const reducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
    reducer,
    middleware: [thunk]
});

export const persistor = persistStore(store)