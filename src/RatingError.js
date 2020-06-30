import React, { Component } from 'react';

class RatingError extends Component {
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    constructor(props) {
        super(props);
        this.state = {
          hasError: false
        };
    }
    render() {
        if (this.state.hasError) {      
          return (
            <h2>Could not display this currency.</h2>
          );
        }
        return this.props.children;
    }
}

export default RatingError;