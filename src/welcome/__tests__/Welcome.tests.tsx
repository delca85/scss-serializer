import React from 'react';
import renderer from 'react-test-renderer';
import { Welcome } from '../Welcome';

describe('Welcome component tests', () => {
  it('should render properly', () => {
    const component = renderer.create(<Welcome />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
