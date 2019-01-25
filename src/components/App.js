import React, {Component } from 'react';
import AllDice from './AllDice';
import Results from './Results';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            results: 'hello'
        }
    }
    render() {
        return (
            <div>
                <AllDice results={this.state.results}/>
                <Results results={this.state.results}/>
            </div>
        )
    }
}

export default App;