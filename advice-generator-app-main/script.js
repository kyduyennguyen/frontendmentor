"use strict";
// import dataJson from "./data.json" with { type: "json" };

let adviceNum = document.getElementById("number-advice");
let adviceText = document.querySelector(".quotes");
let btnChangeQuotes = document.getElementById("btn-change-quote");

// Run showQuotes when page loaded
window.onload = showQuotes;

// When click button to change advice it will continue to change advice quote
btnChangeQuotes.addEventListener("click", () => {
	showQuotes();
});

// showQuotes function to show random quotes from API
async function showQuotes() {
	const response = await fetch("https://api.adviceslip.com/advice", {
		cache: "no-cache",
	})
		.then((res) => res.json())
		.then((data) => data.slip)
		.then((data) => {
			adviceNum.textContent = data.id;
			adviceText.textContent = data.advice;
		})
		.catch((error) => {
			alert(`Error ${error}`);
		});
	return response;
}
