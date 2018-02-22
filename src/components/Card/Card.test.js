import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('should match snapshot', () => {
    const renderedComponent = shallow(<Card />)

    expect(renderedComponent).toMatchSnapshot();
  })
})