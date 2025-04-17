import React from "react";

function experience_1() {
	return {
		date: "Nov 2024 - Mar 2025",
		title: "Reseach Intern",
		company: "Nara Institute of Science and Technology (NAIST)",
		description:
			`
			<strong>Location: </strong> Ikoma, Nara, Japan <br />
			<strong>Research domain: </strong> Natural Language Processing<br />
			<strong>Research topic: </strong> Adapter Method for Cross Lingual Embedding <br />
			<strong>Description: </strong> <br /> 
			- Developed a <strong>cross-lingual mapping method</strong>, 
			designing architectures to map embedding spaces of language models across two languages, evaluated 
			on sentiment analysis tasks. <br />
			- Employed modern techniques to refine model performance, achieving a 2–5% improvement on Vietnamese
			 datasets compared to machine translation inference using the Google Translate API.
			`,
		skills: ["Transformers", "Pytorch"],
	};
}

function experience_2() {
	return {
		date: "Sep 2024 - Dec 2024",
		title: "AI Chatbot Engineer Intern",
		company: "OPSWAT",
		description:
			`
			<strong>Location: </strong> Ho Chi Minh City, Vietnam <br />
			<strong>Description: </strong> <br />
			- AI Insights Tool: Leveraged the OpenAI API to develop a tool system to summarize content stored on datalake, extract relevant information, and store it in a relational database reducing processing time by 95% compared to manual summarization. <br />
			- Case Supporter Chatbot: Developed a chatbot system utilizing Retrieval-Augmented Generation (RAG) techniques to retrieve and provide information related from summarized data. Enhanced retrieval capabilities with Hybrid Search and Loop Prompting. <br />
			- Auto-update Cases Tool: Developed an automated program to detect new data in the data lake, process them through the summarization tool, and update the relational database.
			`,
		skills: ["FastAPI", "Pytorch", "OpenAI", "Langchain", "PostgreSQL", "MSSQL", "Prompting", "RAG"],
	};
}



const myExperiences = [experience_1, experience_2];

export default myExperiences; 