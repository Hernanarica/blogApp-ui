import { useForm } from "react-hook-form";
import axios       from "axios";

export function Register() {
	const { handleSubmit, register, formState } = useForm();
	
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
					{ ...register('name') }
				/>
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					id="email"
					className="border border-2 rounded"
					{ ...register('email') }
				/>
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					className="border border-2 rounded"
					{ ...register('password') }
				/>
			</div>
			<div>
				<label htmlFor="password_confirmation">Password confirmation</label>
				<input
					type="password"
					name="password_confirmation"
					id="password_confirmation"
					className="border border-2 rounded"
					{ ...register('password_confirmation') }
				/>
			</div>
			<button>Register</button>
		</form>
	);
}