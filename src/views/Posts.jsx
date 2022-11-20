import { useEffect, useState } from 'react';
import axios from 'axios';
import { Wrapper } from '../components/Utils/Wrapper';
import { PostCard } from '../components';

export function Posts() {
	const [ posts, setPosts ] = useState([]);
	const [ paginator, setPaginator ] = useState();
	const [ counterPaginator, setCounterPaginator ] = useState(1);
	
	useEffect(() => {
		getAllPosts(counterPaginator).then(({ data, status, meta }) => {
			if (status !== 'success') return;
			setPosts(data);
			setPaginator(meta);
		});
	}, [ counterPaginator ]);
	
	useEffect(() => {
		getAllPosts().then(({ data, status, meta }) => {
			if (status !== 'success') return;
			setPosts(data);
			setPaginator(meta);
		});
	}, []);
	
	const getAllPosts = async (pagination = 1) => {
		try {
			const { data } = await axios.get(`${ import.meta.env.VITE_BASE_URL_API }/posts?page=${ pagination }`);
			return data;
		} catch (err) {
			throw new Error(`${ err }`);
		}
	};
	
	const handleNextPaginator = () => {
		if (counterPaginator >= paginator?.last_page) return;
		setCounterPaginator(counterPaginator + 1);
	}
	
	const handlePreviousPaginator = () => {
		if (counterPaginator <= 1) return;
		setCounterPaginator(counterPaginator - 1);
	}
	
	return (
		<Wrapper>
			<div className="px-2">
				<div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
					{
						posts.map(post => <PostCard { ...post } key={ post.id } />)
					}
				</div>
				
				<nav
					className="mt-14 flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
					aria-label="Pagination"
				>
					<div className="hidden sm:block">
						<p className="text-sm text-gray-700">
							Mostrando <span className="font-medium">{ paginator?.from }</span> a <span className="font-medium">{ paginator?.to }</span> de{' '}
							<span className="font-medium">{ paginator?.total }</span> resultados
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