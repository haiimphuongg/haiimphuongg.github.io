import React from "react";
import "./style/experience.css";

const Experience = (props) => {
	const { date, title, company, description, skills } = props;

	return (
		<React.Fragment>
			<div className="experience">
				<div className="experience-left-side">
					<div className="experience-date">{date}</div>
				</div>

				<div className="experience-right-side">
					<div className="experience-title">{title}</div>
					<div className="experience-company">{company}</div>
					<div className="experience-description" dangerouslySetInnerHTML={{ __html: description }}></div>
					<div className="experience-skills">
						{skills.map((skill, index) => (
							<span key={index} className="experience-skill">
								{skill}
							</span>
						))}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Experience; 