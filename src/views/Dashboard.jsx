import { Comment, Post } from '../components/TextEditors';

export function Dashboard() {
	return (
		<>
			<h2>Dashboard</h2>
			<Comment />
			<Post />
		</>
	);
}