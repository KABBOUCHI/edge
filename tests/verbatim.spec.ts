/*
 * edge.js-parser
 *
 * (c) EdgeJS
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import dedent from 'dedent-js'
import { test } from '@japa/runner'
import { Edge } from '../src/edge/main.js'

test.group('verbatim', () => {
  test('blocks are compiled', async ({ assert }) => {
    const edge = new Edge()

    const templateContent = dedent`@verbatim\n<div class="container">Hello, {{ name }}.</div>\n@end`

    const output = await edge.renderRaw(templateContent, {
      name: 'virk',
    })

    assert.equal(output, `<div class="container">Hello, {{ name }}.</div>`)
  })
})
