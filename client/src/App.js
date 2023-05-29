import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import NavBar from './components/NavBar'
import { useDispatch } from 'react-redux'
import { isAuthenticated } from './store/authSlice'
import { setUser } from './store/userSlice'
import { check } from './http/userAPI'
import { Spinner } from 'react-bootstrap'

const App = () => {

	const dispatch = useDispatch()
	const [loading, setLoading] = useState(true)

	useEffect(() => {

		if (localStorage.getItem('token')) {
			check().then(data => {
				dispatch(setUser(data))
				dispatch(isAuthenticated(true))
			}).finally(() => setLoading(false))
		} else {
			setLoading(false)
		}
	}, [])


	if (loading) {
		return <Spinner animation={'grow'} />
	}

	return (
		<BrowserRouter>
			<NavBar />
			<AppRouter />
		</BrowserRouter>
	)
}

export default App
