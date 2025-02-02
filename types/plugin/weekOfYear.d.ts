import { PluginFunc } from 'dayjs'

declare const plugin: PluginFunc
export default plugin

declare module 'dayjs' {
  interface Dayjs {
    week(): number

    week(value : number): Dayjs
  }
}
