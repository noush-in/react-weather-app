import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";


export default function WeatherForecast(){
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