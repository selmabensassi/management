
import { Link } from 'react-router-dom';
import Home from '../components/Landing/Home'
import Services from '../components/Landing/Services'
import Features from '../components/Landing/Features'
import Plans from '../components/Landing/Plans'
import Reviews from '../components/Landing/Reviews';

import Contact from '../components/Landing/Contact';
import Footer from '../components/Landing/Footer';


export default function LandingPage() {
	return (
		<div>
			<Home/>
			<Services/>
			<Features/>
			<Plans/>
			<Reviews/>
			<Contact/>
			<Footer/>
			
		</div>
	);
}
