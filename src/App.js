import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import './App.css';
import axios from 'axios';
import Videos from './components/Videos';


class App extends Component {
    state = {
        videos: [
        ]
    };

    componentDidMount() {
        axios.get('http://192.168.0.234:8762/video/video/')
            .then(res => this.setState({ videos: res.data }));
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
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
