import React, { Component } from 'react';

class Results extends Component {
    render(){
        return (
            <div>
                    {/* The roll result state is displayed to the user with the latest roll at the top of the list */}
                    {this.props.results.slice(0).reverse().map((roll, index) => (
                        <p className="result__value" key={index}>{roll}</p>
                    ))}
            </div>
        )
    }
}

export default Results;