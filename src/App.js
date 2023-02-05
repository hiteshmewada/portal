import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
// import Events from './pages/events';
// import AnnualReport from './pages/annual';
import Teams from './pages/team';
// import Blogs from './pages/blogs';
import Register from './pages/signup';

function App() {
return (

	<Router>
		
	<Navbar />
	<Routes>
        <Route path='/' exact element={Home} />
        <Route path='/about' element={Teams} />
        <Route path='/contact' element={Teams} />
        <Route path='/reg' element={Register} />
      </Routes>
	{/* <Routes>
		<Route path='/' exact element={Home} />
		<Route path='/about' element={About} />
		
		
		<Route path='/team' element={Teams} />

		<Route path='/register' element={SignUp} />
 </Routes>  */}
  {/* <Home path='/' />
  <About path='/about' />
  <Teams path='/team' />
  <SignUp path='/sign-up' /> */}
	</Router>
);
}

export default App;
