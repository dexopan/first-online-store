import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TypeBar from '../components/TypeBar'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'
import { setTypes } from '../store/deviceSlice'
import { setBrands } from '../store/deviceSlice'
import { setDevices } from '../store/deviceSlice'
import { useDispatch } from 'react-redux'
import { fetchTypes, fetchBrands, fetchDevices } from '../http/deviceAPI'

const Shop = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		fetchTypes().then(data => dispatch(setTypes(data)))
		fetchBrands().then(data => dispatch(setBrands(data)))
		fetchDevices().then(data => dispatch(setDevices(data.rows)))

	}, [])


	return (
		<Container>
			<Row className='mt-2'>
				<Col md={3}>
					<TypeBar />
				</Col>
				<Col md={9}>
					<BrandBar />
					<DeviceList />
				</Col>

			</Row>

		</Container>

	)
}

export default Shop