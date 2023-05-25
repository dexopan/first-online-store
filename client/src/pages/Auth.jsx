import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/esm/Card'
import Form from 'react-bootstrap/esm/Form'
import Button from 'react-bootstrap/esm/Button'
import { NavLink, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/const'

const Auth = () => {
	const location = useLocation()
	const isLogin = location.pathname === LOGIN_ROUTE

	return (
		<Container
			className="d-flex justify-content-center align-items-center"
			style={{ height: window.innerHeight - 54 }}
		>
			<Card style={{ width: 600 }} className='p-5'>
				<h2 className='m-auto'>{isLogin ? 'Autorisation' : 'Registration'}</h2>
				<Form className='d-flex flex-column'>
					<Form.Control
						className='mt-3'
						placeholder='Enter your email...'
					/>
					<Form.Control
						className='mt-3'
						placeholder='Enter your password...'
					/>
					<div className='d-flex justify-content-between align-items-center mt-3'>
						{isLogin ?
							<div>Not registered yet? <NavLink to={REGISTRATION_ROUTE}>Register</NavLink></div>
							:
							<div>Already registered? <NavLink to={LOGIN_ROUTE}>Sign in</NavLink></div>
						}

						<Button className='btn-success'>{isLogin ? 'Enter' : 'Register'}</Button>
					</div>
				</Form>
			</Card>
		</Container >
	)
}

export default Auth