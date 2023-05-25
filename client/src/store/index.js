import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import userReducer from './userSlice';
import deviceReducer from './deviceSlice';

export default configureStore({
	reducer: {
		auth: authReducer,
		user: userReducer,
		device: deviceReducer,
	},
});