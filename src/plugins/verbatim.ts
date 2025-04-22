import { PluginFn } from '../types.js'

export const pluginVerbatim: PluginFn<undefined> = (edge, firstRun) => {
  if (firstRun) {
    const blocks: string[] = []

    edge.global('__verbatimBlocks', blocks)

    const storeRawBlock = (content: string) => {
      const placeholder = `{{{ __verbatimBlocks[${blocks.length}] }}}`
      blocks.push(content)
      return placeholder
    }

    edge.processor.process('raw', ({ raw }) => {
      return raw.replace(
        /(?<!@)@verbatim(\s*)(.*?)(@endverbatim|@end)/gs,
        (_match, whitespace, content) => {
          return whitespace + storeRawBlock(content)
        }
      )
    })
  }
}
