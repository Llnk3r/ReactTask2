import React from 'react';

class Hi extends React.Component {
    render() {
        return (
            <div>My name is {this.props.name}</div>
        )
    }
}

export default Hi;