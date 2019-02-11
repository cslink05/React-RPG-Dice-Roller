import React from 'react';


class RollButton extends React.Component {
    constructor(props) {
        super(props);
        this.wasclicked = this.wasclicked.bind(this);
        
    }

    wasclicked = () => {
        //String of results from the random number generator. The result is also totaled if more than 1 die was rolled 
        let diceArray = '';
        let rollTotal = 0;

        //Calculates a random number based on the maximum number of sides of the dice. The result is added to a string
        function getRandomInt (min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            let dieRoll = Math.floor(Math.random() * (max - min + 1)) + min;
            diceArray += dieRoll + ' ';
            rollTotal = rollTotal + dieRoll;
        }

        //The number generator is run a set number of times based on the quantity of die selected from the Dice Counter component
        for (let i = 0; i < this.props.counter; i++) {
            getRandomInt(this.props.minSides, this.props.maxSides);
        }
        
        //The results of each roll are added to the array state of the app to be displayed in a meaningful way to the RPG player
        this.props.changeRoll(this.props.counter + 'd' + this.props.maxSides + ': ' + diceArray + ' = ' + rollTotal);
    }
    
    render() {
        return <input type="button" className="die__roll" onClick={this.wasclicked} value="Roll"></input>;
    }
}

export default RollButton;
