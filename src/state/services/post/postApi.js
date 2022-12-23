import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie } from '../../../helpers';

export const postApi = createApi({
	reducerPath: "postApi",
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL_API }),
	endpoints: (builder) => ({
		getPosts: builder.query({
			query: (page = 1) => `/posts?page=${ page }`
		}),
		getPostById: builder.query({
			query: (title) => `/posts/${ title }`
		}),
		// createPost: builder.mutation({
		// 	query: (postData) => ({
		// 		url: '/posts',
		// 		method: 'POST',
		// 		body: postData,
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 			Authorization: `Bearer ${ getCookie('token') }`
		// 		}
		// 	})
		// })
	})
});

export const { useGetPostsQuery, useGetPostByIdQuery } = postApi;