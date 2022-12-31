import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">Home</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/projects">Projects</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/articles">Articles</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© 2024 Phan Nguyen Phuong.
					</div>
					<div className="footer-credits-text">
						Template inspired by <a href="https://github.com/hashirshoaeb/portfolio" target="_blank" rel="noreferrer">hashirshoaeb/portfolio</a>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
