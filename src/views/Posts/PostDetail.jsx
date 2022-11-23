import { useParams } from 'react-router-dom';
import moment from 'moment/min/moment-with-locales';
import { useGetPostByIdQuery } from '../../state/services';

moment.locale('es-mx');

export function PostDetail() {
	const { title } = useParams();
	const { data: post, isFetching } = useGetPostByIdQuery(title);
	
	if (isFetching) {
		return <h1>Loading...</h1>
	}
	
	const { data: { body, published } } = post;
	return (
		<section class="min-h-[calc(100vh-56px)] p-2">
			<h2 class="sr-only">{ title }</h2>
			<div className="mx-auto max-w-5xl">
				<article dangerouslySetInnerHTML={{ __html: body }}>
				</article>
				<div class="text-right">
					<time dateTime={ published } class="text-gray-500">{ moment(published).format('LL') }</time>
				</div>
			</div>
		</section>
	);
}