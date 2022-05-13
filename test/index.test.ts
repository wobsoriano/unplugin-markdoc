import { readFile } from 'fs/promises'
import { expect, test } from 'vitest'
import { composeImportableTreeNodes } from '../src'

test('Correct markdown to tree-shakable ES Module imports', async () => {
  const content = await readFile('test/content.md', 'utf-8')
  const result = composeImportableTreeNodes(content)
  expect(result).toMatchSnapshot()
})
