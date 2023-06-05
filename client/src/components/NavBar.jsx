import React from 'react'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import basket from '../assets/basket.png'
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/const';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { isAuthenticated } from '../store/authSlice';
import { setUser } from '../store/userSlice';
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
		if (user.role === role) {
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
						<Image
							style={{ marginLeft: '1.5rem', marginTop: '0.25rem', cursor: 'pointer' }}
							width={40} height={40} src={basket}
							onClick={() => navigate(BASKET_ROUTE + '/' + user.id)} />
						<Button onClick={() => logout()} variant={'outline-light'} style={{ marginLeft: '1.5rem' }}>Sign out</Button>
					</Nav>
					:
					<Nav className="ml-auto" >
						<Image
							style={{ marginLeft: '0.5rem', marginTop: '0.25rem', cursor: 'pointer' }}
							width={40} height={40} src={basket}
							onClick={() => navigate(BASKET_ROUTE + '/' + user.id)}
						/>
						<Button onClick={() => logout()} variant={'outline-light'} style={{ marginLeft: '1.5rem' }}>Sign out</Button>
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
		<Navbar bg="dark" variant="dark" >
			<Container>
				<div style={{ color: 'white', textDecoration: 'none', cursor: 'pointer' }} onClick={relocate}>Device Point</div>
				{navBarButtons()}
			</Container>
		</Navbar>
	)
}

export default NavBar
