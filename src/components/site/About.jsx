import React from "react";
import { Component } from 'react'
class About extends Component {
    constructor(props) {
        alert("constructor called")
        super();
        this.state = {
            count: 0
        }

        // this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        alert("componentDidMount called")
    }

    componentWillUnmount() {
        alert("componentwillunMount called")
    }

    componentDidUpdate(prevprops, prevstate) {
        console.log(prevstate)
        if (prevstate.count === 5) {
            alert("componentDidUpdate called")
        }
    }

    decrease = () => {
        this.setState({ count: this.state.count - 1 })
    }
    
    render() {
        alert("render called")
        return (
            <>
                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-primary" onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
                    {this.state.count}
                    <button className="btn btn-primary" onClick={this.decrease}>-</button>
                </div>
                <h1>hello world this is first class component</h1>
            </>
        )
    }
}

export default About;