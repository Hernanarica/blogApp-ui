import { useForm } from "react-hook-form";
import { axiosUserRegisterInstance } from '../config/axiosConfig.js';

export function Register() {
	const { handleSubmit, register, formState: { errors }, getValues } = useForm();
	
	const onSubmit = data => {
		const formData = new FormData(document.getElementById('form'));
		
		axiosUserRegisterInstance.post('/users', formData).then(r => {
			console.log(r);
		})
	};
	
	return (
		<div className="min-h-[calc(100vh-58px)] flex items-center justify-center">
			<div className="sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<form
						action="#"
						method="POST"
						onSubmit={ handleSubmit(onSubmit) }
						className="space-y-6"
						id="form"
						encType="multipart/form-data"
					>
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-700"
							>Nombre</label>
							<input
								type="text"
								name="name"
								id="name"
								className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
								{ ...register('name', {
									required: {
										value: true,
										message: 'El nombre es obligatorio'
									}
								}) }
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700"
							>Email</label>
							<input
								type="email"
								name="email"
								id="email"
								className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
								{ ...register('email', {
									required: {
										value: true,
										message: 'El email es obligatorio'
									},
									pattern: {
										value: /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
										message: 'El email debe tener formato de email'
									}
								}) }
							/>
						</div>
						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700"
							>Contraseña</label>
							<input
								type="password"
								name="password"
								id="password"
								className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
								{ ...register('password', {
									required: {
										value: true,
										message: 'La contraseña es obligatoria'
									},
									minLength: {
										value: 8,
										message: 'La contraseña debe tener minimo 8 caracteres'
									}
								}) }
							/>
						</div>
						<div>
							<label
								htmlFor="password_confirmation"
								className="block text-sm font-medium text-gray-700"
							>Confirmar contraseña</label>
							<input
								type="password"
								name="password_confirmation"
								id="password_confirmation"
								className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
								{ ...register('password_confirmation', {
									required: {
										value: true,
										message: 'La confirmacion de contraseña es obligatoria'
									},
									minLength: {
										value: 8,
										message: 'La confirmacion de contraseña debe tener minimo 8 caracteres'
									},
									validate: value => value === getValues('password') || 'Deben ser iguales'
								}) }
							/>
						</div>
						
						<div>
							<label htmlFor="image">
								<input
									type="file"
									name="image"
									className="block w-full border-none text-sm"
									id="image"
									{ ...register('image') }
								/>
							</label>
						</div>
						
						{
							errors.name && <p>{ errors.name.message }</p>
						}
						
						{
							errors.email && <p>{ errors.email.message }</p>
						}
						
						{
							errors.password && <p>{ errors.password.message }</p>
						}
						
						{
							errors.password_confirmation && <p>{ errors.password_confirmation.message }</p>
						}
						
						<button className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Registrar</button>
					</form>
				</div>
			</div>
		</div>
	);
}