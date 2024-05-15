import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MainLayout() {
	return (
		<>
			<div id='layout-wrapper'>
				<Navbar />
				<SideBar />
			</div>
			<div className='vertical-overlay' />

			<div className='main-content'>
				<div className='page-content'>
					<div className='container-fluid'>
						<Outlet />
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
}
