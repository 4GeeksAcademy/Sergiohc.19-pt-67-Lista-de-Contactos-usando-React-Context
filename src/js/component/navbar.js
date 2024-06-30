import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mx-2 mb-0 h1">Home</span>
			</Link>

		</nav>
	);
};
