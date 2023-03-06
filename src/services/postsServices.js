import axios from 'axios';
import { sleep } from '../helpers/sleep.js';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API
});

export async function getPosts( page = 1 ) {
  // await sleep();
  const res      = await axiosInstance.get(`/posts?page=${ page }`);
  const { data } = await res;
  return data;
}

export async function getPost( title ) {
  // await sleep();
  const res      = await axiosInstance.get(`/posts/${ title }`);
  const { data } = await res;
  return data;
}