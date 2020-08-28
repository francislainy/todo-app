import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <Route path="/welcome/:name" component={WelcomeComponent}/>
                        <Route path="/todos" component={ListTodosComponent}/>
                        <Route component={ErrorComponent}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

class ListTodosComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos:
                [
                    {id: 1, description: 'Learn React'},
                    {id: 2, description: 'Become an Expert at React'},
                    {id: 3, description: 'Visit'},
                ]
        }
    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <table>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.todos.map(
                            todo =>
                                <tr>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

class WelcomeComponent extends Component {
    render() {
        return <div>Welcome {this.props.match.params.name}</div>
    }
}

function ErrorComponent() {
    return <div>An error occurred</div>
}

class LoginComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        console.log(event.target.name)
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    handleUsernameChange(event) {
        console.log(event.target.name)
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    handlePasswordChange(event) {
        console.log(event.target.value)
        this.setState({password: event.target.value}
        )
    }

    loginClicked() {
        console.log("state")
        if (this.state.username === 'in28min' && this.state.password === 'dummy') {
            console.log('Successful')
            this.props.history.push(`/welcome/${this.state.username}`)
            // this.setState({showSuccessMessage: true})
            // this.setState({hasLoginFailed: false})
        } else {
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed: true})
            console.log('Failed')
        }
    }

    render() {
        return (
            <div>
                {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Successful Login</div>}
                Username: <input type="text" name="username" value={this.state.username}
                                 onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password}
                                 onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }

}

export default TodoApp