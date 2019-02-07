import React, { Component } from 'react';

class Results extends Component {
    render(){
        return (
            <div className="result">
                    {this.props.results.map(roll => (
                        <p class="result__value" key={roll}>{roll}</p>
                    ))}
            </div>
        )
    }
}

export default Results;