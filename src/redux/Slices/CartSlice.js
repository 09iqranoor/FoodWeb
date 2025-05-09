import {createSlice} from  "@reduxjs/toolkit"

const CartSlice = createSlice({

name :"  cartSlice",
 initialState:{
    cart:[],

 },

 reducers: {
    addToCart: (state ,  action)=>{
      debugger
  // 1. Checking if the item already exists in the cart
const existingItem = state.cart.find((item)=> item.id === action.payload.id);

 // 2. If the item exists, update its quantity
if (existingItem) {
   state.cart = state.cart.map((item)=>
    item.id === action.payload.id ? {...item, qty: item.qty+1} : item
);
} else {
  // 3. If the item doesn't exist, add it to the cart

  state.cart.push(action.payload);
}


    },

removeFromCart : ( state, action) =>{
    state.cart = state.cart.filter((item) => item.id !== action.payload.id);

  
},


 IncrementQty : (state, action) =>{
    state.cart = state.cart.map((item)=> item.id === action.payload.id ? {...item , qty :item.qty +1}:item)

 },

 decrementQty : (state, action) => {
    state.cart = state.cart.map((item)=> item.id === action.payload.id ? {...item , qty : item.qty -1}: item )
 }

 }


})


export const {addToCart , removeFromCart, IncrementQty , decrementQty} =  CartSlice.actions;

export default CartSlice.reducer;
 
