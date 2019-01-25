import React, { Component } from 'react';
import Dice from './Dice';

class AllDice extends Component {
    render(){
        return(
            <div>
                <Dice name="d4" dMin={1} dMax={4} results={this.props.results}/>
                <Dice name="d6" dMin={1} dMax={6} results={this.props.results}/>
                <Dice name="d8" dMin={1} dMax={8} results={this.props.results}/>
                <Dice name="d10" dMin={1} dMax={10} results={this.props.results}/>
                <Dice name="d12" dMin={1} dMax={12} results={this.props.results}/>
                <Dice name="d20" dMin={1} dMax={20} results={this.props.results}/>
                <Dice name="d100" dMin={1} dMax={100} results={this.props.results}/>
            </div>
        )
    }
}

export default AllDice;