import React, { Component } from 'react';
import SideBarSelectedItem from '../SideBarSelectedItem/SideBarSelectedItem'
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
class SideBarSelectedList extends Component {
    static defaultProps = {
    };

    render(){
        const {folder, history} = this.props;
        return (
            <div className='sideBar'>
                <ul className="sideBarList">
                    <SideBarSelectedItem folder={folder}/>
                </ul>
                <button onClick={() => history.goBack()}>back</button>
                {/* <ul>
                    <MainNoteItem key={i} note={note} deleteNote={deleteNote}/>)
                </ul>
                <p>123</p>
                 */}
            </div>
        );
    }
}

export default withRouter(SideBarSelectedList);
