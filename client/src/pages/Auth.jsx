import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/esm/Card'
import Form from 'react-bootstrap/esm/Form'
import Button from 'react-bootstrap/esm/Button'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/const'
import { login, registration } from '../http/userAPI'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../store/userSlice'
import { isAuthenticated } from '../store/authSlice'





const Auth = () => {

	const dispatch = useDispatch()
	const location = useLocation()
	const navigate = useNavigate()
	const isLogin = location.pathname === LOGIN_ROUTE
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')


	const click = async () => {
		try {
			let data
			if (isLogin) {
				data = await login(email, password)
			} else {
				data = await registration(email, password)
			}
			dispatch(setUser(data))
			dispatch(isAuthenticated(true))
			navigate(SHOP_ROUTE)
		} catch (error) {
			alert(error.response.data.message)
		}
	}


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
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<Form.Control
						className='mt-3'
						placeholder='Enter your password...'
						value={password}
						onChange={e => setPassword(e.target.value)}
						type='password'
					/>
					<div className='d-flex justify-content-between align-items-center mt-3'>
						{isLogin ?
							<div>Not registered yet? <NavLink to={REGISTRATION_ROUTE}>Register</NavLink></div>
							:
							<div>Already registered? <NavLink to={LOGIN_ROUTE}>Sign in</NavLink></div>
						}

						<Button
							className='btn-success'
							onClick={click}>
							{isLogin ? 'Enter' : 'Register'}
						</Button>
					</div>
				</Form>
			</Card>
		</Container >
	)
}

export default Auth