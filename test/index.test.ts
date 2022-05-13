import path from 'path'
import { expect, test } from 'vitest'
import MarkdocLoader from '../src'

test('Correct markdown to tree-shakable ES Module imports', () => {
  // @ts-expect-error: Fix later
  const result = MarkdocLoader().transform!('', path.join(__dirname, 'content.md'))
  expect(result).toMatchSnapshot()
})
