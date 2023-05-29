import { createSlice } from '@reduxjs/toolkit';

const deviceSlice = createSlice({
	name: 'device',
	initialState: {
		types: [],
		brands: [],
		devices: [],
		selectedType: {},
		selectedBrand: {}
	},
	reducers: {
		setTypes(state, action) {
			state.types = action.payload;
		},
		setBrands(state, action) {
			state.brands = action.payload;
		},
		setDevices(state, action) {
			state.devices = action.payload;
		},
		setSelectedType(state, action) {
			state.selectedType = action.payload;
		},
		setSelectedBrand(state, action) {
			state.selectedBrand = action.payload;
		}
	}
})

export const { setTypes, setBrands, setDevices, setSelectedBrand, setSelectedType } = deviceSlice.actions;

export default deviceSlice.reducer;