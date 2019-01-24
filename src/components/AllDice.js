import React, { Component } from 'react';
import Dice from './Dice';

class AllDice extends Component {
    render(){
        return(
            <div>
                <Dice name="d4" dMin={1} dMax={4}/>
                <Dice name="d6" dMin={1} dMax={6}/>
                <Dice name="d8" dMin={1} dMax={8}/>
                <Dice name="d10" dMin={1} dMax={10}/>
                <Dice name="d12" dMin={1} dMax={12}/>
                <Dice name="d20" dMin={1} dMax={20}/>
                <Dice name="d100" dMin={1} dMax={100}/>
            </div>
        )
    }
}

export default AllDice;