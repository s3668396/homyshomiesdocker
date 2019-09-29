import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import MapApp from './Components/Todo/MapApp.js';
class MapAPI extends Component {
    render() {
        return (
            <div>

                <h1>welcome to the RMIT map API</h1>
                <MapApp />
            </div>
        )
    }
}

export default withRouter(MapAPI)