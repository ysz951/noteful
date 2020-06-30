import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import './SideBarSelectedList.css'
class SideBarSelectedList extends Component {
    static defaultProps = {
        folder: {}
    };

    render(){
        const {folder, history} = this.props;
        return (
            <nav className='sideBar'>
                <ul className="sideBarList">
                    <li className="sideBarSelectedItem">
                        <p>{folder.name}</p>
                    </li>
                </ul>
                <div className="goBack">
                    
                    <button 
                        className="goBackBtn" 
                        onClick={() => history.goBack()}
                        type='button'
                    >
                        <FontAwesomeIcon icon={faChevronLeft}/>
                        <span> BACK</span>
                    </button>
                </div>
            </nav>
        );
    }
}

export default SideBarSelectedList;
