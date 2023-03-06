import { useParams } from 'react-router-dom';
import moment from 'moment/min/moment-with-locales';
import { usePost } from '../../hooks/usePost.jsx';

moment.locale('es-mx');

export function PostDetail() {
  const { title } = useParams();
  const { postQuery } = usePost(title);

  if ( postQuery.isFetching ) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="min-h-[calc(100vh-56px)] p-2">
      <h2 className="sr-only">{ postQuery.data.post.title }</h2>
      <div className="mx-auto max-w-5xl">
        <article dangerouslySetInnerHTML={ { __html: postQuery.data.post.body } }></article>
        <div className="text-right">
          <time
            dateTime={ postQuery.data.post.published }
            className="text-gray-500"
          >{ moment(postQuery.data.post.published).format('LL') }</time>
        </div>
      </div>
    </section>
  );
}