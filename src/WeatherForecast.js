/** @format */

import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
	function handleResponse(response) {
		console.log(response.data);
	}

	let apiKey = "363a40b39b4e3ccce0cde6739dbf3e8a";
	let longitude = props.coordinates.lon;
	let latitude = props.coordinates.lat;
	let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units="metric"`;
	axios.get(apiUrl).then(handleResponse);

	return (
		<div className="row">
			<div className="col">
				<div className="WeatherForecast">
					<div className="WeatherForecast-day">Thu</div>
					<div className="WeatherForecast-icon">
						<WeatherIcon code="10n" size={36} />
					</div>
					<div className="WeatherForecast-temperature">
						<span className="WeatherForecast-temperature-max">20°</span>
						<span className="WeatherForecast-temperature-min">10°</span>
					</div>
				</div>
			</div>
		</div>
	);
}
