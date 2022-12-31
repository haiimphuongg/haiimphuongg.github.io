import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Experience from "../components/experiences/experience";

import INFO from "../data/user";
import SEO from "../data/seo";
import myExperiences from "../data/experiences";

import "./styles/experience.css";

const ExperiencePage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "experience");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Experience | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="experience" />
				<div className="content-wrapper">
					<div className="experience-logo-container">
						<div className="experience-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="experience-main-container">
						<div className="title experience-title">
							{INFO.experience.title}
						</div>

						<div className="experience-container">
							<div className="experience-wrapper">
								{myExperiences.map((experience, index) => (
									<div
										className="experience-item"
										key={(index + 1).toString()}
									>
										<Experience
											key={(index + 1).toString()}
											date={experience().date}
											title={experience().title}
											company={experience().company}
											description={experience().description}
											skills={experience().skills}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ExperiencePage; 