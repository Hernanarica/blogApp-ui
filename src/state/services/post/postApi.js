import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
	reducerPath: 'postApi',
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL_API }),
	endpoints: (builder) => ({
		getPosts: builder.query({
			query: (page = 1) => `/posts?page=${ page }`
		}),
	})
});

export const { useGetPostsQuery, useListPostsQuery } = postApi;