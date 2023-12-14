/* eslint-disable no-console */
import {definePlugin} from 'sanity'

interface MyPluginConfig {
  /* nothing here yet */
}

/**
 * Usage in `sanity.config.ts` (or .js)
 *
 * ```ts
 * import {defineConfig} from 'sanity'
 * import {myPlugin} from 'sanity-plugin-sanity-test-publish'
 *
 * export default defineConfig({
 *   // ...
 *   plugins: [myPlugin()],
 * })
 * ```
 */
export const myPlugin = definePlugin<MyPluginConfig | void>((config = {}) => {
  console.log('hello from sanity-plugin-sanity-test-publish')
  console.log('2nd test console log')
  console.log('3rd test console log')
  return {
    name: 'sanity-plugin-sanity-test-publish',
  }
})
