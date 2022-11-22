import { useState } from 'react';
import { Wrapper } from '../components/Utils/Wrapper';
import { PostCard } from '../components';
import { useGetPostsQuery } from '../state/services';

export function Posts() {
	const [ page, setPage ] = useState(1);
	const { data: posts, isFetching } = useGetPostsQuery(page);
	
	if (isFetching) {
		return <h1>Loading</h1>
	}
	
	const { data, meta } = posts;
	
	const handleNextPaginator = () => {
		if (page >= meta.last_page) return;
		setPage(page + 1);
	}
	
	const handlePreviousPaginator = () => {
		if (page <= 1) return;
		setPage(page - 1);
	}
	return (
		<Wrapper>
			<div className="px-2">
				<div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
					{
						data.map(post => <PostCard { ...post } key={ post.id } />)
					}
				</div>
				<nav
					className="mt-14 flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
					aria-label="Pagination"
				>
					<div className="hidden sm:block">
						<p className="text-sm text-gray-700">
							Mostrando <span className="font-medium">{ meta.from }</span> a <span className="font-medium">{ meta.to }</span> de{' '}
							<span className="font-medium">{ meta.total }</span> resultados
						</p>
					</div>
					<div className="flex flex-1 justify-between sm:justify-end">
						<button
							className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
							onClick={ handlePreviousPaginator }
						>
							Anterior
						</button>
						<button
							className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
							onClick={ handleNextPaginator }
						>
							Siguiente
						</button>
					</div>
				</nav>
			</div>
		</Wrapper>
	);
}