import React from 'react';

class RollButton extends React.Component {
    constructor(props) {
        super(props);
        this.wasclicked = this.wasclicked.bind(this);
    }

    wasclicked = () => {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            let result = Math.floor(Math.random() * (max - min + 1)) + min;
            console.log(result);
        }
        getRandomInt(this.props.dmin, this.props.dmax);
    }
    
    render() {
        return <input type="button" onClick={this.wasclicked} value="Roll"></input>;
    }
}

export default RollButton;
