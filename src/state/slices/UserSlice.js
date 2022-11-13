import { createSlice } from '@reduxjs/toolkit';
import { getCookie } from '../../helpers';

const initialState = {
	credentials: getCookie('credentials') ? JSON.parse(getCookie('credentials')) : null
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setCredentials: (state, { payload }) => {
			state.credentials = payload;
		},
		deleteCredentials: (state) => {
			state.credentials = null;
		}
	}
});

export const { setCredentials, deleteCredentials } = userSlice.actions;