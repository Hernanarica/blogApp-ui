export function FormNotificationInputError({ error }) {
	return (
		<div className="bg-red-500 px-2 py-1 rounded-md">
			<p className="text-white">{ error }</p>
		</div>
	);
}