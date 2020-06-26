import React, { Component } from 'react';
import SideBarSelectedItem from '../SideBarSelectedItem/SideBarSelectedItem'
import { withRouter } from 'react-router-dom';
class SideBarSelectedList extends Component {
    static defaultProps = {
    };

    render(){
        const {folder, history} = this.props;
        return (
            <nav className='sideBar'>
                <ul className="sideBarList">
                    <SideBarSelectedItem folder={folder}/>
                </ul>
                <button onClick={() => history.goBack()}>back</button>
            </nav>
        );
    }
}

export default withRouter(SideBarSelectedList);
