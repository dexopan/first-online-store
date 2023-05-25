import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'isAuth',
	initialState: {
		isAuth: false,
	},
	reducers: {
		isAuthenticated(state, action) {
			state.isAuth = action.payload;
		},


	}
});

export const { isAuthenticated } = authSlice.actions;

export default authSlice.reducer;
