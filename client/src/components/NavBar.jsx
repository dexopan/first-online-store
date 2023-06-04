import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/const';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { isAuthenticated } from '../store/authSlice';
import { setUser } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';
import { setSelectedBrand, setSelectedType } from '../store/deviceSlice';


function NavBar() {
	const isAuth = useSelector(state => state.auth.isAuth)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const logout = () => {
		dispatch(isAuthenticated(false))
		dispatch(setUser({}))
		localStorage.removeItem('token')
	}

	const user = useSelector(state => state.user.user)

	const relocate = () => {
		navigate(SHOP_ROUTE)
		dispatch(setSelectedBrand({}))
		dispatch(setSelectedType({}))
	}

	const checkRole = (role) => {
		if (user.role === 'ADMIN') {
			return true
		}
		return false
	}

	const navBarButtons = () => {
		if (isAuth) {
			return (
				checkRole('ADMIN') ?
					<Nav className="ml-auto" >
						<Button onClick={() => navigate(ADMIN_ROUTE)} variant={'outline-light'}>Admin panel</Button>
						<Button onClick={() => logout()} variant={'outline-light'} style={{ marginLeft: '0.5rem' }}>Sign out</Button>
					</Nav>
					:
					<Nav className="ml-auto" >
						<Button onClick={() => logout()} variant={'outline-light'} style={{ marginLeft: '0.5rem' }}>Sign out</Button>
					</Nav>)
		}
		else {
			return (
				<Nav className="ml-auto" >
					<Button variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)}>Authorisation</Button>
				</Nav>)
		}
	}

	return (
		<Navbar Navbar bg="dark" variant="dark" >
			<Container>
				<div style={{ color: 'white', textDecoration: 'none', cursor: 'pointer' }} onClick={relocate}>Device Point</div>
				{navBarButtons()}
			</Container>
		</Navbar>
	)
}

export default NavBar
