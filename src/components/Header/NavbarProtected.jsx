import { useDispatch } from "react-redux";
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline/index.js';
import { NavbarItem } from "./NavbarItem.jsx";
import { logout } from "../../state/slices/index.js";
import { deleteCookie } from "../../helpers/index.js";
import { logoutService } from "../../services/index.js";
import { routes } from "../../router/routes";

export function NavbarProtected() {
	const dispatch = useDispatch();
	const { protectedRoutes } = routes;
	
	const handleLogout = async () => {
		dispatch(logout());
		
		await logoutService();
		
		deleteCookie('token');
		deleteCookie('credentials');
	};
	
	return (
		<>
			{
				protectedRoutes.map(route => <NavbarItem key={ route.name } { ...route } /> )
			}
			
			<button className="flex items-center gap-1 px-2 py-2 bg-red-500 text-white text-sm rounded" onClick={ handleLogout }>
				Logout
				<span>
					<ArrowLeftOnRectangleIcon className="w-5 h-5" />
				</span>
			</button>
			
		</>
	);
}