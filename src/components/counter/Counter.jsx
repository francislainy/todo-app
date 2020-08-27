import React, { Component } from 'react'
import './counter.css'
import PropTypes from 'prop-types'

class Counter extends Component {

    constructor() {
        super()

        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this)
        this.decreament = this.decreament.bind(this)
        this.reset = this.reset.bind(this)

    }

    render() {
        return (
            <div className="counter" >
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decreament} />
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decreament} />
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decreament} />
                <span className="count"> {this.state.counter}</span>
                <div><button className="reset" onClick={this.reset}>Reset</button></div>
            </div>
        )
    }


    reset() {
        this.setState({ counter: 0 })
    }


    increment(by) {
        console.log(`increment from child - ${by}`)
        this.setState(
            (prevState) => {
                return { counter: prevState.counter + by }
            }
        )
    }

    decreament(by) {
        console.log(`decreament from child - ${by}`)
        this.setState(
            (prevState) => {
                return { counter: prevState.counter - by }
            }
        )
    }
}

class CounterButton extends Component {

    constructor() {
        super();
        this.state = {
            counter: 0
        }

    }

    render = () => {

        const style = { fontSize: "50px", padding: "15px 30px" }

        return (
            <div className="counter" >
                <button onClick={this.increment}>+{this.props.by}</button>
                <button onClick={this.decreament}>-{this.props.by}</button>
            </div>
        )
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + this.props.by,
        })

        this.props.incrementMethod(this.props.by)
    }


    decreament = () => {
        this.setState({
            counter: this.state.counter - this.props.by,
        })

        this.props.decrementMethod(this.props.by)
    }

}


CounterButton.defaultProps = {
    by: 2
}

CounterButton.propTypes = {
    by: PropTypes.number
}

export default Counter