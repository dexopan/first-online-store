import React from 'react'
import Col from 'react-bootstrap/Col'
import { Image } from 'react-bootstrap'
import star from '../assets/star.png'
import Card from 'react-bootstrap/Card'
import { useSelector } from 'react-redux'

const BasketDeviceItem = ({ device }) => {
	const { brands } = useSelector(state => state.device)

	return (
		<Col md={3} className='mt-3'  >
			<Card style={{ width: 150, cursor: 'pointer', border: 'light' }}>
				<Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img} />
				<div className='text-black-50 mt-1 d-flex justify-content-between align-items-center'>
					<div>{brands.find(b => b.id === device.brandId).name}</div>
					<div className='d-flex align-items-center'>
						<div>{device.rating}</div>
						<Image width={18} height={18} src={star} />
					</div>
				</div>
				<div>{device.name}</div>
			</Card>
		</Col>
	)
}

export default BasketDeviceItem