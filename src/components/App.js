import React from 'react';
import RollButton from './RollButton';

class App extends React.Component {
    render(){
        return (
            <RollButton dmin={1} dmax={20} />
        )
    }
}

export default App;