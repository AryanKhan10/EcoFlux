import { configureStore } from '@reduxjs/toolkit'
import  CartSlice  from './slices/cartSlice'

export const store = configureStore({
  reducer: { 
    // Listing all the slices key=name of slice 
         cart: CartSlice
    },
})