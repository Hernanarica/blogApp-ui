import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../state/thunks';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline/index.js';

export function Avatar() {
	const { name, image } = useSelector(state => state.user.credentials);
	console.log(name);
	const [showMenu, setShowMenu ] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	
	const handleShowMenu = () => {
		setShowMenu(!showMenu);
	};
	
	const handleLogout = () => {
		dispatch(logoutThunk());
		
		navigate('/');
	};
	
	return (
		<>
			<button className="w-10 h-10 align-middle rounded-full overflow-hidden" onClick={ handleShowMenu }>
				<img src={ `${ import.meta.env.VITE_BASE_URL_UPLOADS }/userProfile/${ image }` } alt="Image profile" />
			</button>
			
			{
				showMenu && (
					<ul className="absolute top-10 right-0 bg-gray-50 text-gray-900 text-left w-40 rounded-md overflow-hidden z-[2]">
						<li className="hover:bg-gray-100">
							<NavLink to="/dashboard/profile" className="block p-2">
								Profile
							</NavLink>
						</li>
						<li className="hover:bg-gray-100">
							<NavLink to={ `${ name }/publicaciones` } className="block p-2">
								Mis publicaciones
							</NavLink>
						</li>
						<li className="hover:bg-gray-100">
							<button className="flex items-center gap-1 w-full px-2 py-2" onClick={ handleLogout }>
								<span>
									<ArrowLeftOnRectangleIcon className="w-5 h-5" />
								</span>
								Logout
							</button>
						</li>
					</ul>
				)
			}
		</>
	);
}