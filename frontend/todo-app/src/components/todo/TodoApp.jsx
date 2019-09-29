import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import HeaderComponent from'./HeaderComponent'
import AuthenticatedRoute from './AuthenticatedRoute'
import LoginComponent from './LoginComponent'
import ListTodosComponent from './ListTodosComponent'
import LogoutComponent from './LogoutComponent'
import WelcomeComponent from './WelcomeComponent'
import FooterComponent from './FooterComponent'
import MapComponent from './MapComponent'

class TodoApp extends Component {
    render() {
        return (
            <div className = "TodoApp">
                <Router>
                    <> 
                        <HeaderComponent/>
                        <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                        <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                        <AuthenticatedRoute path="/map" component={MapComponent}/>

                        <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                        <Route component={ErrorComponent} />
                        </Switch> {/* ensures that only one of these routes is shown at a given time */}
                        <FooterComponent/>
                    </>
                </Router>
                
                {/*<LoginComponent/>
                <WelcomeComponent/> */}
            </div>
        )
    }
}




function ErrorComponent() {
    return <div>An error occurred, I dont know what to do UWU</div>
}
 
export default TodoApp