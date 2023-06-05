import { createSlice } from '@reduxjs/toolkit';

const deviceSlice = createSlice({
	name: 'device',
	initialState: {
		types: [],
		brands: [],
		devices: [],
		basket: [],
		selectedType: {},
		selectedBrand: {},
		page: 1,
		totalCount: 0,
		limit: 4
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
			state.page = 1;
		},
		setSelectedBrand(state, action) {
			state.selectedBrand = action.payload;
			state.page = 1;
		},
		setPage(state, action) {
			state.page = action.payload;
		},
		setTotalCount(state, action) {
			state.totalCount = action.payload;
		},
		setLimit(state, action) {
			state.limit = action.payload;
		},
		removeDeviceFromBasket(state, action) {
			state.basket = state.basket.filter(device => device.id !== action.payload);
		},
		setBasket(state, action) {
			state.basket = action.payload;
		},

	}
})

export const {
	setTypes,
	setBrands,
	setDevices,
	setSelectedBrand,
	setSelectedType,
	setPage,
	setTotalCount,
	setLimit,
	setBasket,
	removeDeviceFromBasket,
	setDeviceToBasket
} = deviceSlice.actions;

export default deviceSlice.reducer;