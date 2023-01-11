import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../services/postsServices.js";

export const usePosts = () => {
  const [ page, setPage ] = useState(1);
  const postsQuery = useQuery({
    queryKey: ['posts', page],
    queryFn: () => getPosts(page),
    keepPreviousData: true
  });

  const nextPage = () => {
    if (page >= postsQuery.data.meta.last_page) return;
    setPage(page + 1);
  }

  const previousPage = () => {
    if (page <= 1) return;
    setPage(page - 1);
  }

  return {
    postsQuery,
    nextPage,
    previousPage
  }
}