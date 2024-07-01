import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar bg-black mb-3">
			<Link to="/">
				<button className="home"><span className="m-5 h1">Home</span></button>
			</Link>

		</nav>
	);
};
