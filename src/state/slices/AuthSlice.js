import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isAuthenticated: false,
	credentials: null
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, { payload }) => {
			state.isAuthenticated = true;
			state.credentials     = payload;
		},
		logout: (state) => {
			state.isAuthenticated = false;
			state.credentials     = null;
		}
	}
});

export const { login, logout } = authSlice.actions;