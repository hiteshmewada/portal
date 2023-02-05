import React from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {
return (
	<>
	<div>
    <li>
      <Link to="/home">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
    <li>
      <Link to="/reg">Register</Link>
    </li>
  </div>
	{/* <Nav>
		<Bars />

		<NavMenu>
		<Link to='/about' activeStyle>
			Home
		</Link>
		<Link to='/team' activeStyle>
			About 
		</Link>
		<Link to='/register' activeStyle>
			Contact
		</Link>
		<Link to='/register' activeStyle>
			Register
		</Link>
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/login'>Login</NavBtnLink>
		</NavBtn>
	</Nav> */}
	</>
);
};

export default Navbar;
