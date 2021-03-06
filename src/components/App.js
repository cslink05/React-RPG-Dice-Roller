import React, { Component } from 'react';
import Dice from './Dice';
import Results from './Results';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { rollResult: [] };
        this.changeRoll = this.changeRoll.bind(this);
        this.clearRoll = this.clearRoll.bind(this);
    }

    //Adds the result of the number generator to the state when Roll is clicked
    changeRoll(num) {
        this.setState({
            rollResult: this.state.rollResult.concat(num + ' ')
        });
    }

    //Clears the state and displayed results
    clearRoll() {
        this.setState({
            rollResult: []
        })
    }

    render() {
        return (
            <div className="container">
                <div className="app">
                    <div className="header">
                        <h1><i className="fas fa-dice-d20"></i>RPG Dice Roller</h1>
                    </div>
                    <div className="rollers">
                        <div>
                            <h1 className="rollers__many">How many?</h1>
                            {/* Each die component contains the minimum and maximum number of sides, which are used in the random number generator*/}
                            <Dice name="d4" dMin={1} dMax={4} changeRoll={this.changeRoll} />
                            <Dice name="d6" dMin={1} dMax={6} changeRoll={this.changeRoll} />
                            <Dice name="d8" dMin={1} dMax={8} changeRoll={this.changeRoll} />
                            <Dice name="d10" dMin={1} dMax={10} changeRoll={this.changeRoll} />
                            <Dice name="d12" dMin={1} dMax={12} changeRoll={this.changeRoll} />
                            <Dice name="d20" dMin={1} dMax={20} changeRoll={this.changeRoll} />
                            <Dice name="d100" dMin={1} dMax={100} changeRoll={this.changeRoll} />
                        </div>
                        <div className="result">
                            <div className="result__top">
                                <h1 className="result__header">Result</h1>
                                <input type="button" className="result__clear" onClick={this.clearRoll} value="Clear"></input>
                            </div>
                            <div>
                                {/* The results from the random number generator are compiled and displayed here to the user */}
                                <Results results={this.state.rollResult} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;