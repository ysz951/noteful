import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class HomePage extends Component {
    static defaultProps = {
        
    };

    render(){
        return (
            <div className='Home'>
                <Link to={`/`}>
                    <p>Home</p>
                </Link>
                
            </div>
        );
    }
}

export default HomePage ;
