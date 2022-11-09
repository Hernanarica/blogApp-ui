import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { loginThunk }  from "../state/thunks/index.js";

export function Login() {
	const dispatch = useDispatch();
	const { handleSubmit, register, formState: { errors }, setError } = useForm();
	
	const onSubmit = (userData) => {
		dispatch(loginThunk(userData, setError));
	}
	
	return (
		<div className="min-h-[calc(100vh-58px)] flex items-center justify-center">
			<div className="sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<form
						action="#"
						onSubmit={ handleSubmit(onSubmit) }
						className="space-y-6"
					>
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
								})}
							/>
						</div>
						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700"
							>Password</label>
							<input
								type="password"
								name="password"
								id="password"
								className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
								autoComplete="password"
								{ ...register('password', {
									required: {
										value: true,
										message: 'La contraseña es obligatoria'
									}
								})}
							/>
						</div>
						
						{
							errors.email && <p>{ errors.email.message }</p>
						}
						
						{
							errors.password && <p>{ errors.password.message }</p>
						}
						
						{
							errors.credentialsError && <p {...register('credentialsError', { required: false })}>{ errors.credentialsError.message }</p>
						}
						
						<button className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Iniciar sesion</button>
					</form>
				</div>
			</div>
		</div>
	);
}