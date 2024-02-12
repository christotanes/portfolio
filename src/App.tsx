import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './layout/footer';
import Header from './layout/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;