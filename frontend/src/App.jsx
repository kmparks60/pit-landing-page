import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ContactUs from './components/ContactUs';

function App() {

	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path='/' element={<LandingPage />}/>
				<Route path='/about-us' element={<AboutUs />}/>
				<Route path='/services' element={<Services />}/>
				<Route path='/contact-us' element={<ContactUs />}/>
			</Routes>
		</Router>
	)
};

export default App;