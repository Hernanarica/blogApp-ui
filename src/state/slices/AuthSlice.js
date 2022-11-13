import { createSlice } from '@reduxjs/toolkit';
import { getCookie } from '../../helpers/index.js';

const initialState = {
	isAuthenticated: !!getCookie('token')
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state) => {
			state.isAuthenticated = true;
		},
		logout: (state) => {
			state.isAuthenticated = false;
		}
	}
});

export const { login, logout } = authSlice.actions;