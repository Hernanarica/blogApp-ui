import { deleteCredentials, logout } from '../slices';
import { logoutService } from '../../services';
import { deleteCookie } from '../../helpers';

export function logoutThunk() {
	return async dispatch => {
		try {
			await logoutService();
			
			dispatch(logout());
			dispatch(deleteCredentials());
			
			deleteCookie('token');
			deleteCookie('credentials');
		} catch (err) {
			throw new Error(`${ err }`);
		}
	};
}