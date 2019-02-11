import React, { Component } from 'react';

class DiceCounter extends Component {
    render(props) {
            return (
                <div className="die__counter">
                    {/* Button to decrease the quantity of dice to be rolled */}
                    <input type="button" value="-" className = "die__counter__button" onClick={this.props.decrement}></input>
                    {/* The current quantity of dice to be rolled. This value is used in the random number generator calculation */}
                    <h3 className="die__counter__value">{this.props.counter}</h3>
                    {/* Button to increase the quantity of dice to be rolled */}
                    <input type="button" value="+" className="die__counter__button die__counter__button--increment" onClick={this.props.increment}></input>
                </div>
            );
        }
}

export default DiceCounter;