import React, { Component } from "react";
import axios from "axios";
import RaceItems from "./RaceItems";

export class Races extends Component {
	state = {
		races: [],
		isLoaded: false,
	};
	componentDidMount() {
		axios
			.get("http://nikibrown.is/wp-json/wp/v2/racing")
			.then((res) =>
				this.setState({
					races: res.data,
					isLoaded: true,
				})
			)
			.catch((err) => console.log(err));
	}

	render() {
		const { races, isLoaded } = this.state;
		return (
			<div>
				{races.map((race) => (
					<RaceItems key={race.id} race={race} />
				))}
			</div>
		);
	}
}

export default Races;
