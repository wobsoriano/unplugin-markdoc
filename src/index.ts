import type { Plugin } from 'vite'
import { dataToEsm } from '@rollup/pluginutils'
import Markdoc from '@markdoc/markdoc'

type Options = Parameters<typeof Markdoc.transform>['1']

const mdExtRE = /\.(md)$/i

export function composeImportableTreeNodes(code: string, options?: Options) {
  const ast = Markdoc.parse(code)
  const content = Markdoc.transform(ast, options)

  return dataToEsm(content, {
    preferConst: true,
    namedExports: true,
  })
}

export default function (options?: Options): Plugin {
  return {
    name: 'vite-plugin-markdoc',
    enforce: 'pre',
    transform(code, id) {
      if (!mdExtRE.test(id))
        return null

      return {
        code: composeImportableTreeNodes(code, options),
        map: { mappings: '' },
      }
    },
  }
}
