import React from 'react'
import renderer from 'react-test-renderer'

import { ErrorMessage } from './ErrorMessage'

test('Link changes the class when hovered', () => {
  const component = renderer.create(<ErrorMessage heading="HEADING" message="MESSAGE" />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
