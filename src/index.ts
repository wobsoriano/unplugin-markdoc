import type { Plugin } from 'vite'
import { dataToEsm } from '@rollup/pluginutils'
import Markdoc from '@markdoc/markdoc'

export type Options = Parameters<typeof Markdoc.transform>['1']

const mdExtRE = /\.(md)$/i

export function transformMarkdown(code: string, options?: Options) {
  const ast = Markdoc.parse(code)
  const content = Markdoc.transform(ast, options)

  return content
}

export default function (options?: Options): Plugin {
  return {
    name: 'vite-plugin-markdoc',
    enforce: 'pre',
    transform(code, id) {
      if (!mdExtRE.test(id))
        return null

      const esm = transformMarkdown(code, options)

      return {
        code: dataToEsm(esm, {
          preferConst: true,
          namedExports: true,
        }),
        map: { mappings: '' },
      }
    },
  }
}
