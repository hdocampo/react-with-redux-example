import React from 'react';
import { mount, shallow, render } from 'enzyme';

import App from './App';

describe('App', () => {
  it('should render the App component', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();

    component.unmount();
  })
})