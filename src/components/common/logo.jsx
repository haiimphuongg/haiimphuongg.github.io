import React from "react";
import { Link } from "react-router-dom";

import INFO from "../../data/user";

import "./styles/logo.css";

const Logo = (props) => {
	let { width, link } = props;

	if (link === undefined) {
		link = true;
	}

	return (
		<React.Fragment>
			{link ? (
				<Link to="/" className="logo-link">
				</Link>
			) : (
				<div></div>
			)}
		</React.Fragment>
	);
};

export default Logo;
