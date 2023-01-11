import { useQuery, useQueryClient} from "@tanstack/react-query";
import { getPost } from "../services/postsServices.js";

export const usePost = (title) => {
  // const queryClient = useQueryClient();

  const postQuery = useQuery({
    queryKey: ['post', title],
    queryFn: () => getPost(title)
  })

  // const preFetchPost = async (titleParam) => {
  //   await queryClient.prefetchQuery({
  //     queryKey: ['post', titleParam],
  //     queryFn: () => getPost(titleParam)
  //   });
  // }

  return {
    postQuery,
    // preFetchPost
  }
}