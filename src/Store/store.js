import  { configureStore } from '@reduxjs/toolkit'
import { loadingReducer } from '../Feature/Loader/loaderSlice'
export const store = configureStore({
    reducer: {
        loader: loadingReducer
    }
})  