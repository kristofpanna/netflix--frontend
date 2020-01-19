import React, { Component } from 'react'
import Recommendations from '../Recommendations'
import EmbeddedVideo from '../EmbeddedVideo'
import axios from "axios";

export class VideoDetails extends Component {

    state = {
        details: {
            video: {
                id: 1,
                name: "Mando",
                url: "https://www.youtube.com/watch?v=V7yqW64Dx7c"
            },
            recommendations: [
                {
                    comment: "Baby Yoda for President!!!",
                    id: 1,
                    rating: 3,
                    videoId: 1
                },
                {
                    comment: "Baby Yoda for President!!! Again!",
                    id: 2,
                    rating: 4,
                    videoId: 1
                }
            ]
        }
    };

    render() {
        const details = this.state.details;
        if (details == null)
            return "";

        const { name, url } = details.video;
        return (
            <React.Fragment>
                <p>{ name }</p>
                <EmbeddedVideo
                    url={url}
                    name={name}
                />
                <Recommendations
                    recommendations={details.recommendations}
                />
            </React.Fragment>
        )
    }

    componentDidMount() {
        /*
        axios.get(`http://192.168.0.234:8762/video/${this.props.location.pathname}`)
            .then(res => this.setState({
                details: res.data
            }));



         */
    }
}


export default VideoDetails;