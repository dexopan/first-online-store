import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import { useSelector } from 'react-redux'
import DeviceItem from './DeviceItem'

const DeviceList = () => {
	const device = useSelector(state => state.device)
	return (
		<Row className='d-flex'>
			{device.devices.map(device =>
				<DeviceItem key={device.id} device={device} />
			)}
		</Row>

	)
}

export default DeviceList