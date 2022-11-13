import Cookies from 'js-cookie';

export const setCookie = (name, value) => {
	Cookies.set(name, value, { expires: 365 });
};

export const getCookie = (name) => {
	return Cookies.get(name);
};

export const deleteCookie = (name) => {
	return Cookies.remove(name);
};