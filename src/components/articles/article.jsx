import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import "./style/article.css";

const Article = (props) => {
	const { date, title, description, notionUrl } = props;

	return (
		<React.Fragment>
			<div className="article">
				<div className="article-left-side">
					<div className="article-date">{date}</div>
				</div>

				<div className="article-right-side">
					<div className="article-title">{title}</div>
					<div className="article-description">{description}</div>
					<div className="article-links">
						{notionUrl && (
							<a 
								href={notionUrl} 
								target="_blank" 
								rel="noopener noreferrer" 
								className="article-link"
							>
								Read Details{" "}
								<FontAwesomeIcon
									style={{ fontSize: "10px" }}
									icon={faExternalLinkAlt}
								/>
							</a>
						)}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Article;
