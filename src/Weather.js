/** @format */

import React from "react";
import "./Weather.css";

export default function Weather() {
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
			<h1>Kerman</h1>
			<ul>
				<li>Thursday 18:00</li>
				<li>Clear with periodic clouds</li>
			</ul>
			<div className="row mt-4">
				<div className="col-6">
					<div className="clearfix d-flex">
						<img
							src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
							alt="clear with periodic clouds"
						/>
						<span className="temperature">18</span>
						<span className="unit">°C</span>
					</div>
				</div>
				<div className="col-6">
					<ul>
						<li>Precipitation :0%</li>
						<li>Humidity :20% </li>
						<li>Wind: 9 m/h</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
