import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import SmallCard from '../../../src/components/common/SmallCard';

test('SmallCard', () => {
  const props = {
    title: 'title',
    label: 'label',
    icon: 'star',
  };
  const snapshot = renderer.create(<SmallCard {...props} />);
  expect(snapshot).toMatchSnapshot();
});
