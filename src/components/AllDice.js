import React, { Component } from 'react';
import Dice from './Dice';
import Results from './Results';

class AllDice extends Component {
    constructor(props){
        super(props);
        this.state = { rollResult: [] };
        this.changeRoll = this.changeRoll.bind(this);
        this.clearRoll = this.clearRoll.bind(this);
    }

    changeRoll(num) {
        this.setState({
            rollResult: this.state.rollResult.concat(num + ' ') 
        });
    }

    clearRoll() {
        this.setState({
            rollResult: []
        })
    }


    render(){
        return(
            <div className="app">
                <div className="header">
                    <h1><i class="fas fa-dice-d20"></i>RPG Dice Roller</h1>
                </div>
                <div className="rollers">
                    <div>
                        <h1 class="rollers__many">How many?</h1>
                        <Dice name="d4" dMin={1} dMax={4} changeRoll={this.changeRoll}/>
                        <Dice name="d6" dMin={1} dMax={6} changeRoll={this.changeRoll}/>
                        <Dice name="d8" dMin={1} dMax={8} changeRoll={this.changeRoll}/>
                        <Dice name="d10" dMin={1} dMax={10} changeRoll={this.changeRoll}/>
                        <Dice name="d12" dMin={1} dMax={12} changeRoll={this.changeRoll}/>
                        <Dice name="d20" dMin={1} dMax={20} changeRoll={this.changeRoll}/>
                        <Dice name="d100" dMin={1} dMax={100} changeRoll={this.changeRoll}/>  
                    </div>
                    <div>
                        <h1 className="result__header">Result</h1>
                        <Results results={this.state.rollResult}/> 
                        <button className="result__clear" onClick={this.clearRoll}>Clear</button> 
                    </div>
                </div>
            </div>
        )
    }
}

export default AllDice;