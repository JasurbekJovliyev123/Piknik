import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  products:[],
  allProducts:0,
  price:0
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})
export const { increment, decrement} = productSlice.actions

export default productSlice.reducer