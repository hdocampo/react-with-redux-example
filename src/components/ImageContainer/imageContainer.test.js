import React from 'react';
import { mount, shallow, render } from 'enzyme';

import ImageContainer from './imageContainer';

const clickFn = jest.fn();

describe('ImageContainer', () => {
    it('should render the ImageContainer component', () => {
        const component = shallow(<ImageContainer onClick={clickFn} />);

        component.find('img')
            .simulate('click');

        expect(clickFn).toHaveBeenCalled();

        expect(component).toMatchSnapshot();

        component.unmount();
    })
})