import React, { useState } from 'react'
import { Modal, Button, Form, Dropdown } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'

const CreateDevice = ({ show, onHide }) => {
	const brands = useSelector(state => state.device.brands)
	const types = useSelector(state => state.device.types)

	const [info, setInfo] = useState([])

	const addInfo = () => {
		setInfo([...info, { title: '', description: '', number: Date.now() }])
	}

	const removeInfo = (number) => {
		setInfo(info.filter(i => i.number !== number))
	}



	return (
		<Modal
			show={show}
			onHide={onHide}

			size="lg"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Add new device
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Dropdown className='mt-2 mb-2'>
						<Dropdown.Toggle>Choose type</Dropdown.Toggle>
						<Dropdown.Menu >
							{types.map(type =>
								<Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown className='mt-2 mb-2'>
						<Dropdown.Toggle>Choose brand</Dropdown.Toggle>
						<Dropdown.Menu>
							{brands.map(brand =>
								<Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>
					<Form.Control
						className='mt-3'
						placeholder='Enter device name'
					/>
					<Form.Control
						className='mt-3'
						placeholder='Enter device price'
						type='number'
					/>
					<Form.Control
						className='mt-3'
						type='file'
					/>
					<hr />
					<Button variant='outline-dark' onClick={addInfo}>
						Add new property
					</Button>
					{info.map(i =>
						<Row className='mt-4' key={i.number}>
							<Col md={4}>
								<Form.Control placeholder='Enter property name' />
							</Col>
							<Col md={4}>
								<Form.Control placeholder='Enter property description' />
							</Col>
							<Col md={4}>
								<Button onClick={() => removeInfo(i.number)} variant='outline-danger'>
									Delete
								</Button>
							</Col>
						</Row>
					)}
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='outline-danger' onClick={onHide}>Close</Button>
				<Button variant='outline-success' onClick={onHide}>Add</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default CreateDevice