import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export class EmbeddedVideo extends Component {

    render() {
        return (
            <div>
                <p>
                    ===========================

                    {this.props.name}

                    ===========================
                </p>
            </div>
        )
    }
}


export default EmbeddedVideo;