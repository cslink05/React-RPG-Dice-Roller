import React, { Component } from 'react';
import DiceCounter from './DiceCounter';
import RollButton from './RollButton';

class Dice extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 1 };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        });
        if (this.state.counter >= 10) {
            this.setState({
                counter: 10
            });
        }
    }

    decrement() {
        this.setState({
            counter: this.state.counter - 1
        });
        if (this.state.counter <= 0) {
            this.setState({
                counter: 0
            });
        }
    }

    render() {
        return (
            <div>
                <DiceCounter
                    counter={this.state.counter}
                    increment={this.increment}
                    decrement={this.decrement} />
                <h3>{this.props.name}</h3>
                <RollButton minSides={this.props.dMin} maxSides={this.props.dMax} />
            </div>

        )
    }
}

export default Dice;