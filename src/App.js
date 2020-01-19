import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import './App.css';
import axios from 'axios';
import Videos from './components/Videos';
import VideoDetails from "./components/pages/VideoDetails";


class App extends Component {
    state = {
        videos: [
            {
                id: 1,
                name: "Mando",
                url: "https://www.youtube.com/watch?v=V7yqW64Dx7c"
            },
            {
                id: 2,
                name: "Mando",
                url: "https://www.youtube.com/watch?v=V7yqW64Dx7c"
            }
        ]
    };

    componentDidMount() {

        axios.get('http://192.168.0.234:8762/video/video/')
            .then(res => this.setState({
                videos: res.data
            }));


    }

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header />
                        <Route
                            exact path="/"
                            render={ props =>
                                <React.Fragment>
                                    <Videos
                                        videos={this.state.videos}
                                    />
                                </React.Fragment>
                            }
                        />
                        <Route
                            path="/video/"
                            component={VideoDetails}
                            render={ props =>
                                <React.Fragment>
                                    <VideoDetails
                                        details={this.state.details}
                                    />
                                </React.Fragment>
                            }
                        />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
