import React, { Component } from 'react';
import VideoItem from './VideoItem';


class Videos extends Component {
    render() {
        return this.props.videos.map(video => (
            <VideoItem
                video={video}
            />
        ));
    }
}


export default Videos;

