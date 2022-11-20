import moment from 'moment/min/moment-with-locales';
moment.locale('es-mx');

export function PostCard({ id, title, description, published, user }) {
	return (
		<div>
			<div>
				<a href="#" className="inline-block">
					<span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
						Category
					</span>
				</a>
			</div>
			<a href="#" className="mt-4 block">
				<p className="text-xl font-semibold text-gray-900">{ title }</p>
				<p className="mt-3 text-base text-gray-500">{ description }</p>
			</a>
			<div className="mt-6 flex items-center">
				<div className="flex-shrink-0">
					<a href="#">
						<span className="sr-only">Paul York</span>
						<img
							className="h-10 w-10 rounded-full"
							src={ `${ import.meta.env.VITE_BASE_URL_UPLOADS }/userProfile/${ user.image }` }
							alt={ user.name }
						/>
					</a>
				</div>
				<div className="ml-3">
					<p className="text-sm font-medium text-gray-900">
						<a href="#">{ user.name }</a>
					</p>
					<div className="flex space-x-1 text-sm text-gray-500">
						<time dateTime={ published }>{ moment(published).format('LL') }</time>
					</div>
				</div>
			</div>
		</div>
	);
}