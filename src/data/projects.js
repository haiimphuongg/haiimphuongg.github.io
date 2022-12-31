import React from "react";

function project_1() {
	return {
		title: "Book Borrowing Website",
		description:
			"A multi-library website with AI-powered features for managing and borrowing books, featuring a chatbot and backend system.",
		detail: [
			"Developed an AI chatbot using RAG with MongoDB vector search and Llama-3-8B for book information retrieval",
			"Built a FastAPI backend with MongoDB, implementing authentication and AI functionalities"
		],
		logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
		linkText: "View Project",
		link: "https://github.com/haiimphuongg/software-for-AI",
	};
}

function project_2() {
	return {
		title: "Vietnamese Text Readibility",
		description:
			"A text readability classification system for Vietnamese language, achieving near state-of-the-art performance",
		detail: [
			"Achieved F1 score of 0.91 on Vietnamese Text Readability Corpus using PhoBERTv2 and Llama-2-8B",
			"Implemented QLoRA technique to optimize LLM fine-tuning on local machines"
		],
		logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
		linkText: "View Project",
		link: "https://github.com/haiimphuongg/using_LLMs_for_text_readibility",
	};
}

function project_3() {
	return {
		title: "Disease Diagnosis System",
		description:
			"A multi-modal disease diagnosis system that analyzes both clinical reports and X-ray images",
		detail: [
			"Developed a system using MedVill vision-language model for multi-modal disease diagnosis",
			"Achieved 0.64 micro F1 and 0.872 micro AUROC on MINIC-CXR dataset"
		],
		logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
		linkText: "View Project",
		link: "https://github.com/haiimphuongg/medvill-custom",
	};
}

function project_4() {
	return {
		title: "CityScapes Semantic Segmentation",
		description:
			"Implemented advanced semantic segmentation architectures for urban scene understanding",
		detail: [
			"Built UNet and UNet Attention architectures from scratch for semantic segmentation",
			"Achieved mean IoU of 0.74 on CityScapes dataset"
		],
		logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
		linkText: "View Project",
		link: "https://github.com/haiimphuongg/cityscape-semantic-segmentation",
	};
}

function project_5() {
	return {
		title: "Simple Federated Learning",
		description:
			"An implementation of federated learning framework using Python and Flower",
		detail: [
			"Implemented federated learning framework using Python and Flower",
			"Enabled multiple clients to train models collaboratively while keeping data private"
		],
		logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
		linkText: "View Project",
		link: "https://github.com/haiimphuongg/AI4IS-federated-learning",
	};
}

const myProjects = [project_1, project_2, project_3, project_4, project_5];

export default myProjects; 