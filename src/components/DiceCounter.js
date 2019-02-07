import React, { Component } from 'react';

class DiceCounter extends Component {
    render(props) {
            return (
                <div className="die__counter">
                    <input type="button" value="-" className = "die__counter__button" onClick={this.props.decrement}></input>
                    <h3>{this.props.counter}</h3>
                    <input type="button" value="+" className="die__counter__button die__counter__button--increment" onClick={this.props.increment}></input>
                </div>
            );
        }
}

export default DiceCounter;