import { configureStore } from '@reduxjs/toolkit';
import { authSlice }      from "../slices/index.js";

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer
	}
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(nameAPiService.middleware)
});