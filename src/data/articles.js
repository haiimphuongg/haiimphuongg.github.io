import React from "react";

function article_1() {
	return {
		date: "Mar 2024",
		title: "Từ RNN đến Transformers (Phần 1: RNN)",
		description:
			"Giới thiệu về lịch sử ra đời, kiến trúc của RNN và một số ví dụ về ứng dụng của nó trong lĩnh vực NLP.",
		keywords: [
			"RNN",
			"Transformers",
			"NLP",
			"Machine Learning",
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
		date: "Apr 2024",
		title: "Từ RNN đến Transformers (Phần 2: LSTM - Một bước tiến lớn từ RNN)",
		description:
			"Bài viết này sẽ giới thiệu một số cải tiến của RNN, đặc biệt là LSTM, giúp giải quyết vấn đề về gradient vanishing/exploding và không thể xử lý được các bài toán có độ dài chuỗi lớn.",
		style: ``,
		keywords: [
			"LSTM",
			"RNN",
			"Transformers",
			"NLP",
			"Machine Learning",
		],

		notionUrl: "https://shadow-toy-1d9.notion.site/T-RNN-n-Transformers-Ph-n-2-LSTM-M-t-b-c-ti-n-l-n-t-RNN-1d4a3a55c5418069b24cfb45dde1b10a?pvs=74", 
	};
}

function article_3() {
	return {
		date: "Apr 2024",
		title: "Từ RNN đến Transformers (Phần 3: Bidirectional RNN)",
		description:
			"Giới thiệu về Bidirectional RNN, một cải tiến của RNN để cải thiện việc hiểu context của chuỗi dữ liệu thông qua cơ chế học hai chiều.",
		style: ``,
		keywords: [
			"LSTM",
			"RNN",
			"Bidirectional RNN",
			"Bidirectional",
			"Transformers",
			"NLP",
			"Machine Learning",
		],

		notionUrl: "https://shadow-toy-1d9.notion.site/T-RNN-n-Transformers-Ph-n-3-Bidirectional-RNN-1d7a3a55c54180c2b8d1ff962c3923fd?pvs=4", 
	};
}
const myArticles = [article_1, article_2, article_3];

export default myArticles;
