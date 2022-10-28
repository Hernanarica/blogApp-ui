import { Wrapper } from '../components/Utils/Wrapper';
import { Link } from 'react-router-dom';

export function Home() {
	return (
		<>
			<Wrapper>
				<div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
					<div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
						<svg
							className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
							viewBox="0 0 100 100"
							fill="currentColor"
							preserveAspectRatio="none slice"
						>
							<path d="M50 0H100L50 100H0L50 0Z" />
						</svg>
						<img
							className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
							src="https://images.pexels.com/photos/3183202/pexels-photo-3183202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							alt="Blog image"
						/>
					</div>
					<div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
						<div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
							<p className="py-1 px-3 w-fit bg-green-100 text-green-700 text-xs font-medium uppercase rounded-xl">
								Inicia como blogger
							</p>
							<h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
								Bienvenido a
								<br className="hidden md:block" />
								BlogApp
							</h2>
							<p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
								El lugar perfecto para compartir ideas, pensamientos y sobre todo
								poder ayudar a otros miembros de la comunidad con tu conocimiento.
							</p>
							<div className="flex items-center gap-3">
								<Link to="/register" className="px-4 py-3 bg-indigo-100 text-indigo-600 font-medium rounded">Registrate</Link>
								<Link to="/login" className="text-indigo-600 font-medium">Inicia sesión</Link>
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
			<Wrapper>
				<div className="relative bg-white py-16 sm:py-24">
					<div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
						<div className="relative sm:py-16 lg:py-0">
							<div
								aria-hidden="true"
								className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
							>
								<svg
									className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
									width={404}
									height={392}
									fill="none"
									viewBox="0 0 404 392"
								>
									<defs>
										<pattern
											id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
											x={0}
											y={0}
											width={20}
											height={20}
											patternUnits="userSpaceOnUse"
										>
											<rect
												x={0}
												y={0}
												width={4}
												height={4}
												className="text-gray-200"
												fill="currentColor"
											/>
										</pattern>
									</defs>
									<rect
										width={404}
										height={392}
										fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
									/>
								</svg>
							</div>
							<div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
								<div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
									<img
										className="absolute inset-0 h-full w-full object-cover"
										src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"
										alt=""
									/>
									<div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
									<div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90" />
									<div className="relative px-8">
										<div>
											<img
												className="h-12"
												src="https://tailwindui.com/img/logos/workcation.svg?color=white"
												alt="Workcation"
											/>
										</div>
										<blockquote className="mt-8">
											<div className="relative text-lg font-medium text-white md:flex-grow">
												<svg
													className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-400"
													fill="currentColor"
													viewBox="0 0 32 32"
													aria-hidden="true"
												>
													<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
												</svg>
												<p className="relative">
													Tincidunt integer commodo, cursus etiam aliquam neque, et.
													Consectetur pretium in volutpat, diam. Montes, magna cursus
													nulla feugiat dignissim id lobortis amet.
												</p>
											</div>
											<footer className="mt-4">
												<p className="text-base font-semibold text-indigo-200">
													Sarah Williams, CEO at Workcation
												</p>
											</footer>
										</blockquote>
									</div>
								</div>
							</div>
						</div>
						<div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
							<div className="pt-12 sm:pt-16 lg:pt-20">
								<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
									Nuestra mision
								</h2>
								<div className="mt-6 space-y-6 text-gray-500">
									<p className="text-lg">
										Alcanzar a la mayor cantidad de personas al rededor del mundo para que puedan compartir sus conocimientos con el resto
										de la comunidad de BlogApp.
									</p>
									<p className="text-base leading-7">
										Nos enfocamos en crear un ambiente adecuado para debates y discusiones sin agresiones o palabras desmedidas, mediante nuestro sistema sde tolerancia cero.
									</p>
									<p className="text-base leading-7">
										En blogApp nos importa que lo que se comparta sea verídico, por eso mismo todo el contenido publicado es avalado por profesionales.
									</p>
								</div>
							</div>
							<div className="mt-10">
								<dl className="grid grid-cols-2 gap-x-4 gap-y-8">
									<div className="border-t-2 border-gray-100 pt-6">
										<dt className="text-base font-medium text-gray-500">Fundación</dt>
										<dd className="text-3xl font-bold tracking-tight text-gray-900">
											2021
										</dd>
									</div>
									<div className="border-t-2 border-gray-100 pt-6">
										<dt className="text-base font-medium text-gray-500">Empleados</dt>
										<dd className="text-3xl font-bold tracking-tight text-gray-900">
											1
										</dd>
									</div>
									<div className="border-t-2 border-gray-100 pt-6">
										<dt className="text-base font-medium text-gray-500">Usuarios</dt>
										<dd className="text-3xl font-bold tracking-tight text-gray-900">
											521
										</dd>
									</div>
									<div className="border-t-2 border-gray-100 pt-6">
										<dt className="text-base font-medium text-gray-500">Posts</dt>
										<dd className="text-3xl font-bold tracking-tight text-gray-900">
											$25M
										</dd>
									</div>
								</dl>
								<div className="mt-10">
									<a href="#" className="text-base font-medium text-indigo-600">
										Learn more about how we're changing the world
										<span aria-hidden="true"> →</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
		</>
	);
}