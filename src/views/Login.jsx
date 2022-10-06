export function Login() {
	return (
		<form action="#">
			<div>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					id="email"
					className="border border-2 rounded"
				/>
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					className="border border-2 rounded"
				/>
			</div>
			<button>Login</button>
		</form>
	);
}