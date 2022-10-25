import { useForm } from "react-hook-form";
import axios       from "axios";

export function Register() {
	const { handleSubmit, register, formState: { errors }, getValues } = useForm();
	
	const onSubmit = data => {
		axios.post('http://127.0.0.1:8000/api/users', {
			...data
		}).then(r => {
			console.log(r);
		})
	};
	
	return (
		<form action="#" method="POST" onSubmit={ handleSubmit(onSubmit) }>
			<div>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					name="name"
					id="name"
					className="border border-2 rounded"
					{ ...register('name', {
						required: {
							value: true,
							message: 'EL nombre es obligatorio'
						}
					}) }
				/>
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					id="email"
					className="border border-2 rounded"
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
				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					className="border border-2 rounded"
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
				<label htmlFor="password_confirmation">Password confirmation</label>
				<input
					type="password"
					name="password_confirmation"
					id="password_confirmation"
					className="border border-2 rounded"
					{ ...register('passwordConfirmation', {
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
				errors.passwordConfirmation && <p>{ errors.passwordConfirmation.message }</p>
			}
			
			<button>Register</button>
		</form>
	);
}