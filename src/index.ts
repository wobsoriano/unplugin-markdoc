import { createUnplugin } from 'unplugin'
import { dataToEsm } from '@rollup/pluginutils'
import Markdoc from '@markdoc/markdoc'
import type { Options } from './types'

const mdExtRE = /\.(md)$/i

export function transformMarkdown(code: string, options?: Options) {
  const ast = Markdoc.parse(code)
  const content = Markdoc.transform(ast, options)

  return content
}

export default createUnplugin<Options | undefined>(options => ({
  name: 'unplugin-markdoc',
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
  transformInclude(id) {
    return mdExtRE.test(id)
  },
}))
