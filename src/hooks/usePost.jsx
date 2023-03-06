import { useQuery } from '@tanstack/react-query';
import { getPost } from '../services/postsServices.js';

export const usePost = ( title ) => {
  const postQuery = useQuery({
    queryKey: [ 'post', title ],
    queryFn: () => getPost(title)
  });

  return {
    postQuery
  };
};