import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import myExperiences from "../../data/experiences";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						{myExperiences.map((experience, index) => (
							<div className="work" key={index}>
								<div className="work-title">{experience().company}</div>
								<div className="work-subtitle">
									{experience().title}
								</div>
								<div className="work-duration">{experience().date}</div>
								<div className="work-skills">
									{experience().skills.map((skill, skillIndex) => (
										<span key={skillIndex} className="work-skill">{skill}</span>
									))}
								</div>
							</div>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
