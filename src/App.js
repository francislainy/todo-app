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
            this.setState({showSuccessMessage: true})
            this.setState({hasLoginFailed: false})
        } else {
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed: true})
            console.log('Failed')
        }
    }

    render() {
        return (
            <div>
                <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}></ShowInvalidCredentials>
                <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}></ShowLoginSuccessMessage>
                Username: <input type="text" name="username" value={this.state.username}
                                 onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password}
                                 onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }

}

function ShowInvalidCredentials(props) {
    if (props.hasLoginFailed) {
        return <div>Invalid Credentials</div>
    }
    // else {
    //     return <div>Login Successful</div>
    // }

    return null
}

function ShowLoginSuccessMessage(props) {
    if (props.showSuccessMessage) {
        return <div>Successful Login</div>
    }

    return null
}

export default App;
