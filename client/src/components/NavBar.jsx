import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/const';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { isAuthenticated } from '../store/authSlice';
import { setUser } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';

function NavBar() {
	const isAuth = useSelector(state => state.auth.isAuth)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const logout = () => {
		dispatch(isAuthenticated(false))
		dispatch(setUser({}))
		localStorage.removeItem('token')
	}



	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<NavLink style={{ color: 'white', textDecoration: 'none' }} to={SHOP_ROUTE}>Device Point</NavLink>
				{isAuth ?
					<Nav className="ml-auto" >
						<Button onClick={() => navigate(ADMIN_ROUTE)} variant={'outline-light'}>Admin panel</Button>
						<Button onClick={() => logout()} variant={'outline-light'} style={{ marginLeft: '0.5rem' }}>Sign out</Button>
					</Nav>
					:
					<Nav className="ml-auto" >
						<Button variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)}>Authorisation</Button>
					</Nav>
				}

			</Container>
		</Navbar>
	)
}

export default NavBar
