import React from "react";
import {Link} from "react-router-dom";

class HomePage extends React.Component {
	render() {
		return(
			<div className="jumbotron l-padding">
				<h1>Pluralsight Administration</h1>
				<p>React, React-router, and Flux for ultra-responsive web apps.</p>
				<Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
			</div>
		);
	}
}

export default HomePage;
