import React from 'react';

class RollButton extends React.Component {
    constructor(props) {
        super(props);
        this.wasclicked = this.wasclicked.bind(this);
        this.getRandomInt = this.getRandomInt.bind(this);
        
    }
    

    getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        let dieRoll = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(dieRoll);
    }

    wasclicked = () => {
        for (let i = 0; i < this.props.counter; i++){
            this.getRandomInt(this.props.minSides, this.props.maxSides);
        }
    }
    
    render() {
        return <input type="button" onClick={this.wasclicked} value="Roll"></input>;
    }
}

export default RollButton;
