import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Image from 'react-bootstrap/esm/Image'
import Row from 'react-bootstrap/esm/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import star from '../assets/star.png'
import { useParams } from 'react-router-dom'
import { fetchOneDevice } from '../http/deviceAPI'


const DevicePage = () => {
	const [device, setDevice] = useState({ info: [], img: '9cd1fd1c-9f88-47f9-ba26-2982752a3f9e.jpg' })
	const { id } = useParams()

	useEffect(() => {
		fetchOneDevice(id).then(data => setDevice(data))
	}, [])

	return (
		<Container className='mt-3'>
			<Row>
				<Col className='d-flex align-items-center justify-content-center' md={4}>
					<Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
				</Col>
				<Col className='d-flex align-items-center justify-content-center' md={4}>
					<Row className='d-flex flex-column align-items-center'>
						<h2 className='d-flex align-items-center justify-content-center'>{device.name}</h2>
						<div
							className='d-flex align-items-center justify-content-center'
							style={{ background: `url(${star}) no-repeat center center`, width: 250, height: 250, backgroundSize: 'cover', fontSize: 64 }}
						>
							{device.rating}
						</div>
					</Row>
				</Col>
				<Col className='d-flex align-items-center justify-content-center' md={4}>
					<Card
						className='d-flex flex-column align-items-center justify-content-around'
						style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
					>
						<h3>From: {device.price} RUB</h3>
						<Button variant={'outline-dark'}>Add to basket</Button>
					</Card>
				</Col>
			</Row>
			<Row className='d-flex flex-column m-3'>
				<h1>Specifications</h1>
				{device.info.map((info, index) =>
					<Row
						key={info.id}
						style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}
					>
						{info.title}: {info.description}
					</Row>
				)}
			</Row>
		</Container>
	)
}

export default DevicePage