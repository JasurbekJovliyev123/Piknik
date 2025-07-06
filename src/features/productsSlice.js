import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  allProducts: 0,
  price: 0,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.products.forEach((item) => {
        if (item.id === action.payload) {
          item.count += 1; 
        }
      });
    },
    decrement: (state, action) => {
      const index = state.products.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        if (state.products[index].count > 1) {
          state.products[index].count -= 1; 
        } else {
          state.products.splice(index, 1);
        }
      }
    },
    addProduct: (state, action) => {
      const exist = state.products.find((item) => item.id === action.payload.id);
      if (exist) {
        exist.count += 1;
      } else {
        state.products.push({ ...action.payload, count: 1 });
      }
    },
    deleteProduct:(state,action)=>{
       state.products=state.products.filter((item)=>item.id!==action.payload)
      
    }
  },
});

export const { increment, decrement, addProduct,deleteProduct } = productSlice.actions;
export default productSlice.reducer;
