import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import { withRouter } from 'react-router';
import MapAPI from './MapAPI.jsx';

class MapComponent extends Component{
    render() {
        return (
            <div>
                <h1>welcome to the RMIT map API</h1>
                <div class="mapContainer">
                    <MapAPI></MapAPI>
                </div>
            </div>
        );
    }
}
export default withRouter(MapComponent)