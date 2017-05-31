import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Header = () => {
	return (
		<nav className="navbar navbar-default">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					<img src="assets/images/pluralsight-logo.png"/>
				</Link>
				<ul className="nav navbar-nav">
					<li><Link to="/">Home</Link></li>
					<li><Link to="courses" ref={(comp) => { window.coursesTab=comp; }}>Courses</Link></li>
					<li><Link to="about">About</Link></li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
