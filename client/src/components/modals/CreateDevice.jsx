import React, { useState, useEffect } from 'react'
import { Modal, Button, Form, Dropdown } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import { setSelectedBrand, setSelectedType } from '../../store/deviceSlice'
import { setTypes, setBrands, setDevices } from '../../store/deviceSlice'
import { fetchTypes, fetchBrands, fetchDevices } from '../../http/deviceAPI'
import { createDevice } from '../../http/deviceAPI'


const CreateDevice = ({ show, onHide }) => {
	const brands = useSelector(state => state.device.brands)
	const types = useSelector(state => state.device.types)
	const selectedBrand = useSelector(state => state.device.selectedBrand)
	const selectedType = useSelector(state => state.device.selectedType)
	const dispatch = useDispatch()

	const [name, setName] = useState('')
	const [price, setPrice] = useState(0)
	const [file, setFile] = useState(null)
	const [info, setInfo] = useState([])

	useEffect(() => {
		fetchTypes().then(data => dispatch(setTypes(data)))
		fetchBrands().then(data => dispatch(setBrands(data)))

	}, [])


	const addInfo = () => {
		setInfo([...info, { title: '', description: '', number: Date.now() }])
	}

	const removeInfo = (number) => {
		setInfo(info.filter(i => i.number !== number))
	}

	const changeInfo = (key, value, number) => {
		setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))
	}

	const selectFile = e => {
		setFile(e.target.files[0])
	}

	const addDevice = () => {
		const formData = new FormData()
		formData.append('name', name)
		formData.append('price', `${price}`)
		formData.append('img', file)
		formData.append('brandId', selectedBrand.id)
		formData.append('typeId', selectedType.id)
		formData.append('info', JSON.stringify(info))
		createDevice(formData).then(() => onHide())
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
						<Dropdown.Toggle>{selectedType.name || 'Choose type'}</Dropdown.Toggle>
						<Dropdown.Menu >
							{types.map(type =>
								<Dropdown.Item
									onClick={() => dispatch(setSelectedType(type))}
									key={type.id}
								>
									{type.name}
								</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown className='mt-2 mb-2'>
						<Dropdown.Toggle>{selectedBrand.name || 'Choose brand'}</Dropdown.Toggle>
						<Dropdown.Menu>
							{brands.map(brand =>
								<Dropdown.Item
									onClick={() => dispatch(setSelectedBrand(brand))}
									key={brand.id}
								>
									{brand.name}
								</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>
					<Form.Control
						className='mt-3'
						placeholder='Enter device name'
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<Form.Control
						className='mt-3'
						placeholder='Enter device price'
						type='number'
						value={price}
						onChange={e => setPrice(Number(e.target.value))}
					/>
					<Form.Control
						className='mt-3'
						type='file'
						onChange={selectFile}
					/>
					<hr />
					<Button variant='outline-dark' onClick={addInfo}>
						Add new property
					</Button>
					{info.map(i =>
						<Row className='mt-4' key={i.number}>
							<Col md={4}>
								<Form.Control
									placeholder='Enter property name'
									value={i.title}
									onChange={(e) => changeInfo('title', e.target.value, i.number)}
								/>
							</Col>
							<Col md={4}>
								<Form.Control
									placeholder='Enter property description'
									value={i.description}
									onChange={(e) => changeInfo('description', e.target.value, i.number)}
								/>
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
				<Button variant='outline-success' onClick={addDevice}>Add</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default CreateDevice