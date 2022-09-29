import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  cart: [],
  error: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signin: (state, action) => {
      
      state.token = action.payload
    },
    signout: (state, action) => {
      state.token = null
    },
    loginerror: (state, action) => {
      state.error = action.payload
    },
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload]
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(x => x.id !== action.payload.id)
    }
  }
})

// Action creators are generated for each case reducer function
export const { signin, signout, loginerror, addToCart, removeFromCart } = userSlice.actions

export default userSlice.reducer