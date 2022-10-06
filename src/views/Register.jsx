export function Register() {
	return (
		<form action="#">
			<div>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					name="name"
					id="name"
					className="border border-2 rounded"
				/>
			</div>
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
			<div>
				<label htmlFor="password_confirmation">Password confirmation</label>
				<input
					type="password"
					name="password_confirmation"
					id="password_confirmation"
					className="border border-2 rounded"
				/>
			</div>
			<button>Register</button>
		</form>
	);
}