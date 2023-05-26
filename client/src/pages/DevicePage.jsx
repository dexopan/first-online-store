import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Image from 'react-bootstrap/esm/Image'
import Row from 'react-bootstrap/esm/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import star from '../assets/star.png'

const DevicePage = () => {
	const device = { id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://www.ctshop.rs/img/products/2022-10-12/apple-iphone-14-pro-max-256gb-crni-mobilni-6-7-quot-hexa-core-a16-bionic-6gb-256gb-48mpx-12mpx-12mpx-dual-sim_pMaAJ_4.jpg' }

	const description = [
		{ id: 1, title: 'RAM', description: '5 gb' },
		{ id: 2, title: 'Camera', description: '12 mp' },
		{ id: 3, title: 'CPU', description: 'Pentium 4' },
		{ id: 4, title: 'Number of cores', description: '2' },
		{ id: 5, title: 'Battery', description: '4000' },
	]
	return (
		<Container className='mt-3'>
			<Row>
				<Col className='d-flex align-items-center justify-content-center' md={4}>
					<Image width={300} height={300} src={device.img} />
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
				{description.map((info, index) =>
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