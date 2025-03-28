import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import Swal from 'sweetalert2';


const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
  isInCart:false

};



const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
     if(cartItem.amount ===1){
      state.cartItems = state.cartItems.filter((item) => item.id !== payload.id);
      return

     }
   
      cartItem.amount = cartItem.amount - 1;
     
      
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
    addToCart:(state,action)=>{

        // let index  = state.cartItems.findIndex(product => product.id === action.payload.id)
        // if(index >=0){
        //     state.isInCart = true
        //     Swal.fire(
          
        //       "Product Already in Cart",
        //     );
            
        //     return

        // } 

        
    

        // state.cartItems  = [...state.cartItems,action.payload]

        // // console.log(state.cartItems)

        const { name } = action.payload;

        // Check if item already exists in the cart
        const existingItem = state.cartItems.find((item) => item.name === name);
  
        if (existingItem) {
          // Swal.fire(
          
          //         "Product Already in Cart",
          //       );

          Swal.fire({
            title: "Already in Cart!",
            text: "You have already added this item to your cart.",
            icon: "warning",
            confirmButtonColor: "#ff8c00",
            confirmButtonText: "OK",
            background: "#fef3c7",
            color: "#8a5a44",
          });
      
        }
        else{
          state.cartItems  = [...state.cartItems,action.payload]

        }
    
    

         }

      
  },
 
});

// console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease, calculateTotals,addToCart } =
  cartSlice.actions;

export default cartSlice.reducer;