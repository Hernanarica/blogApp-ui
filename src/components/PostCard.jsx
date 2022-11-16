export function PostCard() {
	return (
		<div>
			<div>
				<a href="#" className="inline-block">
					<span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
						Article
					</span>
				</a>
			</div>
			<a href="#" className="mt-4 block">
				<p className="text-xl font-semibold text-gray-900">
					Boost your conversion rate
				</p>
				<p className="mt-3 text-base text-gray-500">
					Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
					massa dictumst amet. Sapien tortor lacus arcu.
				</p>
			</a>
			<div className="mt-6 flex items-center">
				<div className="flex-shrink-0">
					<a href="#">
						<span className="sr-only">Paul York</span>
						<img
							className="h-10 w-10 rounded-full"
							src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
						/>
					</a>
				</div>
				<div className="ml-3">
					<p className="text-sm font-medium text-gray-900">
						<a href="#">Paul York</a>
					</p>
					<div className="flex space-x-1 text-sm text-gray-500">
						<time dateTime="2020-03-16">Mar 16, 2020</time>
						<span aria-hidden="true">·</span>
						<span>6 min read</span>
					</div>
				</div>
			</div>
		</div>
	);
}