import { useSelector } from "react-redux";

export function Profile() {
	const { credentials } = useSelector(state => state.user);
	
	return (
		<>
			<h2>Profile</h2>
			<ul>
				<li><b>Nombre:</b> { credentials.name }</li>
				<li><b>Email:</b> { credentials.email }</li>
			</ul>
		</>
	);
}