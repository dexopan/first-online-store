import { createSlice } from '@reduxjs/toolkit';

const deviceSlice = createSlice({
	name: 'device',
	initialState: {
		type: [
			{ id: 1, name: 'Холодильник' },
			{ id: 2, name: 'Смартфоны' },
		],
		brand: [
			{ id: 1, name: 'Samsung' },
			{ id: 2, name: 'Apple' },
		],
		device: [
			{ id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://www.ctshop.rs/img/products/2022-10-12/apple-iphone-14-pro-max-256gb-crni-mobilni-6-7-quot-hexa-core-a16-bionic-6gb-256gb-48mpx-12mpx-12mpx-dual-sim_pMaAJ_4.jpg' },
			{ id: 2, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://www.ctshop.rs/img/products/2022-10-12/apple-iphone-14-pro-max-256gb-crni-mobilni-6-7-quot-hexa-core-a16-bionic-6gb-256gb-48mpx-12mpx-12mpx-dual-sim_pMaAJ_4.jpg' },
			{ id: 3, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://www.ctshop.rs/img/products/2022-10-12/apple-iphone-14-pro-max-256gb-crni-mobilni-6-7-quot-hexa-core-a16-bionic-6gb-256gb-48mpx-12mpx-12mpx-dual-sim_pMaAJ_4.jpg' },
			{ id: 4, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://www.ctshop.rs/img/products/2022-10-12/apple-iphone-14-pro-max-256gb-crni-mobilni-6-7-quot-hexa-core-a16-bionic-6gb-256gb-48mpx-12mpx-12mpx-dual-sim_pMaAJ_4.jpg' },
		],
	},
	reducers: {
		setTypes(state, action) {
			state.type = action.payload;
		},
		setBrands(state, action) {
			state.brand = action.payload;
		},
		setDevices(state, action) {
			state.device = action.payload;
		}
	}
});

export const { setTypes, setBrands, setDevices } = deviceSlice.actions;

export default deviceSlice.reducer;