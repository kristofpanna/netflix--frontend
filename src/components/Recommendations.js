import React, { Component } from 'react'
import RecommendationItem from "./RecommendationItem";

export class Recommendations extends Component {

    render() {
        return this.props.recommendations.map(recomm => (
            <RecommendationItem
                key={recomm.id}
                recommendation={recomm}
            />
        ));
    }
}


export default Recommendations;