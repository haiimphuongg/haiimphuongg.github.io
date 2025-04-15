import React from "react";

function article_1() {
	return {
		date: "Jan 2025",
		title: "Từ RNN đến Transformers (Phần 1: RNN)",
		description:
			"Giới thiệu về lịch sử ra đời, kiến trúc của RNN và một số ví dụ về ứng dụng của nó trong lĩnh vực NLP.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,

		notionUrl: "https://shadow-toy-1d9.notion.site/T-RNN-n-Transformers-Ph-n-1-RNN-117a3a55c5418051b245d8480cf3c2a9?pvs=74"
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],

		notionUrl: "https://shadow-toy-1d9.notion.site/T-RNN-n-Transformers-Ph-n-1-RNN-117a3a55c5418051b245d8480cf3c2a9", // Thay thế bằng URL Notion thực tế
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
