import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TypeBar from '../components/TypeBar'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'
import Pages from '../components/Pages'
import { setTypes, setBrands, setDevices, setTotalCount, setPage } from '../store/deviceSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTypes, fetchBrands, fetchDevices } from '../http/deviceAPI'


const Shop = () => {
	const dispatch = useDispatch()

	const { limit, page, selectedType, selectedBrand } = useSelector(state => state.device)

	useEffect(() => {
		fetchTypes().then(data => dispatch(setTypes(data)))
		fetchBrands().then(data => dispatch(setBrands(data)))
	}, [])

	useEffect(() => {
		fetchDevices(selectedType.id, selectedBrand.id, limit, page).then(data => {
			dispatch(setDevices(data.rows))
			dispatch(setTotalCount(data.count))
		})
	}, [selectedType, selectedBrand, limit, page])


	return (
		<Container>
			<Row className='mt-2'>
				<Col md={3}>
					<TypeBar />
				</Col>
				<Col md={9}>
					<BrandBar />
					<DeviceList />
					<Pages />
				</Col>

			</Row>

		</Container>

	)
}

export default Shop