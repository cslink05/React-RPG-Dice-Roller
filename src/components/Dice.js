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

    //Increase the quantity of dice being rolled
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

    //Decrease the quantity of dice being rolled
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
            <div className="die">
                {/* Component to increase or decrease the quantity of dice being rolled */}
                <DiceCounter
                    counter={this.state.counter}
                    increment={this.increment}
                    decrement={this.decrement} />
                <h3 className="die__name">{this.props.name}</h3>
                {/* Button Component to perform the random number calculation for each individual dice */}
                <RollButton
                minSides={this.props.dMin}
                maxSides={this.props.dMax}
                counter={this.state.counter}
                changeRoll={this.props.changeRoll}/>
            </div>

        )
    }
}

export default Dice;