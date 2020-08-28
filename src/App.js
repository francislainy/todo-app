import React, {Component} from 'react'

class App extends Component {
    render() {
        return (
            <div className="App">
                <LoginComponent/>
            </div>
        )
    }
}

class LoginComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
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

    render() {
        return (
            <div>
                Username: <input type="text" name="username" value={this.state.username}
                                 onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password}
                                 onChange={this.handleChange}/>
                <button>Login</button>
            </div>
        )
    }
}

export default App;
