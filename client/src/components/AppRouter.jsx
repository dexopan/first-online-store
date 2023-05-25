import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { useSelector } from 'react-redux'

const AppRouter = () => {
	const isAuth = useSelector(state => state.auth.isAuth)

	return (
		<Routes>
			{isAuth && authRoutes.map(({ path, Component }) =>
				<Route key={path} path={path} element={<Component />} />
			)}

			{publicRoutes.map(({ path, Component }) =>
				<Route key={path} path={path} element={<Component />} />
			)}
			<Route path='*' element={<Navigate to="/" replace />} />

		</Routes>
	)
}

export default AppRouter