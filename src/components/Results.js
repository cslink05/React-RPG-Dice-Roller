import React, { Component } from 'react';

class Results extends Component {
    render(){
        return (
            <div>
                    {this.props.results.map(roll => (
                        <p className="result__value" key={roll}>{roll}</p>
                    ))}
            </div>
        )
    }
}

export default Results;