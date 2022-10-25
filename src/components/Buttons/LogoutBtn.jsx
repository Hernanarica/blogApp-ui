import { useDispatch } from 'react-redux';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline/index.js';
import { logout } from '../../state/slices/index.js';
import { logoutService } from '../../services/index.js';
import { deleteCookie } from '../../helpers/index.js';

export function LogoutBtn() {
	const dispatch = useDispatch();
	
	const handleLogout = async () => {
		dispatch(logout());
		
		await logoutService();
		
		deleteCookie('token');
		deleteCookie('credentials');
	};
	
	return (
		<button className="flex items-center gap-1 w-full px-2 py-2" onClick={ handleLogout }>
			Logout
			<span>
				<ArrowLeftOnRectangleIcon className="w-5 h-5" />
			</span>
		</button>
	);
}