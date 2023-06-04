import React from 'react'
import { useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { setSelectedBrand } from '../store/deviceSlice';
import Col from 'react-bootstrap/Col';

const BrandBar = () => {
	const device = useSelector(state => state.device)
	const dispatch = useDispatch()

	const selectBrand = (brand) => {
		if (brand.id === device.selectedBrand.id) {
			return dispatch(setSelectedBrand({}))
		}
		return dispatch(setSelectedBrand(brand))
	}


	return (

		<Col className='d-flex'>
			{device.brands.map(brand =>
				<Card
					style={{
						cursor: 'pointer', width: '7rem', textAlign: 'center'
					}}
					key={brand.id}
					className='p-3'
					onClick={() => selectBrand(brand)}
					border={brand.id === device.selectedBrand.id ? 'dark' : 'light'}
				>
					{brand.name}
				</Card>
			)
			}
		</Col >
	)
}

export default BrandBar