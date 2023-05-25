import { createSlice } from '@reduxjs/toolkit';

const deviceSlice = createSlice({
	name: 'device',
	initialState: {
		types: [
			{ id: 1, name: 'Холодильники' },
			{ id: 2, name: 'Смартфоны' }
		],
		brands: [
			{ id: 1, name: 'Samsung' },
			{ id: 2, name: 'Apple' },
			{ id: 3, name: 'HP' },
			{ id: 4, name: 'Lenovo' },
		],
		devices: [
			{ id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://www.ctshop.rs/img/products/2022-10-12/apple-iphone-14-pro-max-256gb-crni-mobilni-6-7-quot-hexa-core-a16-bionic-6gb-256gb-48mpx-12mpx-12mpx-dual-sim_pMaAJ_4.jpg' },
			{ id: 2, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://www.ctshop.rs/img/products/2022-10-12/apple-iphone-14-pro-max-256gb-crni-mobilni-6-7-quot-hexa-core-a16-bionic-6gb-256gb-48mpx-12mpx-12mpx-dual-sim_pMaAJ_4.jpg' },
			{ id: 3, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://www.ctshop.rs/img/products/2022-10-12/apple-iphone-14-pro-max-256gb-crni-mobilni-6-7-quot-hexa-core-a16-bionic-6gb-256gb-48mpx-12mpx-12mpx-dual-sim_pMaAJ_4.jpg' },
			{ id: 4, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://www.ctshop.rs/img/products/2022-10-12/apple-iphone-14-pro-max-256gb-crni-mobilni-6-7-quot-hexa-core-a16-bionic-6gb-256gb-48mpx-12mpx-12mpx-dual-sim_pMaAJ_4.jpg' },
			{ id: 5, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://www.ctshop.rs/img/products/2022-10-12/apple-iphone-14-pro-max-256gb-crni-mobilni-6-7-quot-hexa-core-a16-bionic-6gb-256gb-48mpx-12mpx-12mpx-dual-sim_pMaAJ_4.jpg' },
			{ id: 6, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://www.ctshop.rs/img/products/2022-10-12/apple-iphone-14-pro-max-256gb-crni-mobilni-6-7-quot-hexa-core-a16-bionic-6gb-256gb-48mpx-12mpx-12mpx-dual-sim_pMaAJ_4.jpg' },

		],
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