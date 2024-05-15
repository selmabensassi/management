import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import axiosInstance from './config/axiosConfig';
import AuthContext from './contexts/auth-context';
import SideBarContext from './contexts/sidebar-context';

export default function App({ router }) {
	const [loading, setLoading] = useState(true);
	const [auth, setAuth] = useState(false);
	const [userType, setUserType] = useState(null);
	const [user, setUser] = useState(null);

	const [isSideBarOpen, setIsSideBarOpen] = useState(false);

	const toggleSideBar = () => {
		setIsSideBarOpen((prev) => !prev);
	};

	useEffect(() => {
		let token = localStorage.getItem('token');
		if (token) {
			axiosInstance
				.get('/auth/me')
				.then((response) => {
					setAuth(true);
					setUserType(response.data.userType);
					setUser(response.data.user);
				})
				.catch((e) => {
					localStorage.removeItem('token');
					setAuth(false);
					setUserType(null);
					setUser(null);
				})
				.finally(() => {
					setLoading(false);
				});
		} else {
			setLoading(false);
		}
	}, []);

	const refreshUser = async () => {
		const response = await axiosInstance.get('/auth/me');
		setAuth(true);
		setUserType(response.data.userType);
		setUser(response.data.user);
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<AuthContext.Provider value={{ auth, setAuth, userType, setUserType, user, setUser, refreshUser }}>
			<SideBarContext.Provider value={{ isSideBarOpen, toggleSideBar }}>
				<div className={`${isSideBarOpen ? 'page-sidebar-open ' : ''}`}>
					<RouterProvider router={router} />
				</div>
			</SideBarContext.Provider>
		</AuthContext.Provider>
	);
}
