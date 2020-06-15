import React, { Component } from "react";
import axios from "axios";

export class RaceItems extends Component {
	state = {
		imgUrl: "",
	};

	componentDidMount() {
		const featured_media = this.props.race.featured_media;
		axios
			.get(`https://nikibrown.is/wp-json/wp/v2/media/${featured_media}`)
			.then((res) =>
				this.setState({
					imgUrl: res.data.media_details.sizes.thumbnail.source_url,
				})
			);
	}

	render() {
		const featuredImg = this.state.imgUrl;
		return (
			<>
				<h4>{this.props.race.title.rendered}</h4>
				<img src={featuredImg} alt={this.props.race.title.rendered} />

				<ul>
					<li>Race Location: {this.props.race.acf.race_location}</li>
					<li>Race Distance: {this.props.race.acf.race_distance}</li>
				</ul>
				<div
					dangerouslySetInnerHTML={{
						__html: this.props.race.excerpt.rendered,
					}}></div>
			</>
		);
	}
}
export default RaceItems;
