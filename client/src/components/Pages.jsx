import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Pagination from 'react-bootstrap/Pagination'
import { setPage } from '../store/deviceSlice'

const Pages = () => {
	const { totalCount, limit, page } = useSelector(state => state.device)
	const dispatch = useDispatch()
	const pagesCount = Math.ceil(totalCount / limit)
	const pages = []

	for (let i = 0; i < pagesCount; i++) {
		pages.push(i + 1)
	}

	return (
		<Pagination className='mt-5'>
			{pages.map(p =>
				<Pagination.Item
					key={p}
					active={p === page}
					onClick={() => dispatch(setPage(p))}
				>
					{p}
				</Pagination.Item>
			)}
		</Pagination>


	)
}

export default Pages