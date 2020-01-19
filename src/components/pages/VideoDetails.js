import React, { Component } from 'react'
import Recommendations from '../Recommendations'
import EmbeddedVideo from '../EmbeddedVideo'

export class VideoDetails extends Component {

    render() {
        const details = this.props.details;
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
}


export default VideoDetails;