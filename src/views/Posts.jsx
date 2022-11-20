import { useEffect, useState } from 'react';
import axios from 'axios';
import { Wrapper } from '../components/Utils/Wrapper';
import { PostCard } from '../components';

export function Posts() {
	const [ posts, setPosts ] = useState([]);
	
	useEffect(() => {
		getAllPosts().then(({ data, status }) => {
			if (status !== 'success') return;
			setPosts(data);
		});
	}, []);
	
	const getAllPosts = async () => {
		try {
			const { data } = await axios.get(`${ import.meta.env.VITE_BASE_URL_API }/posts`);
			return data;
		} catch (err) {
			throw new Error(`${ err }`);
		}
	};
	
	return (
		<Wrapper>
			<div className="px-2">
				<div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
					{
						posts.map(post => <PostCard { ...post } key={ post.id } />)
					}
				</div>
			</div>
		</Wrapper>
	);
}