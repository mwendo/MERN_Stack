import React, { Component } from 'react';

class Personcard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            incrementAge: props.age
        };
    }

    birthday = () => {
        console.log(this.state.incrementAge);
        this.setState({incrementAge: this.state.incrementAge +1});
    }

    render() {
        return <div>
            <h1>{this.props.lastName}, {this.props.firstName}</h1>
            <p>Age: {this.state.incrementAge}</p>
            <p>Hair color: {this.props.hairColor}</p>
            <button onClick={this.birthday}>Happy Birthday!</button>
        </div>
    }
}

export default Personcard;