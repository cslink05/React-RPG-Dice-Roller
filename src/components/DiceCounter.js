import React, { Component } from 'react';

class DiceCounter extends Component {
    render(props) {
            return (
                <div>
                    <input type="button" value="-" onClick={this.props.decrement}></input>
                    <h3>{this.props.counter}</h3>
                    <input type="button" value="+" onClick={this.props.increment}></input>
                </div>
            );
        }
}

export default DiceCounter;