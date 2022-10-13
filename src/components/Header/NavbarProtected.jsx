import { routes }        from "../../router/routes";
import { NavbarItem }    from "./NavbarItem.jsx";
import { useDispatch }   from "react-redux";
import { logout }        from "../../state/slices/index.js";
import { deleteCookie }  from "../../helpers/index.js";
import { logoutService } from "../../services/index.js";

export function NavbarProtected() {
	const { protectedRoutes } = routes;
	const dispatch = useDispatch();
	
	const handleLogout = async () => {
		dispatch(logout());
		
		await logoutService();
		
		deleteCookie('access_token');
	};
	
	return (
		<nav>
			<ul className="flex items-center gap-4">
				{
					protectedRoutes.map(route => <NavbarItem key={ route.name } { ...route } /> )
				}
				
				<button className="border rounded bg-red-500 text-white text-sm px-2 py-1" onClick={ handleLogout }>Logout</button>
				
			</ul>
		</nav>
	);
}