import { createUnplugin } from 'unplugin'
import { dataToEsm } from '@rollup/pluginutils'
import Markdoc from '@markdoc/markdoc'
import type { Options } from './types'

const mdExtRE = /\.(md|md\?html)$/i

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

    const treeNode = transformMarkdown(code, options)

    const format = id.split('?')[1]
    if (format === 'html') {
      return {
        code: dataToEsm(Markdoc.renderers.html(treeNode), {
          preferConst: true,
          namedExports: false,
        }),
      }
    }

    return {
      code: dataToEsm(treeNode, {
        preferConst: true,
        namedExports: false,
      }),
    }
  },
  transformInclude(id) {
    return mdExtRE.test(id)
  },
}))
