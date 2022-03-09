/** @format */

import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState(props.defaultCity);

	function handleResponse(response) {
		console.log(response.data);
		setWeatherData({
			ready: true,
			temperature: response.data.main.temp,
			humidity: response.data.main.humidity,
			description: response.data.weather[0].description,
			wind: response.data.wind.speed,
			city: response.data.name,
			icon: response.data.weather[0].icon,
			date: new Date(response.data.dt * 1000),
		});
	}

	function Search() {
		let apiKey = "363a40b39b4e3ccce0cde6739dbf3e8a";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		Search();
	}
	function handleChangeCity(event) {
		setCity(event.target.value);
	}

	if (weatherData.ready) {
		return (
			<div className="Weather">
				<form onSubmit={handleSubmit}>
					<div className="row mb-3">
						<div className="col-9">
							<input
								type="search"
								placeholder="Enter a city..."
								className="form-control"
								autoFocus="on"
								onChange={handleChangeCity}
							/>
						</div>
						<div className="col-3">
							<input type="submit" className="btn btn-primary" />
						</div>
					</div>
				</form>
				<WeatherInfo data={weatherData} />
			</div>
		);
	} else {
		Search();
		return "loading...";
	}
}
