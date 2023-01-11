import { Wrapper } from '../components/Utils/Wrapper';
import { PostCard } from '../components';
import { usePosts } from "../hooks/usePosts.jsx";

export function Posts() {
	const { postsQuery, nextPage, previousPage } = usePosts();

	if (postsQuery.isLoading) return <h2>Loading...</h2>

	if (postsQuery.error) return <h2>Error al traer la informacion</h2>

	return (
		<Wrapper>
			<div className="px-2">
				<div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
					{
						postsQuery.data.posts.map(post => <PostCard { ...post } key={ post.id } />)
					}
				</div>
				<nav
					className="mt-14 flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
					aria-label="Pagination"
				>
					<div className="hidden sm:block">
						<p className="text-sm text-gray-700">
							Mostrando <span className="font-medium">{ postsQuery.data.meta.from }</span> a <span className="font-medium">{ postsQuery.data.meta.to }</span> de{' '}
							<span className="font-medium">{ postsQuery.data.meta.total }</span> resultados
						</p>
					</div>
					<div className="flex flex-1 justify-between sm:justify-end">
						<button
							className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
							onClick={ previousPage }
						>
							Anterior
						</button>
						<button
							className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
							onClick={ nextPage }
						>
							Siguiente
						</button>
					</div>
				</nav>
			</div>
		</Wrapper>
	);
}