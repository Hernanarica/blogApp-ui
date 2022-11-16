import { Wrapper } from '../components/Utils/Wrapper';
import { PostCard } from '../components';

export function Posts() {
	return (
		<Wrapper>
			<div className="px-2">
				<div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
					<PostCard />
				</div>
			</div>
		</Wrapper>
	);
}