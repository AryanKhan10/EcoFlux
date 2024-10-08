import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name:"cart",
    initialState: [],
    reducers: {
        // reducers input mai 2 cheexen leta hai ik state or dusra action 
        addToCart:(state, action) =>{
            state.push(action.payload)
        },
        removeFromCart:(state, action) =>{
            return state.filter((item) =>item.id !== action.payload)
        }
    }
});
export const {addToCart, removeFromCart} = CartSlice.actions;
export default CartSlice.reducer;