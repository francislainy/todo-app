import React, {Component} from "react";
import AuthenticationService from "./AuthenticationService";

class LoginComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

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

    loginClicked() {
        console.log("state")
        if (this.state.username === 'in28min' && this.state.password === 'dummy') {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
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
                <h1>Login</h1>
                <div className="container"/>
                {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Successful Login</div>}
                Username: <input type="text" name="username" value={this.state.username}
                                 onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password}
                                 onChange={this.handleChange}/>
                <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
            </div>
        )
    }

}

export default LoginComponent