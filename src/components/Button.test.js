import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

it('button renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button />, div);
  ReactDOM.unmountComponentAtNode(div);
});