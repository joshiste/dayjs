import { PluginFunc } from 'dayjs'

declare const plugin: PluginFunc
export default plugin

declare module 'dayjs' {

  export function isMoment(input: any): boolean

}
