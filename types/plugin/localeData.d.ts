import { PluginFunc } from 'dayjs'

declare const plugin: PluginFunc
export default plugin

declare module 'dayjs' {
  interface Dayjs {
    localeData(): any
  }
}
