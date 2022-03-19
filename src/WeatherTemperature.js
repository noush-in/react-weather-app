/** @format */

import React, { useState } from "react";

export default function WeatherTemperature(props) {
	const [unit, setUnit] = useState(props.celsius);



	function showCelsius(event) {
		event.preventDefault();
		setUnit("metric");
	}
	function showFahrenheit(event) {
		event.preventDefault();
		setUnit("imperial");
	}

	function Celcius() {
		return (props.celsius);
	}

	function fahrenheit() {
		return (props.celsius * 9) / 5 + 32;
	}


	if (unit === "metric" ) {
		return (
			<div className="WeatherTemperature">
				<span className="temperature">{Math.round(Celcius())}</span>
				<span className="unit">
					°C |
					<a href="/" onClick={showFahrenheit}>
						°F
					</a>
				</span>
			</div>
		);
	} else {
		return (
			<div className="WeatherTemperature">
				<span className="temperature">{Math.round(fahrenheit())}</span>
				<span className="unit">
					<a href="/" onClick={showCelsius}>
						{" "}
						°C
					</a>{" "}
					|°F
				</span>
			</div>
		);
	}                                                                                                                                                                                                                                                     
}
