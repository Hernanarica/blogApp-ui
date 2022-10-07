import { useDispatch } from "react-redux";
import { useForm }     from "react-hook-form";
import { loginThunk }  from "../state/thunks/index.js";

export function Login() {
	const dispatch = useDispatch();
	const { handleSubmit, register, formState } = useForm();
	
	const onSubmit = (userData) => {
		dispatch(loginThunk(userData));
	}
	
	return (
		<form action="#" onSubmit={ handleSubmit(onSubmit) } noValidate>
			<div>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					id="email"
					className="border border-2 rounded"
					{ ...register('email')}
				/>
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					className="border border-2 rounded"
					{ ...register('password')}
				/>
			</div>
			<button>Login</button>
		</form>
	);
}