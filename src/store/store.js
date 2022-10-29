import { configureStore } from '@reduxjs/toolkit';
import reducerData from './slice';

const messageState = JSON.parse(localStorage.getItem("messages") || "null");


export default configureStore({
    preloadedState: {
        messages: messageState === null ? [] : messageState
    },
    reducer: reducerData,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({})
})