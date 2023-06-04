import { createSlice } from '@reduxjs/toolkit';

const deviceSlice = createSlice({
	name: 'device',
	initialState: {
		types: [],
		brands: [],
		devices: [],
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
		}
	}
})

export const { setTypes, setBrands, setDevices, setSelectedBrand, setSelectedType, setPage, setTotalCount, setLimit } = deviceSlice.actions;

export default deviceSlice.reducer;