import moment from 'moment/min/moment-with-locales';
import { Link } from 'react-router-dom';
import { usePost } from "../hooks/usePost.jsx";
moment.locale('es-mx');

export function PostCard({ id, title, description, published, user }) {
	return (
		<Link to={ `${ title }` }>
			<div>
				<span className="inline-block">
					<span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
						Category
					</span>
				</span>
			</div>
			<div className="mt-4 block">
				<p className="text-xl font-semibold text-gray-900">{ title }</p>
				<p className="mt-3 text-base text-gray-500">{ description }</p>
			</div>
			<div className="mt-6 flex items-center">
				<div className="flex-shrink-0">
					<div>
						<span className="sr-only">Paul York</span>
						<img
							className="h-10 w-10 rounded-full"
							src={ `${ import.meta.env.VITE_BASE_URL_UPLOADS }/userProfile/${ user.image }` }
							alt={ user.name }
						/>
					</div>
				</div>
				<div className="ml-3">
					<p className="text-sm font-medium text-gray-900">
						<span>{ user.name }</span>
					</p>
					<div className="flex space-x-1 text-sm text-gray-500">
						<time dateTime={ published }>{ moment(published).format('LL') }</time>
					</div>
				</div>
			</div>
		</Link>
	);
}