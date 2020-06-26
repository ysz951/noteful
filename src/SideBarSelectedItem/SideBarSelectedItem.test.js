import React from 'react';
import ReactDOM from 'react-dom';
import SideBarSelectedItem from './SideBarSelectedItem';
import { BrowserRouter } from 'react-router-dom'
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><SideBarSelectedItem /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});