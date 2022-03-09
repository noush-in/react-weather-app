/** @format */

import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<Weather defaultCity="Tehran"/>
				<footer>
					This project is coded by{" "}
					<a
						href="https://github.com/noush-in"
						target="_blank"
						rel="noopener noreferrer">
						Noushin Heidari
					</a>{" "}
					and it's{" "}
					<a
						href="https://github.com/noush-in/react-weather-app"
						target="_blank"
						rel="noopener noreferrer">
						Open-sourced on GitHub
					</a>
				</footer>
			</div>
		</div>
	);
}
