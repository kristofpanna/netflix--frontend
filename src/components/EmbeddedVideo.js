import React, {Component} from 'react'
import {Link} from 'react-router-dom';


export class EmbeddedVideo extends Component {

    render() {
        return (
            <iframe src={this.props.url}
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
            />
        )
    }
}


export default EmbeddedVideo;