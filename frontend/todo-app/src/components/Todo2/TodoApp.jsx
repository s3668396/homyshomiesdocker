import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'

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
                        <Route path="/welcome/:name" component={WelcomeComponent}/>
                        <Route path="/todos" component={ListTodosComponent}/>
                        <Route path="/logout" component={LogoutComponent}/>
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

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn);

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a className="navbar-brand">Homys Homies</a></div>
                    <ul className="navbar-nav">
                        {<li><Link className="nav-link" to="/welcome/archmod">Home</Link></li>}
                        {<li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {<li><Link className="nav-link" to="/login">Login</Link></li>}
                        {<li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-muted">All rights reserved Josh Bacon 2019</span>
            </footer>
        )
    }
}

class LogoutComponent extends Component {
    render() {
        return (
            <div>
                <h1>You have been logged out</h1>
                <div className="container">
                    Thankyou for using our app
                </div>
            </div>
        )
    }
}

class ListTodosComponent extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            todos : 
            [
             {id: 1, description : 'Learn React', done:false, targetDate: new Date()},
             {id: 2, description : 'Get a GF', done:false, targetDate: new Date()},
             {id: 3, description : 'Git gud', done:false, targetDate: new Date()}
            ]
        }
    }

    render() {
            return (
            <div>
                <h1>List todos</h1>
                <div className="continer">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>description</th>
                                <th>Target Date</th>
                                <th>Is complete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.todos.map(
                            todo=> 
                                <tr>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td>{todo.done.toString()}</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <h1>Welcome</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link> 
                </div>
            </>
        )
    }
}

function ErrorComponent() {
    return <div>An error occurred, I dont know what to do UWU</div>
}
 
class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'archmod',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    // handleUsernameChange(event) {
    //     console.log(event.target.value);
    //     this.setState({username:event.target.value})
    // }
    
    // handlePasswordChange(event) {
    //     console.log(event.target.value);
    //     this.setState({password:event.target.value})
    // }

    handleChange(event) {
        //console.log(this.state);
        this.setState(
            {
                [event.target.name]
                    :event.target.value
            }
        )
    }

    loginClicked() {
        //valid username password combo: archmod, 123pass
        if(this.state.username==='archmod' && this.state.password==='123pass') {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`)
            //this.setState({showSuccessMessage:true})
            //this.setState({hasLoginFailed:false})
        }
        else {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
        
    }

    render() {
        return (
            <div>
                {/*<ShowInvalidCredentials hasLoginFailed= {this.state.hasLoginFailed}/>*/}
                {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid credentials</div>}
                    {this.state.showSuccessMessage && <div>Login successful</div>}
                    
                    User name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.loginClicked}>login</button>
                </div>
            </div>            
        )
    }
    
}

//function ShowInvalidCredentials(props) {
//     if(props.hasLoginFailed) {
//         return <div>Invalid credentials</div>
//     }
//     return null
// }


// function ShowLoginSuccessMessage(props) {
//     if(props.showSuccessMessage) {
//         return <div>Login successful</div>
//     }
//     return null
 

export default TodoApp