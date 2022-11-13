import { useDispatch } from 'react-redux';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline/index.js';
import { deleteCredentials, logout } from '../../state/slices';
import { logoutService } from '../../services';
import { deleteCookie } from '../../helpers';

export function LogoutBtn() {
	const dispatch = useDispatch();
	
	const handleLogout = async () => {
		dispatch(logout());
		dispatch(deleteCredentials());
		
		await logoutService();
		
		deleteCookie('token');
		deleteCookie('credentials');
		
		window.localStorage.removeItem('pathname');
	};
	
	return (
		<button className="flex items-center gap-1 w-full px-2 py-2" onClick={ handleLogout }>
			<span>
				<ArrowLeftOnRectangleIcon className="w-5 h-5" />
			</span>
			Logout
		</button>
	);
}