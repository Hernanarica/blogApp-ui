import { configureStore } from '@reduxjs/toolkit';
import { authSlice, userSlice } from "../slices";
import { postApi } from '../services/post/postApi.js';

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		user: userSlice.reducer,
		[postApi.reducerPath]: postApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware),
});