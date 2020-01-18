import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export class VideoItem extends Component {

    render() {
        const { id, name } = this.props.video;
        return (
            <div>
                <Link to={`/video/${id}`}>
                    {id}. { name }
                </Link>
            </div>
        )
    }
}


export default VideoItem;