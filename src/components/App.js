import React from 'react';
import RollButton from './RollButton';
import DiceCounter from './DiceCounter';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 1 };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        });
        if(this.state.counter >= 10){
            this.setState({
                counter: 10
            });
        }
    }

    decrement() {
        this.setState({
            counter: this.state.counter - 1
        });
        if(this.state.counter <= 0){
            this.setState({
                counter: 0
            });
        }
    }
    
    render(){
        return (
            <div>
                <DiceCounter
                    counter={this.state.counter}
                    increment={this.increment}
                    decrement={this.decrement} />
                <h3>d4</h3>
                <RollButton dmin={1} dmax={4} /> 
            </div>
            
        )
    }
}

export default App;