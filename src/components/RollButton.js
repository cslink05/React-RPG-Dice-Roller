import React from 'react';


class RollButton extends React.Component {
    constructor(props) {
        super(props);
        this.wasclicked = this.wasclicked.bind(this);
        
    }

    wasclicked = () => {
        let diceArray = '';
        let rollTotal = 0;

        function getRandomInt (min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            let dieRoll = Math.floor(Math.random() * (max - min + 1)) + min;
            diceArray += dieRoll + ' ';
            rollTotal = rollTotal + dieRoll;
        }

        for (let i = 0; i < this.props.counter; i++) {
            getRandomInt(this.props.minSides, this.props.maxSides);
        }
        
        this.props.changeRoll(this.props.counter + 'd' + this.props.maxSides + ': ' + diceArray + ' = ' + rollTotal);
    }
    
    render() {
        return <input type="button" className="die__roll" onClick={this.wasclicked} value="Roll"></input>;
    }
}

export default RollButton;
