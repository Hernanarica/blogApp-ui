import { NavLink } from 'react-router-dom';
import { LogoutBtn } from '../Buttons/index.js';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export function Avatar() {
	const { image } = useSelector(state => state.user.credentials)
	const [showMenu, setShowMenu ] = useState(false);
	
	const handleShowMenu = () => {
		setShowMenu(!showMenu);
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
							<LogoutBtn />
						</li>
					</ul>
				)
			}
		</>
	);
}