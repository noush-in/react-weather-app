/** @format */

import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
	let [loaded, setLoaded] = useState(false);
  let[forecast,setForecast]=useState(null);
	function handleResponse(response) {
		setForecast(response.data.daily);
		setLoaded(true);
	}

	if (loaded) {
    console.log(forecast);
		return (
			<div className="row">
				<div className="col">
				<WeatherForecastDay data={forecast[0]}/>
				</div>
			</div>
		);
	} else {
		let apiKey = "363a40b39b4e3ccce0cde6739dbf3e8a";
		let longitude = props.coordinates.lon;
		let latitude = props.coordinates.lat;
		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
    return null;
	}
}
