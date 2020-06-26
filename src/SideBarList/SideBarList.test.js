import React from 'react';
import ReactDOM from 'react-dom';
import SideBarList from './SideBarList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SideBarList />, div);
  ReactDOM.unmountComponentAtNode(div);
});