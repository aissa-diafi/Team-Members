import React, { Component } from "react";

class App extends Component {

    state = {
        number: 0
    }

    clickHandler = this.clickHandler.bind(this)


    clickHandler() {
        this.setState(prevState => {
            return { number: prevState.number + 1 }
        })
    }

    render() {
        return (
            <div className="container">
                <h1>{this.state.number}</h1>
                <button
                    className="btn btn-primary"
                    onClick={this.clickHandler}>
                    Click Me!
                </button>
            </div>
        )
    }
}

export default App