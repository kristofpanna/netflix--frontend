import React, { Component } from 'react'

export class RecommendationItem extends Component {

    render() {
        const { rating, comment } = this.props.recommendation;
        return (
            <div>
                ---
                <p>Rating: {rating}</p>
                <p>Comment: {comment}</p>
            </div>
        )
    }
}


export default RecommendationItem;