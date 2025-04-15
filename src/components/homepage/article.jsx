import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import "./styles/article.css";

const Article = (props) => {
	const { title, description, date, notionUrl } = props;

	return (
		<React.Fragment>
			<div className="homepage-article">
				<div className="homepage-article-content">
					<div className="homepage-article-date">
						|&nbsp;&nbsp;&nbsp;{date}
					</div>
					<div className="homepage-article-title">{title}</div>
					<div className="homepage-article-description">
						{description}
					</div>
					<div className="homepage-article-link">
						{notionUrl && (
							<a href={notionUrl} target="_blank" rel="noopener noreferrer">
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
