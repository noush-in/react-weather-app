/** @format */

import React from "react";

import "./App.css";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<h1>Weather App</h1>
				<button type="button" className="btn btn-primary">
					buttn
				</button>
				<footer>
					This project is coded by{" "}
					<a href="https://github.com/noush-in" target="_blank">
						Noushin Heidari
					</a>{" "}
					and it's{" "}
					<a
						href="https://github.com/noush-in/react-weather-app"
						target="_blank">
						Open sourced on github
					</a>
					<div class="card">
						<div class="card-body">This is some text within a card body.</div>
					</div>
				</footer>
			</div>
		</div>
	);
}
