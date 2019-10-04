import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import { withRouter } from 'react-router';
import InstructorApp from '../mentoring/InstructorApp';

class MentoringAPIComponent extends Component{
    render() {
        return (
            <div>
                <h1>welcome to the Mentoring API</h1>
                <div>
                    <InstructorApp/>
                </div>
            </div>
        );
    }
}
export default withRouter(MentoringAPIComponent)