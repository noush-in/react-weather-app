/** @format */

import React from "react";
import "./Weather.css";

export default function Weather() {
	return (
		<div className="Weather">
			<form>
				<div className="row">
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
			<div className="row mt-4">
				<div className="col-6">
					<ul>
						<h1>Kerman</h1>
						<li>Thursday 18:00</li>
						<li>Clear with periodic clouds</li>
						<li>
							<img
								src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
								alt="clear with periodic clouds"
							/>
							18°C
						</li>
					</ul>
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
