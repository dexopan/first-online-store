import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { SHOP_ROUTE } from '../utils/const';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { isAuthenticated } from '../store/authSlice';

function NavBar() {
	const isAuth = useSelector(state => state.auth.isAuth)
	const dispatch = useDispatch()



	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<NavLink style={{ color: 'white', textDecoration: 'none' }} to={SHOP_ROUTE}>Device Point</NavLink>
				{isAuth ?
					<Nav className="ml-auto" >
						<Button variant={'outline-light'}>Admin panel</Button>
						<Button variant={'outline-light'} style={{ marginLeft: '0.5rem' }}>Sign in</Button>
					</Nav>
					:
					<Nav className="ml-auto" >
						<Button variant={'outline-light'} onClick={() => dispatch(isAuthenticated(true))}>Authorisation</Button>
					</Nav>
				}

			</Container>
		</Navbar>
	)
}

export default NavBar