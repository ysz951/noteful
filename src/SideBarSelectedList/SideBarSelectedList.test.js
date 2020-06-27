import React from 'react';
import ReactDOM from 'react-dom';
import SideBarSelectedList from './SideBarSelectedList';
import { BrowserRouter } from 'react-router-dom'
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><SideBarSelectedList /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});