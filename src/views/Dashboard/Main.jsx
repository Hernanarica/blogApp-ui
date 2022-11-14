import { NewspaperIcon, StarIcon, UsersIcon } from '@heroicons/react/24/outline/index.js';

export function Main() {
	return (
		<div className="p-2">
			<dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
				<div className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6">
					<dt>
						<div className="absolute rounded-md bg-indigo-500 p-3">
							<UsersIcon className="h-6 w-6 text-white" />
						</div>
						<p className="ml-16 truncate text-sm font-medium text-gray-500">
							Usuarios
						</p>
					</dt>
					<dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
						<p className="text-2xl font-semibold text-gray-900">71,897</p>
						<div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
							<div className="text-sm">
								<a
									href="#"
									className="font-medium text-indigo-600 hover:text-indigo-500"
								>
									View all<span className="sr-only"> Total Subscribers stats</span>
								</a>
							</div>
						</div>
					</dd>
				</div>
				<div className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6">
					<dt>
						<div className="absolute rounded-md bg-indigo-500 p-3">
							<NewspaperIcon className="h-6 w-6 text-white" />
						</div>
						<p className="ml-16 truncate text-sm font-medium text-gray-500">
							Posts
						</p>
					</dt>
					<dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
						<p className="text-2xl font-semibold text-gray-900">58.16%</p>
						<div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
							<div className="text-sm">
								<a
									href="#"
									className="font-medium text-indigo-600 hover:text-indigo-500"
								>
									View all<span className="sr-only"> Avg. Open Rate stats</span>
								</a>
							</div>
						</div>
					</dd>
				</div>
				<div className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6">
					<dt>
						<div className="absolute rounded-md bg-indigo-500 p-3">
							<StarIcon className="h-6 w-6 text-white" />
						</div>
						<p className="ml-16 truncate text-sm font-medium text-gray-500">
							Mejor valorados
						</p>
					</dt>
					<dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
						<p className="text-2xl font-semibold text-gray-900">24.57%</p>
						<div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
							<div className="text-sm">
								<a
									href="#"
									className="font-medium text-indigo-600 hover:text-indigo-500"
								>
									View all<span className="sr-only"> Avg. Click Rate stats</span>
								</a>
							</div>
						</div>
					</dd>
				</div>
			</dl>
		</div>
	);
}