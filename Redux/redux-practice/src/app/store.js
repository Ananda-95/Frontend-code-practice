// src/app/store.js

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice"
import usersReducer from "../features/users/usersSlice"
import cartReducer from "../features/cart/cartSlice"
import productsReducer from "../features/products/productsSlice"
export const store = configureStore({
  reducer: {
    auth: authReducer,
    users:usersReducer,
    cart:cartReducer,
    products:productsReducer
  },
});