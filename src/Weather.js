/** @format */

import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });

	function handleResponse(response) {
		console.log(response.data);
		setWeatherData({
			ready: true,
			temperature: response.data.main.temp,
			humidity: response.data.main.humidity,
			description: response.data.weather[0].description,
			wind: response.data.wind.speed,
			city: response.data.name,
			icon: `https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png`,
			date: new Date(response.data.dt * 1000),
		});
	}

	if (weatherData.ready) {
		return (
			<div className="Weather">
				<form>
					<div className="row mb-3">
						<div className="col-9">
							<input
								type="search"
								placeholder="Enter a city..."
								className="form-control"
								autoFocus="on"
							/>
						</div>
						<div className="col-3">
							<input type="submit" className="btn btn-primary" />
						</div>
					</div>
				</form>
				<h1>{weatherData.city}</h1>
				<ul>
					<li>
						<FormattedDate date={weatherData.date} />{" "}
					</li>
					<li className="text-capitalize">{weatherData.description}</li>
				</ul>
				<div className="row mt-4">
					<div className="col-6">
						<div className="clearfix d-flex">
							<img src={weatherData.icon} alt={weatherData.description} />
							<span className="temperature">
								{Math.round(weatherData.temperature)}
							</span>
							<span className="unit">°C</span>
						</div>
					</div>
					<div className="col-6">
						<ul>
							<li>Humidity :{weatherData.humidity}% </li>
							<li>Wind: {weatherData.wind} m/h</li>
						</ul>
					</div>
				</div>
			</div>
		);
	} else {
		let apiKey = "363a40b39b4e3ccce0cde6739dbf3e8a";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
		return "loading...";
	}
}
