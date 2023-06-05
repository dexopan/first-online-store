import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import BasketDeviceItem from '../components/BasketDeviceItem'
import { useSelector } from 'react-redux'
import { fetchBasketDevices } from '../http/basketAPI'
import { useDispatch } from 'react-redux'
import { setBasket } from '../store/deviceSlice'
import { useParams } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import { fetchBrands, fetchTypes } from '../http/deviceAPI'
import { setBrands, setTypes } from '../store/deviceSlice'




const Basket = () => {
	const basket = useSelector(state => state.device.basket)
	const { id } = useParams()
	const dispatch = useDispatch()

	useEffect(() => {
		async function fetchData() {
			const data = await fetchBasketDevices(id)
			dispatch(setBasket(data))
		}
		fetchData()
	}, [])

	useEffect(() => {
		fetchTypes().then(data => dispatch(setTypes(data)))
		fetchBrands().then(data => dispatch(setBrands(data)))
	}, [])

	const isBasketEmpty = () => {
		if (basket.length === 0) {
			return (
				<div className='d-flex justify-content-center align-items-center'>
					<h2 className='d-flex justify-content-center align-items-center'>Basket is empty</h2>
				</div>)
		} else
			return (
				<div>
					<h1 className='d-flex justify-content-center'>Basket</h1>
					<div className='d-flex'>
						{basket.map(device => <BasketDeviceItem key={device.id} device={device} />)}
					</div>
				</div>)
	}


	return (
		<Container className='mt-3'>
			<Row>
				<Col>
					{isBasketEmpty()}
				</Col>
			</Row>
		</Container>


	)
}

export default Basket