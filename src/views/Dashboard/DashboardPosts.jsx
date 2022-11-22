import { Link } from 'react-router-dom';

export function DashboardPosts() {
	return (
		<div className="flex flex-col gap-14">
			<div className="flex justify-between">
				<h1 className="relative text-2xl font-medium">
					Todos Los Posts
					<span className="absolute bottom-0 -right-9 text-sm text-stone-400">1987</span>
				</h1>
				<div>
					<Link
						to="crear"
						className="inline-flex items-center rounded-md border border-transparent bg-stone-900 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2"
					>
						Crear
					</Link>
				</div>
			</div>
			
			<div>
				<div className="text-center">
					<span className="isolate inline-flex rounded-md shadow-sm">
						<button
							type="button"
							className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
						>
							Todos
						</button>
						<button
							type="button"
							className="relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
						>
							Activos
						</button>
						<button
							type="button"
							className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
						>
							Mejor valorados
						</button>
					</span>
				</div>
				<div className="text-center">Gráfico</div>
			</div>
			
			<div>
				<div className="overflow-hidden bg-white shadow sm:rounded-md">
					<ul role="list" className="divide-y divide-gray-200">
						<li>
							<a href="#" className="block hover:bg-gray-50">
								<div className="flex items-center px-4 py-4 sm:px-6">
									<div className="flex min-w-0 flex-1 items-center">
										<div className="flex-shrink-0">
											<img
												className="h-12 w-12 rounded-full"
												src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt=""
											/>
										</div>
										<div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
											<div>
												<p className="truncate text-sm font-medium text-indigo-600">
													Ricardo Cooper
												</p>
												<p className="mt-2 flex items-center text-sm text-gray-500">
													<svg
														className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
														<path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
													</svg>
													<span className="truncate">ricardo.cooper@example.com</span>
												</p>
											</div>
											<div className="hidden md:block">
												<div>
													<p className="text-sm text-gray-900">
														Applied on
														<time dateTime="2020-01-07">January 7, 2020</time>
													</p>
													<p className="mt-2 flex items-center text-sm text-gray-500">
														<svg
															className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 20 20"
															fill="currentColor"
															aria-hidden="true"
														>
															<path
																fillRule="evenodd"
																d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
																clipRule="evenodd"
															/>
														</svg>
														Completed phone screening
													</p>
												</div>
											</div>
										</div>
									</div>
									<div>
										<svg
											className="h-5 w-5 text-gray-400"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fillRule="evenodd"
												d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
								</div>
							</a>
						</li>
						<li>
							<a href="#" className="block hover:bg-gray-50">
								<div className="flex items-center px-4 py-4 sm:px-6">
									<div className="flex min-w-0 flex-1 items-center">
										<div className="flex-shrink-0">
											<img
												className="h-12 w-12 rounded-full"
												src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt=""
											/>
										</div>
										<div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
											<div>
												<p className="truncate text-sm font-medium text-indigo-600">
													Kristen Ramos
												</p>
												<p className="mt-2 flex items-center text-sm text-gray-500">
													<svg
														className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
														<path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
													</svg>
													<span className="truncate">kristen.ramos@example.com</span>
												</p>
											</div>
											<div className="hidden md:block">
												<div>
													<p className="text-sm text-gray-900">
														Applied on
														<time dateTime="2020-01-07">January 7, 2020</time>
													</p>
													<p className="mt-2 flex items-center text-sm text-gray-500">
														<svg
															className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 20 20"
															fill="currentColor"
															aria-hidden="true"
														>
															<path
																fillRule="evenodd"
																d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
																clipRule="evenodd"
															/>
														</svg>
														Completed phone screening
													</p>
												</div>
											</div>
										</div>
									</div>
									<div>
										<svg
											className="h-5 w-5 text-gray-400"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fillRule="evenodd"
												d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
								</div>
							</a>
						</li>
						<li>
							<a href="#" className="block hover:bg-gray-50">
								<div className="flex items-center px-4 py-4 sm:px-6">
									<div className="flex min-w-0 flex-1 items-center">
										<div className="flex-shrink-0">
											<img
												className="h-12 w-12 rounded-full"
												src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt=""
											/>
										</div>
										<div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
											<div>
												<p className="truncate text-sm font-medium text-indigo-600">
													Ted Fox
												</p>
												<p className="mt-2 flex items-center text-sm text-gray-500">
													<svg
														className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
														<path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
													</svg>
													<span className="truncate">ted.fox@example.com</span>
												</p>
											</div>
											<div className="hidden md:block">
												<div>
													<p className="text-sm text-gray-900">
														Applied on
														<time dateTime="2020-01-07">January 7, 2020</time>
													</p>
													<p className="mt-2 flex items-center text-sm text-gray-500">
														<svg
															className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 20 20"
															fill="currentColor"
															aria-hidden="true"
														>
															<path
																fillRule="evenodd"
																d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
																clipRule="evenodd"
															/>
														</svg>
														Completed phone screening
													</p>
												</div>
											</div>
										</div>
									</div>
									<div>
										<svg
											className="h-5 w-5 text-gray-400"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fillRule="evenodd"
												d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}