import React from 'react'
import { useSelector } from 'react-redux'
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch } from 'react-redux';
import { setSelectedType } from '../store/deviceSlice';

const TypeBar = () => {
	const device = useSelector(state => state.device)
	const dispatch = useDispatch()

	const selectType = (type) => {
		if (type.id === device.selectedType.id) {
			return dispatch(setSelectedType({}))
		}
		return dispatch(setSelectedType(type))
	}

	return (
		<ListGroup>
			{device.types.map(type =>
				<ListGroup.Item key={type.id}
					action variant="light"
					onClick={() => selectType(type)}
					active={type.id === device.selectedType.id}
				>
					{type.name}
				</ListGroup.Item>
			)}
		</ListGroup>
	)
}

export default TypeBar